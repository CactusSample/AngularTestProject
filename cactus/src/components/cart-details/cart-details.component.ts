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
  showEmptyCartMessage: boolean = false;
  
  constructor(private store: Store<{ product: { items: []; cart: [] } }>, private router: Router) { }

  ngOnInit() {
    this.store.pipe(select('product')).subscribe((data) => {
      this.calculateTotal(data.cart);
      this.cartDetails = data.cart;
    });
  }

  calculateTotal(data: any){
    console.log('calculate total', data)
    this.totalPrice = 0;
    data.forEach((item) => {
      this.totalPrice = this.totalPrice + (item.qty * item.product.price);
    });
    if(this.totalPrice == 0){
      this.displayEmptyCartMessage();
    }
  }

  showModalConfirmation(){
    this.showSuccessMessage = true;
    this.hideRestData = false;
    this.clearCart();
  }

  displayEmptyCartMessage(){
    this.hideRestData = false;
    this.showEmptyCartMessage = true;
  }

  clearCart() {
    this.store.dispatch(new ClearCart());
    setTimeout(() => {
      this.router.navigate(["dashboard"]);
    }, 3000)
  }
 
}
