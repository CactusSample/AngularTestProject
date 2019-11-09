import { RestService } from './../../services/rest.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as ProductActions from '../action/product-add-remove-action'
import { ProductDetails } from 'src/models/product-details';

@Injectable()
export class ProductEffect {
    API_URL = 'https://shoppingcartpocwithazure20191106104438.azurewebsites.net/';

    constructor(private actions$: Actions, private restService: RestService) { }
    @Effect()
    productList = this.actions$.pipe(
        ofType(ProductActions.ProductActionTypes.LoadItems),
        switchMap(() => {
            return this.restService.getResource('V1/getproductdetails', this.API_URL)
            .pipe(
                map((resData: ProductDetails[]) => {
                    return new ProductActions.LoadItems(resData);
                }),
                catchError(() => {
                    return of(null)
                })
            )
        })
    );
}
