
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
        },
        {
          "name": "Sharifa",
          "price": 10.33,
          "image": "/assets/images/unknown.jpeg",
          "description": "A great fruit, also known as custard apple"
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