import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartDetails: any;
  totalPrice = 0;
  constructor(private store: Store<{ items: []; cart: [] }>) { }

  ngOnInit() {
    this.store.pipe(select('product')).subscribe((data) => {
      console.log('data price', data.cart);
      this.calculateTotal(data.cart);
      this.cartDetails = data.cart;
    });
  }

  calculateTotal(data: any){
   
    console.log('calculate total',data);
   
    data.forEach((item) => {
      this.totalPrice = this.totalPrice + item.qty * item.product.price;
    });
    console.log('totalPrice', this.totalPrice)
  }

}
