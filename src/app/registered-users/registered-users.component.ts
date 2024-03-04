import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../users.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.getUsers();
  }
}
