import { Action } from '@ngrx/store'
import { ProductDetails } from '../../models/product-details'

export enum ProductActionTypes{
    Add = '[ProductDetails] Add to cart',
    Remove = '[ProductDetails] Remove from cart',
    LoadItems = '[Products] Load items from server',
    LoadSuccess = '[Products] Load success',
    ClearCart = '[ProductDetails] clear cart data'
}

export class AddToCart implements Action {
    readonly type = ProductActionTypes.Add;
  
    constructor(public payload: ProductDetails) {}
  }
  
  export class GetItems implements Action {
    readonly type = ProductActionTypes.LoadItems;
  }
  
  export class RemoveFromCart implements Action {
    readonly type = ProductActionTypes.Remove;
  
    constructor(public payload: ProductDetails,public qty:number) {}
  }
  
  export class LoadItems implements Action {
    readonly type = ProductActionTypes.LoadSuccess;
  
    constructor(public payload: ProductDetails[]) {}
  }
  export class ClearCart implements Action {
    readonly type = ProductActionTypes.ClearCart;
    
  }
  
  export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems | ClearCart;