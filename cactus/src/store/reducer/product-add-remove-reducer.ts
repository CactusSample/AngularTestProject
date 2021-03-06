
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
            let i = state.cart.findIndex(item => item.product.name === action.payload.name)
            if (i === -1) {
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {
                            product: action.payload,
                            qty: 1
                        }
                    ]
                }
            }
            return {
                ...state,
                cart: [
                    ...state.cart.slice(0, i),
                    {
                        ...state.cart[i], qty: state.cart[i] ? state.cart[i].qty + 1 : 1
                    },
                    ...state.cart.slice(i + 1),
                ]
            }

        case ProductActionTypes.Remove:

            let x = state.cart.findIndex(item => item.product.name === action.payload.name)
            console.log('inside remove', action.qty);
            if (action.qty > 1) {
                return {
                    ...state,
                    cart: [
                        ...state.cart.slice(0, x),
                        {
                            ...state.cart[x], qty: state.cart[x] ? state.cart[x].qty - 1 : 1
                        },
                        ...state.cart.slice(x + 1),
                    ]
                }
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart.filter(item => item.product.name !== action.payload.name)]
                };
            }

        case ProductActionTypes.ClearCart:
            return {
                ...state,
                cart: []
            }

        default:
            return state;
    }
}