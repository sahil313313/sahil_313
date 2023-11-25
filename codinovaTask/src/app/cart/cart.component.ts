import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: any[] = [];
  subtotal: number = 0;
  vatTax: number = 0;
  discount: number = 0;
  total: number = 0;
  data :any
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    
    console.log(this.cartItems)
   
    this.cartService.getDataSubject().subscribe((data:any)=>{
     console.log(data);
     const existingProduct = this.cartItems.find((items) => items.id === data.id);
  
     if (existingProduct) {
      this.updateItem(data)
       
       alert(`Product "${data.title}" is already in the cart.`);
    
     } else {
      
       this.cartItems.push({ ...data, quantity: 1 });
      this.updateItem(data)

     }

    })
    this.calculateCartSummary();

  }

  calculateCartSummary(): void {

    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
   
  }
  updateItem(item: any): void {
    console.log(item);
    
    item.total = item.price * item.quantity;
    this.discount =this.discount + item.discountPercentage;
   
    this.calculateCartSummary(); 
    this.total = this.subtotal - (this.subtotal *  this.discount/100 )
  }
 
}
