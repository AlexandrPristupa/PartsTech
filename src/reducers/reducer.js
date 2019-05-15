import * as types from './../types/types';

const initialState = {
    products: {
      1: {
        id: '12145465484',
        name: 'Coca Cola',
        img: 'https://timeout.od.ua/image/cache/catalog/Coca-Cola%20(0.5)-800x800.png'
      },
      2: {
        id: '56854545455',
        name: 'Coca Cola',
        img: 'https://timeout.od.ua/image/cache/catalog/Coca-Cola%20(0.5)-800x800.png'
      },
      3: {
        id: '54835454544',
        name: 'Coca Cola',
        img: 'https://timeout.od.ua/image/cache/catalog/Coca-Cola%20(0.5)-800x800.png'
      },
      4: {
        id: '54868884848',
        name: 'Coca Cola',
        img: 'https://timeout.od.ua/image/cache/catalog/Coca-Cola%20(0.5)-800x800.png'
      }
    }
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case types.BUY:
        console.log(action);
        return { ...state };

      case types.SELECT_PRODUCT:
        console.log(action);
        return { ...state };
      default:
        return { ...state }
   }
}

export default reducer;
