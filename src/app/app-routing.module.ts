import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { CartComponent } from './cart/cart.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to the register page by default
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registered-users', component: RegisteredUsersComponent },
  {path: 'home', component: HomeComponent},
  {path: 'products', component:ProductComponent},
  {path: 'contacts', component:ContactsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'user/:id', component:UserDetailsComponent},
  { path: '**', component: ErrorComponent } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
