import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartLengthService {
  private cartLengthSubject = new BehaviorSubject<number>(0);
  cartLength$ = this.cartLengthSubject.asObservable();

  constructor() {}

  updateCartLength(length: number): void {
    this.cartLengthSubject.next(length);
  }
}
