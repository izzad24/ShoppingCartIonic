import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  selectedProduct = null

  constructor(private prodServices: ProductService, private route: ActivatedRoute, private alertCtrl: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
    let prodIndex = this.route.snapshot.params.index
    this.prodServices.products.subscribe(data =>{
      this.selectedProduct = data[prodIndex]
    })
  }

}
