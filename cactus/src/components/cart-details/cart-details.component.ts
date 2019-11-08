import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartDetails: any;
  constructor(private store: Store<{ items: []; cart: [] }>) { }

  ngOnInit() {
    this.store.pipe(select('product')).subscribe((data) => {
      console.log('data', data);
      this.cartDetails = data.cart;
    });
  }

}
