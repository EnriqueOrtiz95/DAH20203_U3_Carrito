import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart;

  constructor() {

    this.cart = {
      products: [],
      subtotal: 0,
      iva: 0,
      total: 0,
      qtyprod: 0,
      date: new Date()
    };

    /*this.cart.products = [];
    this.cart.subtotal = 0;
    this.cart.iva = 0;
    this.cart.total = 0;
    this.cart.date = new Date();
    this.cart.qtyprod = 0;*/
  }

  public getCart(): Cart {
    return this.cart;
  }

 public updateCart(prod: Product): Cart {

  if (this.cart.products.includes(prod)){
    const i = this.cart.products.indexOf(prod);
    this.cart.products[i].quantity++;
    this.cart.products[i].price *= this.cart.products[i].quantity;
    this.cart.subtotal += prod.price;
    this.cart.iva = this.cart.subtotal * 0.16;
    this.cart.qtyprod ++;
    this.cart.total = this.cart.subtotal + this.cart.iva;
    this.cart.date = new Date();
    return  this.cart;
  } else {
  this.cart.products.push(prod);
  this.cart.subtotal += prod.price;
  this.cart.iva = this.cart.subtotal * 0.16;
  this.cart.qtyprod ++;
  this.cart.total = this.cart.subtotal + this.cart.iva;
  this.cart.date = new Date();
  return  this.cart;
  }
 }

 public reupdateCart(prod: Product, pos: number): Cart{
  this.cart.products.splice(pos, 1);
  this.cart.subtotal -= prod.price;
  this.cart.iva = this.cart.subtotal * 0.16;
  this.cart.qtyprod--;
  this.cart.total = this.cart.subtotal + this.cart.iva;
  this.cart.date = new Date();
  return  this.cart;
 }

}
