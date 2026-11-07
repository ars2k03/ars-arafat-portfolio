"use client";

import { useActionState, useEffect, useState } from "react";
import { sendContactMessage } from "@/actions/contact.actions";
import type { ContactState } from "@/types/contact";
import { displayFont } from "@/utils/fonts";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(sendContactMessage, {
    status: "idle",
    message: "",
    id: 0,
  });
  const [dismissedId, setDismissedId] = useState(0);
  const showToast = state.status !== "idle" && state.id !== dismissedId;

  useEffect(() => {
    if (state.status === "idle") return;
    const timer = setTimeout(() => setDismissedId(state.id), 5000);
    return () => clearTimeout(timer);
  }, [state]);

  const inputClass =
    "w-full min-h-[46px] px-3 py-2.5 rounded bg-[#fbf8f1] border border-[#1a1a1a] text-[#1a1a1a] font-sans text-base placeholder:text-[#6b6254] focus:outline-none focus:shadow-[3px_3px_0px_#7a2020] transition-shadow";
  const labelClass = "block mb-1.5 text-sm font-semibold text-[#1a1a1a]";

  return (
    <>
    {/* remount to restore input after an error */}
    <form
      key={state.id}
      action={formAction}
      className="h-full p-5 md:p-7 bg-[#f4efe2] border-[1.5px] border-[#1a1a1a] shadow-[4px_4px_0px_#1a1a1a] space-y-4"
    >
      <h3 className={`${displayFont.className} text-[1.75rem] md:text-[2rem] leading-tight text-[#1a1a1a]`}>
        Send a Message
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Name</label>
          <input id="name" name="name" defaultValue={state.fields?.name} type="text" required autoComplete="name" placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email</label>
          <input id="email" name="email" defaultValue={state.fields?.email} type="email" required autoComplete="email" placeholder="you@company.com" className={inputClass} />
        </div>
      </div>

      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>Subject</label>
        <input id="subject" name="subject" defaultValue={state.fields?.subject} type="text" required placeholder="Job opportunity, project, collaboration…" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" defaultValue={state.fields?.message} required rows={6} placeholder="Tell me a bit about the role or project." className={`${inputClass} resize-y`} />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-12 px-6 rounded bg-[#1a1a1a] text-[#fbf8f1] text-base font-semibold border-[1.5px] border-[#1a1a1a] transition-colors hover:bg-[#7a2020] hover:border-[#7a2020] cursor-pointer disabled:opacity-70 disabled:cursor-wait"
        >
          {pending ? (
            <>
              <span className="w-4 h-4 border-2 border-[#fbf8f1] border-t-transparent rounded-full animate-spin" aria-hidden="true" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <span>Send message</span>
              <span aria-hidden="true">→</span>
            </>
          )}
        </button>
      </div>
    </form>

    {showToast && (
      <div
        key={`toast-${state.id}`}
        role="status"
        aria-live="polite"
        className={`fixed bottom-6 right-4 left-4 sm:left-auto sm:max-w-sm z-50 flex items-start gap-3 px-4 py-3 border-2 border-[#1a1a1a] font-sans text-sm shadow-[4px_4px_0px_#1a1a1a] ${
          state.status === "success" ? "bg-[#e6efe1] text-[#1f4d22]" : "bg-[#f6e3e0] text-[#7a2020]"
        }`}
      >
        <span className="font-bold text-base leading-5" aria-hidden="true">
          {state.status === "success" ? "✓" : "!"}
        </span>
        <p className="flex-1 leading-5">{state.message}</p>
        <button
          type="button"
          onClick={() => setDismissedId(state.id)}
          aria-label="Dismiss"
          className="text-[#1a1a1a]/60 hover:text-[#1a1a1a] cursor-pointer leading-5"
        >
          ✕
        </button>
      </div>
    )}
    </>
  );
}
