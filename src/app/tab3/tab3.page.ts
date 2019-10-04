import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  carts = []
  totalCartPrice = 0
  constructor(private prodServices: ProductService) {}

  ngOnInit(){
    this.prodServices.carts.subscribe(data =>{
      this.carts = data
    })
    this.prodServices.totalCartPrice.subscribe(totalPrice =>{
      this.totalCartPrice = totalPrice
    })
  }

  removeItem(idx){
    this.prodServices.removeFromCart(idx)
  }
}
