export interface TechItem {
  name: string;
  logo: string;
}

export interface TechCategory {
  title: string;
  icon: string;
  items: TechItem[];
}
