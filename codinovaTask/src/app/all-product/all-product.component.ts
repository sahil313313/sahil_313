import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {
  products: any[] = [];
  cartItems: any[] = [];

  constructor(private apiService: ApiService,private cartService :CartService) {}

  ngOnInit(): void {
   
    this.cartItems = this.cartService.getCartItems();

    this.apiService.getAllProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(data)
      console.log(this.products)
    });
  }
 
  
   

  addToCart(product: any): void {
   
    const existingProduct = this.cartItems.find((item) => item.id === product.id);
  
    if (existingProduct) {
       
      alert(`Product "${product.title}" is already in the cart.`);
    } else {
     
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }
  imageData(data:any){
    console.log(data);
    
    this.cartService.setDataSubject(data) 

  }
}
