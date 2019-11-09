import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ProductDetails } from '../../models/product-details'
import * as ProductActions from '../../store/action/product-add-remove-action'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    cart: ProductDetails[] = [];
    products: any;
    API_URL = 'https://shoppingcartpocwithazure20191106104438.azurewebsites.net/';

    constructor(private store: Store<{ product: { items: []; cart: [] } }>) {
        store.dispatch(new ProductActions.GetItems());
        store.pipe(select('product')).subscribe((data) => {
            this.products = data.items;
        });
    }

    ngOnInit() {
    }

}
