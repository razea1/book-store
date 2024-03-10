import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  addToCart(item: any) {
    this.cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); 
    this.cartUpdated.emit(this.cartItems.length); 
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); 
    this.cartUpdated.emit(this.cartItems.length); 
  }
}
