import { Component, Input, OnInit } from '@angular/core';
import { User } from '../users.service';
import { CartService } from '../cart.service';
import { UsersService } from './../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() currentUser: User | null = null;
  cartLength: number = 0;

  constructor(private cartService: CartService, private userService: UsersService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    console.log(this.currentUser)
    this.cartLength = parseInt(localStorage.getItem('cartLength') || '0'); 
    this.cartService.cartUpdated.subscribe(length => {
      this.cartLength = length;
      localStorage.setItem('cartLength', length.toString()); 
    });
  }
}
