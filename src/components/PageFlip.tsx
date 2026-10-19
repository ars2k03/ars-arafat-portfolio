"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { NAV_ITEMS } from "@/utils/nav";

// momentum events come back to back, so only a fresh scroll at the edge flips
const NEW_GESTURE_GAP_MS = 180;
const TOUCH_THRESHOLD = 70;
const ARRIVAL_COOLDOWN_MS = 700;
const EXIT_MS = 220;
const ENTER_MS = 380;
const SHIFT = 48;
// browsers keep a wheel gesture locked to its original scroll target until the
// wheel rests (firefox: 1500ms) or the mouse moves, so after a flip native
// scrolling stalls on the new page; scroll it ourselves until the lock lifts
const WHEEL_LOCK_MS = 1500;
const LINE_HEIGHT_PX = 40;

type Direction = "next" | "prev";

let pendingEntrance: Direction | null = null;
let pendingScrollTop = false;
let pendingWheelTakeover = false;
let lastWheelEventAt = 0;
let exitAnimation: Animation | null = null;

export default function PageFlip() {
  const pathname = usePathname();
  const router = useRouter();

  const index = NAV_ITEMS.findIndex((item) => item.href === pathname);
  const next = index >= 0 ? NAV_ITEMS[index + 1] : undefined;
  const prev = index > 0 ? NAV_ITEMS[index - 1] : undefined;

  useEffect(() => {
    const main = document.querySelector("main");
    exitAnimation?.cancel();
    exitAnimation = null;
    if (pendingScrollTop) {
      pendingScrollTop = false;
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    if (!main || !pendingEntrance) return;

    const from = pendingEntrance === "next" ? SHIFT : -SHIFT;
    pendingEntrance = null;
    main.animate(
      [
        { opacity: 0, transform: `translateY(${from}px)` },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: ENTER_MS, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
  }, [pathname]);

  useEffect(() => {
    if (index < 0) return;

    const root = document.documentElement;
    const previousOverscroll = root.style.overscrollBehaviorY;
    root.style.overscrollBehaviorY = "none";

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const readyAt = performance.now() + ARRIVAL_COOLDOWN_MS;
    let navigating = false;
    let lastWheelAt = 0;
    let touchStartY: number | null = null;
    let touchCanNext = false;
    let touchCanPrev = false;
    let takeover = pendingWheelTakeover && performance.now() - lastWheelEventAt < WHEEL_LOCK_MS;
    let takeoverLastWheelAt = lastWheelEventAt;
    let scrollTarget: number | null = null;
    pendingWheelTakeover = false;

    const atBottom = () => window.innerHeight + window.scrollY >= root.scrollHeight - 2;
    const atTop = () => window.scrollY <= 0;
    const isBlocked = (target: EventTarget | null) =>
      navigating ||
      performance.now() < readyAt ||
      document.body.style.overflow === "hidden" ||
      (target instanceof Element && target.closest("textarea, input, select") !== null);

    const flip = (dir: Direction) => {
      const target = dir === "next" ? next : prev;
      if (!target || navigating) return;
      navigating = true;
      pendingScrollTop = true;

      const main = document.querySelector("main");
      if (!main || reducedMotion) {
        router.push(target.href, { scroll: false });
        return;
      }

      pendingEntrance = dir;
      exitAnimation = main.animate(
        [
          { opacity: 1, transform: "translateY(0)" },
          { opacity: 0, transform: `translateY(${dir === "next" ? -SHIFT : SHIFT}px)` },
        ],
        { duration: EXIT_MS, easing: "ease-in", fill: "forwards" },
      );
      // onfinish never fires in background tabs
      window.setTimeout(() => router.push(target.href, { scroll: false }), EXIT_MS);
    };

    const onWheel = (e: WheelEvent) => {
      const now = performance.now();
      const newGesture = now - lastWheelAt > NEW_GESTURE_GAP_MS;
      lastWheelAt = now;
      lastWheelEventAt = now;
      if (!newGesture || isBlocked(e.target)) return;

      const dir = e.deltaY > 0 && next && atBottom() ? "next" : e.deltaY < 0 && prev && atTop() ? "prev" : null;
      if (!dir) return;
      pendingWheelTakeover = true;
      flip(dir);
    };

    const endTakeover = () => {
      if (!takeover) return;
      takeover = false;
      window.removeEventListener("wheel", onTakeoverWheel);
      window.removeEventListener("mousemove", onTakeoverMouseMove);
    };

    const onTakeoverWheel = (e: WheelEvent) => {
      const now = performance.now();
      if (now - takeoverLastWheelAt > WHEEL_LOCK_MS) {
        endTakeover();
        return;
      }
      takeoverLastWheelAt = now;
      if (navigating || e.ctrlKey) return;

      // read deltaY before deltaMode so firefox reports pixels
      const dy = e.deltaY;
      const px = e.deltaMode === 1 ? dy * LINE_HEIGHT_PX : e.deltaMode === 2 ? dy * window.innerHeight : dy;
      e.preventDefault();
      const max = root.scrollHeight - window.innerHeight;
      scrollTarget = Math.min(Math.max((scrollTarget ?? window.scrollY) + px, 0), max);
      window.scrollTo({ top: scrollTarget, behavior: "smooth" });
    };

    // layout changes fire synthetic mousemoves with no movement; only a real move lifts the lock
    const onTakeoverMouseMove = (e: MouseEvent) => {
      if (e.movementX !== 0 || e.movementY !== 0) endTakeover();
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = null;
      if (e.touches.length !== 1 || isBlocked(e.target)) return;
      touchCanNext = Boolean(next) && atBottom();
      touchCanPrev = Boolean(prev) && atTop();
      if (touchCanNext || touchCanPrev) touchStartY = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchStartY === null) return;
      const dragged = touchStartY - e.touches[0].clientY;
      if (dragged > TOUCH_THRESHOLD && touchCanNext) flip("next");
      else if (dragged < -TOUCH_THRESHOLD && touchCanPrev) flip("prev");
      else return;
      touchStartY = null;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    if (takeover) {
      window.addEventListener("wheel", onTakeoverWheel, { passive: false });
      window.addEventListener("mousemove", onTakeoverMouseMove);
    }
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    return () => {
      root.style.overscrollBehaviorY = previousOverscroll;
      endTakeover();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [index, next, prev, router]);

  return null;
}
