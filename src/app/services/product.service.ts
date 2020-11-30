import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {

    this.products.push({
      name: 'Perro',
      photo: 'https://picsum.photos/id/239/200/300',
      description: 'Perrito bonito',
      price: 190.00,
      quantity: 1
    });

    this.products.push({
      name: 'Algo',
      photo: 'https://picsum.photos/id/231/200/300',
      description: 'Perrito bonito',
      price: 110.00,
      quantity: 1
    });

    this.products.push({
      name: 'Algo más',
      photo: 'https://picsum.photos/id/238/200/300',
      description: 'Perrito bonito',
      price: 120.00,
      quantity: 1
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
