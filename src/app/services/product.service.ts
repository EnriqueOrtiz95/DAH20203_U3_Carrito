import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  constructor() {

    this.products.push({
      name: 'Laptop',
      photo: 'https://cdn.alzashop.com/ImgW.ashx?fd=f3&cd=ADD19n10d',
      description: 'Laptop Alienware',
      price: 64000.00,
      quantity: 1
    });

    this.products.push({
      name: 'Consola de videojuegos',
      photo: 'https://i.blogs.es/d2a441/xboxonex/450_1000.jpg',
      description: 'Xbox',
      price: 4000.00,
      quantity: 1
    });

    this.products.push({
      name: 'Manga',
      photo: 'https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png/revision/latest?cb=20191030213927',
      description: 'Shingeki no Kyojin Manga',
      price: 2500.00,
      quantity: 1
    });
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
