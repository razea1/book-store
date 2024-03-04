import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  userId: string = ''; // Initialize the property here
  currentUser: User | null = null;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit(): void {
    // Retrieve the user ID from the route parameters
    this.route.params.subscribe((params) => {
      this.userId = params['id']; // Assuming the route parameter is named 'id'
      // Fetch user details based on the ID
      this.currentUser = this.usersService.getUserById(this.userId);
    });
  }
}
