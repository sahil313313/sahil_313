import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(this.apiUrl);
  }
  
}
