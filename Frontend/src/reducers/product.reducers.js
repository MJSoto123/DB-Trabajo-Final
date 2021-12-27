import { TYPES } from "../actions/product.actions"; 

export const productInitialState = {
  data: {
    category: {}
  }
};

export function productReducer (state, action) {
  switch (action.type) {
    case TYPES.READ_DATA:
      console.log(action.payload)
      return {
        ...state,
        data: action.payload
      }

    // case TYPES.READ_SUBCATEGORIES_DATA:
    //   return {
    //     subcategories: action.payload.map(e => e)
    //   }

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