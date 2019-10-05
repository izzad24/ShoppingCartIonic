import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemCount = 0
  totalCartPrice = 0

  constructor(private prodServices: ProductService) {}
  
  ngOnInit(){
    this.prodServices.itemCount.subscribe(data =>{
      this.itemCount = data
    })
    this.prodServices.totalCartPrice.subscribe(totalPrice =>{
      this.totalCartPrice = totalPrice
    })
  }

}
