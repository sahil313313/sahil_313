import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstSirviceService {
Sservice : any;
stddata : any ;
datafromlog:any;
  constructor() { }
  multiply(a : any ,b :any){
    return a * b
  }
}
