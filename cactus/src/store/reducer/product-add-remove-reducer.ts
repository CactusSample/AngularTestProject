
    import { ActionsUnion, ProductActionTypes } from '../action/product-add-remove-action';
    
    export const initialState = {
      items: [],
      cart: []
    };
    
    export function ProductAddRemoveReducer(state = initialState, action: ActionsUnion) {
      switch (action.type) {
        case ProductActionTypes.LoadSuccess:
          return {
            ...state,
            items: [...action.payload]
          };
    
        case ProductActionTypes.Add:
          return {
            ...state,
            cart: [...state.cart, action.payload]
          };
    
        case ProductActionTypes.Remove:
          return {
            ...state,
            cart: [...state.cart.filter(item => item.name !== action.payload.name)]
          };
    
        default:
          return state;
      }
    }