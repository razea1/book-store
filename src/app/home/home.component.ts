import { CartService } from './../cart.service';
import { UsersService } from './../users.service';
import { Product } from './../../product';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from './../google-books.service';
import { User } from '.././users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
newProducts: Product[] = [];
weekProducts: Product[] = [];
currentUser: User | null = null;
 

  constructor(private googleBooksService: GoogleBooksService, private productService: ProductService, private UsersService:UsersService, private CartService:CartService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.newProducts = this.productService.getNewProducts();
    this.weekProducts = this.productService.getWeekProducts();
    this.currentUser = this.UsersService.getCurrentUser();

  }
  scrollTo(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  toggleDescription(product: Product): void {
    product.showDescription = !product.showDescription; // Toggle the showDescription property
  }
  shortenDescription(description: string): string {
    const maxLength = 100; // Define the maximum length of the description
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...'; // Shorten the description and add ellipsis
    } else {
      return description; // Return the original description if it's already short
    }
  }
  addToCart(product: any): void{
    console.log()
    this.CartService.addToCart(product);
  }
  searchBooks(query: string): void {
    this.googleBooksService.searchBooks(query)
      .subscribe((data: any) => {
        // Process the search results if needed
        console.log(data);
      });
  }
}
