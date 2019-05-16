import * as types from './../types/types';

const initialState = {
  products: {
    125: { id: 125, name: 'Coca Cola', prise: 1 },
    795: { id: 795, name: 'Coca Cola', prise: 2 },
    584: { id: 584, name: 'Pepsi Cola', prise: 1 },
    512: { id: 512, name: 'Snack', prise: 2 },
    541: { id: 541, name: 'Snack', prise: 2 },
    126: { id: 126, name: 'Snickers', prise: 1 }
  },
  product: {},
  cash: 1,
  purchasedProducts: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.BUY:
      const purchasedProducts = state.products[action.payload];
      delete state.products[action.payload];

      return {
        ...state,
        cash: 1,
        product: {},
        products: { ...state.products },
        purchasedProducts
      };

    case types.ENTER_CASH:
      return {
        ...state, cash: action.payload
      };

    case types.SELECT_PRODUCT:
      return {
        ...state,
        product: state.products[action.payload]
      };
    default:
      return {...state}
  }
};

export default reducer;
