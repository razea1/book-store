import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [];
  private currentUser: User | null = null;

  constructor() {
    // Initialize admin user
    const adminUser = new User(
      'adminId',          
      'admin',            
      'admin@example.com',
      'admin',            
      'Admin Address',    
      'https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg'   
    );
    this.addUser(adminUser);
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log('New User Added:', user);
    console.log('All Users:', this.users);
  }

  getUserById(userId: string): User | null {
    return this.users.find(user => user.id === userId) || null;
  }

  login(username: string, password: string): boolean {
    const authenticatedUser = this.users.find(
      (user) => user.UserName === username && user.Password === password
    );
    if (authenticatedUser) {
      this.currentUser = authenticatedUser;
      return true;
    }
    return false;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}

export class User {
  public id: string;
  public UserName: string;
  public Email: string;
  public Password: string;
  public Address: string;
  public ImageURL: string;
  Age: any;

  constructor(
    id: string,
    UserName: string,
    Email: string,
    Password: string,
    Address: string,
    ImageURL: string
  ) {
    this.id = id;
    this.UserName = UserName;
    this.Email = Email;
    this.Password = Password;
    this.Address = Address;
    this.ImageURL = ImageURL;
  }
}
