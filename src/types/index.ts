// Tipos TypeScript para la aplicación
export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  stock: number;
  isOffer?: boolean;
  isNew?: boolean;
  tags: string[];
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

export interface Offer {
  id: string;
  product: Product;
  discount: number;
  endDate: string;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface ContactForm {
  name: string;
  phone: string;
  message: string;
  product?: string;
}