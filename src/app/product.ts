export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    location: string;
    sustainable: boolean;
    category: 'food' | 'craft' | 'service';
  }