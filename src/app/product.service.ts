import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { 
      id: 1, 
      name: 'Bouneschlupp', 
      description: 'Traditional green bean soup', 
      price: 6.50, 
      location: 'Remich',
      sustainable: true,
      category: 'food'
    },
    {
      id: 2,
      name: 'Moselle Riesling',
      description: 'Local white wine from Luxembourg Moselle region',
      price: 12.80,
      location: 'Greiveldange',
      sustainable: true,
      category: 'food'
    },
    {
      id: 3,
      name: 'Hunnegskoup',
      description: 'Artisanal honey from Clervaux',
      price: 8.00,
      location: 'Clervaux',
      sustainable: true,
      category: 'food'
    },
    {
      id: 4,
      name: 'Kniddelen',
      description: 'Traditional Luxembourgish dumplings',
      price: 9.20,
      location: 'Esch-sur-Alzette',
      sustainable: false,
      category: 'food'
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}