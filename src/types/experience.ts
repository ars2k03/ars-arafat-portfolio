export interface RoleLink {
  label: string;
  href: string;
}

export interface Role {
  title: string;
  organization: string;
  about: string;
  period: string;
  employmentType?: string;
  location: string;
  links: RoleLink[];
}
