import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  cartUpdated: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    // Load cart items from localStorage on service initialization
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
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); // Save cart items to localStorage
    this.cartUpdated.emit(this.cartItems.length); // Emit cartUpdated event
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems)); // Save cart items to localStorage
    this.cartUpdated.emit(this.cartItems.length); // Emit cartUpdated event
  }
}
