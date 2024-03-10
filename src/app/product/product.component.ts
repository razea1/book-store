// product.component.ts
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service';
import { Product } from './../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  productCategories: string[] = [];
  newProducts: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService // Correct the injection token here
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();

    // Fetch new products and add to existing products
    const newProducts = this.productService.getNewProducts();
    this.products = this.products.concat(newProducts);

    // Fetch products of the week and add to existing products
    const productsOfWeek = this.productService.getWeekProducts();
    this.products = this.products.concat(productsOfWeek);

    // Fetch all product categories
    this.productCategories = this.productService.getProductCategories();
  }

  filterProductsByCategory(category: string): void {
    // Fetch all regular products
    let allProducts = this.productService.getProducts();

    // Fetch new products and products of the week
    const newProducts = this.productService.getNewProducts();
    const productsOfWeek = this.productService.getWeekProducts();

    // Concatenate all products
    allProducts = allProducts.concat(newProducts, productsOfWeek);

    // Filter products by category
    this.products = allProducts.filter(
      (product) => product.category === category
    );
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
  resetProducts(): void {
    this.products = this.productService.getProducts();
  }
}
