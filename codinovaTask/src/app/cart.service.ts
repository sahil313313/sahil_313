import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productData = new Subject<any>()
  cartItems: any[] = [
 
  ];

  setDataSubject(data: any) {
    this.productData.next(data)
  }
  getDataSubject() {
    return this.productData;
  }

  addToCart(product: any): void {
    this.cartItems.push(product);
  }
  
  removeFromCart(product: any): void {
    const index = this.cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems(): any[] {
    return this.cartItems;
  }
}
