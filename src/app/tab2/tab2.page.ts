import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  products = []
  constructor(private prodServices : ProductService, private asCtrl: ActionSheetController, private navCtrl: NavController) {}

  ngOnInit(){
    this.prodServices.products.subscribe(data =>{
      this.products = data
    })
  }

  navigate(index){
    this.navCtrl.navigateForward("/details/" + index)
  }

  addQty(idx){
    console.log("add")
    this.prodServices.addQty(idx)
    
  }
  minusQty(idx){
    this.prodServices.minusQty(idx)
  }

  addToCart(idx){
    this.prodServices.addToCart(idx)
  }
}
