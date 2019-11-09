import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductDetails } from 'src/models/product-details';
import { ClearCart } from 'src/store/action/product-add-remove-action';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  cartDetails: any;
  totalPrice = 0;
  showSuccessMessage: boolean = false;
  hideRestData: boolean = true;
  
  constructor(private store: Store<{ product: { items: []; cart: [] } }>, private router: Router) { }

  ngOnInit() {
    this.store.pipe(select('product')).subscribe((data) => {
      console.log('data price', data.cart);
      this.calculateTotal(data.cart);
      this.cartDetails = data.cart;
    });
  }

  calculateTotal(data: any){
    data.forEach((item) => {
      this.totalPrice = this.totalPrice + item.qty * item.product.price;
    });
    console.log('totalPrice', this.totalPrice)
  }

  showModalConfirmation(){
    this.showSuccessMessage = true;
    this.hideRestData = false;
    this.clearCart();
  }

  clearCart() {
    this.store.dispatch(new ClearCart());
    setTimeout(() => {
      this.router.navigate(["dashboard"]);

    }, 3000)
  }
 
}
