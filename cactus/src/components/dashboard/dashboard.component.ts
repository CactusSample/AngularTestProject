import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ProductDetails } from '../../models/product-details'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private activeTab: number;
  cart : ProductDetails[] = [];
  products: any;

  constructor(private store: Store<{ items: []; cart: [] }>) { 
    store.pipe(select('product')).subscribe((data) => {
      console.log(data)
      this.products = data.items;
    });
  }

  ngOnInit() {
  }

}
