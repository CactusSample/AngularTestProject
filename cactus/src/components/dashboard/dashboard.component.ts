import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { ProductDetails } from '../../models/product-details'
import { RestService } from './../../services/rest.service';
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

    constructor(private store: Store<{ items: []; cart: [] }>, private restService: RestService) {
        this.restService.getResource('V1/getproductdetails', this.API_URL).subscribe((data: ProductDetails[]) => {
            this.store.dispatch(new ProductActions.LoadItems(data));
        })
        store.pipe(select('product')).subscribe((data) => {
            console.log(data)
            this.products = data.items;
        });
    }

    ngOnInit() {
    }

}
