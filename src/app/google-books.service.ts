import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {
private apiUrl = 'https://www.googleapis.com/books/v1/volumes';
private apiKey = 'AIzaSyCRDAFEY8tn0EekettGU4ljJgrjQtZ0_VE'
  constructor(private http: HttpClient) { }


  searchBooks(query: string): Observable<any>{
    const url = `${this.apiUrl}?q=${query}&key=${this.apiKey}&maxResults=${5}`;
    return this.http.get(url);
  }
  filterBooksForSale(books: any[]): any[] {
    return books.filter(book => book.saleInfo?.saleability === 'FOR_SALE');
  }

}
