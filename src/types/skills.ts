export interface TechItem {
  name: string;
  logo: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}
