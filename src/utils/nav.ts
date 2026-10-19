// Site sections in reading order. The navbar renders these, and scrolling
// past the end of one page flips to the next in this order.
export interface NavItem {
  label: string;
  href: string;
  tag?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "HOME", href: "/" },
  { label: "PROJECTS", href: "/projects" },
  { label: "EXPERIENCE", href: "/experience" },
  { label: "SKILLS", href: "/skills", tag: "HOT" },
  { label: "CONTACT", href: "/contact" },
];
