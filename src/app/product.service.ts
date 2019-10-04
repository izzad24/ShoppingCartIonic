import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = new BehaviorSubject([
    {
      name: "Steel Tip Dart",
      category: "Dart",
      addedToCart: false,
      qty: 1,
      maxQty: 30,
      price: 79.99,
      totalPrice: 79.99,
      img: "https://cdn7.bigcommerce.com/s-ri46k1gj8c/product_images/uploaded_images/steel-tip-darts.jpg",
      details: ["Switch your point length, style and color in seconds",
      "Pocket sized SP tool (SOLD SEPARATELY) is all you need to switch your points. Patented locking system using taper and threaded technology ensures your points stay locked in during play",
      "Engineered groove ensures broken points can still be removed with the SP Tool so your darts are never out of action",
      "90% Tungsten barrels",
      "Steel tip points"
      ],
    },
    {
      name: "Soft Tip Dart",
      category: "Dart",
      addedToCart: false,
      qty: 1,
      maxQty: 30,
      price: 119.99,
      totalPrice: 119.99,
      img: "https://cdn7.bigcommerce.com/s-ri46k1gj8c/product_images/uploaded_images/soft-tip-darts.jpg",
      details: [
        "90% Tungsten barrels",
        "2ba Shafts",
        "2ba Soft tip points",
        "V-Stream cut and precision milled for a unique grip"
      ],
    },
    {
      name: "Steel Tip Dartboard",
      category: "Dartboard",
      addedToCart: false,
      qty: 1,
      maxQty: 10,
      price: 49.99,
      totalPrice: 49.99,
      img: "https://cdn11.bigcommerce.com/s-ri46k1gj8c/images/stencil/1920w/products/5268/14380/viper%20Razorback%2042-6006__99232.1534031551.jpg",
      details: [
        "Completely staple-free spider for to eliminate bounce-outs",
        "Knife-blade thin wires to further prevent bounce-outs",
        "Movable number ring for extended board life",
        "Self-healing board constructed of sisal fibers",
        "Accommodates both steel and soft-tip dart sets",
        "18-inch diameter, 1.5-inch thick official size dartboard"
      ],
    }
  ])

  carts = new BehaviorSubject([])
  totalCartPrice = new BehaviorSubject(0)
  // tempCarts = []

  constructor() { }

  addQty(idx: number){
    let product = this.products.getValue()
    // console.log(idx)
    // console.log(product[idx].qty)
    if(product[idx].qty < product[idx].maxQty){
      product[idx].qty +=1
      product[idx].totalPrice = product[idx].qty * product[idx].price
    }
  }

  minusQty(idx: number){
    let product = this.products.getValue()
    if(product[idx].qty > 1){
      product[idx].qty -=1
      product[idx].totalPrice = product[idx].qty * product[idx].price
    }
  }

  addToCart(idx: number){
    let product = this.products.getValue()
    let tempCart = this.carts.getValue()
    // console.log(tempCart)
    tempCart.push(product.splice(idx, 1)[0])
    this.calculateTotalPrice()
    // console.log(product)
    // console.log(this.carts.value)
    // console.log(tempCart)
    }

  removeFromCart(idx: number){
    let cart = this.carts.getValue()
    let tempCart = this.products.getValue()

    tempCart.push(cart.splice(idx, 1)[0])
    this.calculateTotalPrice()
  }

  calculateTotalPrice(){
    let cart = this.carts.getValue()
    let tempPrice = 0
    for(let item of cart){
      tempPrice += item.totalPrice
    }
    this.totalCartPrice.next(tempPrice)
  }
}
