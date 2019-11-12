import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductDetails } from 'src/models/product-details';
import { ProductActionTypes, AddToCart, RemoveFromCart } from '../../store/action/product-add-remove-action'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private store: Store<{ product: { items: []; cart: [] } }>) { }

  ngOnInit() {
  }

  inCart = false;
  @Input() product: ProductDetails;
  @Input() qty: number;

  addToCart(item: ProductDetails) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: ProductDetails) {
    this.store.dispatch(new RemoveFromCart(item, this.qty));
    this.inCart = false;
  }
}
