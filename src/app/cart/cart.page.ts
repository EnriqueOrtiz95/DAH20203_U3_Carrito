import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../models/cart';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cart: Cart;

  constructor(private cartService: CartService) {
    this.cart = this.cartService.getCart();
   }

   public removeFromCart(prod: Product, pos: number): void {
    this.cartService.reupdateCart(prod, pos);
  }

  ngOnInit() {
  }

}
