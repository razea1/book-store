import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  constructor(private usersService: UsersService, private router: Router) {}

  login(): void {
    const isAuthenticated = this.usersService.login(
      this.username,
      this.password
    );
    if (isAuthenticated) {
      this.router.navigate(['/home']);
    } else {
      alert('Invalid username or password.');
    }
  }

  ngOnInit(): void {}
}
