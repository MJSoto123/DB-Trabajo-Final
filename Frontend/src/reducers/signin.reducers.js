import { TYPES } from "../actions/signin.actions"; 

export const signinInitialState = {
  categories: [null],
  logged: false,
  offers: null,
  most_sold_of_category: null
};

export function signinReducer (state, action) {
  switch (action.type) {
    case TYPES.READ_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.payload.map(data => data)
      }

    // case TYPES.DECREMENT:
    //   return { contador: state.contador - 1 }

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