// import { Injectable } from '@angular/core';
//     import { Actions, Effect, ofType } from '@ngrx/effects';
//     import { EMPTY } from 'rxjs';
//     import { catchError, map, mergeMap } from 'rxjs/operators';
//     import { ProductActionTypes } from '../action/product-add-remove-action';
//     import { FruitService } from '../service/fruit.service';
    
//     @Injectable()
//     export class ShopEffects {
//       constructor(
//         private actions: Actions,
//         private fruitsService: FruitService
//       ) {}
      
//       @Effect()
//       loadFruits = this.actions.pipe(
//         ofType(ProductActionTypes.LoadItems),
//         mergeMap(() =>
//           this.fruitsService.getAll().pipe(
//             map(fruits => {
//               return { type: ProductActionTypes.LoadSuccess, payload: fruits };
//             }),
//             catchError(() => EMPTY)
//           )
//         )
//       );
//     }