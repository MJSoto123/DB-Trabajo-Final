import { TYPES } from "../actions/products.actions"; 

export const productsInitialState = {
  data: [],
};

export const oneproductInitialState = {
  data: {
    "subcategory": "",
    "namecategory": "",
  },
  error: "",
  redirectToReferrer: false
};

export const createproductInitialState = {
  data: {},
  error: "",
  redirectToReferrer: false
};

export function productsReducer (state, action) {
  switch (action.type) {
    case TYPES.READ_PRODUCTS_DATA:
      return {
        ...state,
        data: action.payload.map(data => data)
      }

    case TYPES.DELETE_ONE_ELEMENT:
      return {
        ...state,
        data: state.data.filter(e => e.model !== action.payload)
      }

    case TYPES.READ_PRODUCT_BY_ID:
      state = {
        ...state,
        data: action.payload
      };
      state.data.subcategory = `${action.payload.category.subcategory}`;
      state.data.namecategory = `${action.payload.category.category}`;
      return {
        ...state,
        data: state.data
      }
    
    case TYPES.MODIFY:
      // state.data[`${action.payload}`];
      state.data[`${action.payload.field}`] = `${action.payload.value}`;
      return { 
        ...state,
        data: state.data
      }
    
    case TYPES.CREATE:
      // state.data[`${action.payload}`];
      state.data[`${action.payload.field}`] = `${action.payload.value}`;
      return { 
        ...state,
        data: state.data
      }
      
    case TYPES.REDIRECT:
      return { 
        ...state,
        redirectToReferrer: true
      }

    default:
      return state;
  }
}