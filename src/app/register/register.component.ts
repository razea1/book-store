import { Component } from '@angular/core';
import { User } from '../users.service';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  newUser: User = new User('','', '', '', '', '');
  confirmPassword: string = '';
password: any;


  constructor(private usersService: UsersService, private router: Router) {}

  register(): void {
    // Check if any field is empty
    if (!this.newUser.UserName || !this.newUser.Password || !this.newUser.Email || !this.newUser.Address || !this.newUser.ImageURL) {
      let missingFields = [];
      if (!this.newUser.UserName) missingFields.push('Username');
      if (!this.newUser.Password) missingFields.push('Password');
      if (!this.newUser.Email) missingFields.push('Email');
      if (!this.newUser.Address) missingFields.push('Address');
      if (!this.newUser.ImageURL) missingFields.push('Image URL');
   
      
      alert(`Please fill in the following fields: ${missingFields.join(', ')}.`);
      return;
    }
  
    // Password matching validation
    
  
    // Register user
    try {
      this.usersService.addUser(this.newUser);
      alert('Registered successfully!');
      this.router.navigate(['/login']);
    } catch (error) {
      alert('Registration failed. Please try again later.');
      console.error(error);
    }
  }
}  