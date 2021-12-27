import { TYPES } from "../actions/components.actions"; 

export const componentsInitialState = {
  categories: [null],
  
};

export const productsInitialState = {
  products: [],
  
};

export function ComponentsReducer (state, action) {
  switch (action.type) {
    case TYPES.READ_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.payload.map(data => data)
      }

    case TYPES.READ_PRODUCTS_DATA:
      return {        
        ...state,
        products: action.payload.map(data => data)
      }

    // case TYPES.INCREMENT_5:
    //   return { contador: state.contador + action.payload }
    
    // case TYPES.DECREMENT_5:
    //   return { contador: state.contador - action.payload }
      
    // case TYPES.RESET:
    //   return contadorInitialState;

    default:
      return state;
  }
}