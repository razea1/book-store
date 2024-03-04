import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: any = [];
  total: number = 0;
  @Output() cartChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private CartService: CartService) {}

  ngOnInit(): void {
    this.cart = this.CartService.getCartItems();
    this.calculateTotal(); // Calculate total sum initially
  }
  calculateTotal(): number {
    this.total = 0;
    for (let product of this.cart) {
      this.total += product.price;
    }
    return this.total;
  }
  toggleGenre(product: any): void {
    product.selected = !product.selected;
  }

  cartCounter(): void {
    var cnt = this.cart.length;
    console.log('Number of items in cart: ' + cnt);
  }
  removeFromCart(product: Product): void {
    const index = this.cart.findIndex((item: Product) => item === product); // Find the index of the product in the cart array
    if (index !== -1) {
      this.cart.splice(index, 1); // Remove the product from the cart array
      this.calculateTotal(); // Recalculate total sum
    }
  }
  addToCart(product: Product): void {
    this.cart.push(product); // Add the same product again
    this.calculateTotal(); // Recalculate total sum
  }
  payment(): void {
    alert(
      'too much work to do this page also all the backend and visa api....'
    );
  }
}
