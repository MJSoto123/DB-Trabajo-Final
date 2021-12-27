import { TYPES } from "../actions/home.actions"; 

export const homeInitialState = {
  subcategories: []
};

export function homeReducer (state, action) {
  switch (action.type) {
    case TYPES.READ_CATEGORIES_DATA:
      return {
        ...state,
        categories: action.payload.map(data => data)
      }

    case TYPES.READ_SUBCATEGORIES_DATA:
      return {
        subcategories: action.payload.map(e => e)
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