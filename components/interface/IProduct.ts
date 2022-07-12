export interface IProduct {
  id: string;
  slug?: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  image: string;
  size?: string;
  color?: string;
}