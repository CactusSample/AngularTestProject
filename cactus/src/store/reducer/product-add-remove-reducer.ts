
    import { ActionsUnion, ProductActionTypes } from '../action/product-add-remove-action';
    
    export const initialState = {
      items: [
        {
          "name": "Berries",
          "price": 23.54,
          "image": "/assets/images/berries.jpeg",
          "description": "The bestest fruit known to man. Sweet yet sour but beautiful"
        },
        {
          "name": "Orange",
          "price": 10.33,
          "image": "/assets/images/oranges.jpeg",
          "description": "Succulent and watery, you'll never run out of water"
        },
        {
          "name": "Lemons",
          "price": 12.13,
          "image": "/assets/images/lemons.jpeg",
          "description": "Sour but important for revitalization"
        },
        {
          "name": "Bananas",
          "price": 10.33,
          "image": "/assets/images/banana.jpeg",
          "description": "An every day fruit, can be served with every dish"
        },
        {
          "name": "Apples",
          "price": 10.33,
          "image": "/assets/images/apple-item.png",
          "description": "Sliced and served with your salad. Served as snacks midway through the day"
        }
      ],
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
          let cart = {
            product: {},
            qty: 0
          }
          console.log('containsObject', containsObject(action.payload, state.cart))
          if (containsObject(action.payload, state.cart).length > 0) {
            console.log('exist')
            let oldQty;
            oldQty = state.cart.filter((item) => {
              return item.product.name === action.payload.name
            })[0].qty;

            cart = state.cart.filter((item) => {
              return item.product.name === action.payload.name
            })[0];
            cart.qty = oldQty + 1;

          } else {
            console.log('not exist')
            cart = {
              product: action.payload,
              qty: 0
            }
          }
          return {
            ...state,
            cart: [{
              ...cart
            }]
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

    function containsObject(obj, list) {
     return list.filter((item) => {
       return item.product.name === obj.name
     })
  }