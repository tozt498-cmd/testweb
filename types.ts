export enum Category {
  DISCORD = 'DISCORD',
  WEBSITE = 'WEBSITE',
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  features: string[];
  category: Category;
  popular?: boolean;
  colSpan?: string; // Classe CSS pour la taille dans la grille (ex: "md:col-span-2")
}

export interface OrderData {
  discordUser: string;
  email: string;
  projectDescription: string;
  product: Product;
}