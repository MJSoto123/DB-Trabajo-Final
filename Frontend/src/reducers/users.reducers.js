import { TYPES } from "../actions/users.actions"; 

export const usersInitialState = {
  data: [],
};

export function usersReducer (state, action) {
  switch (action.type) {
    case TYPES.READ_USERS_DATA:
      return {
        ...state,
        data: action.payload.map(data => data)
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