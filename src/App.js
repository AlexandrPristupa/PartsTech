import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';
import Products from './containers/products';
import Controls from './containers/controls';

const App = () => {
  return (
    <Provider store={store}>
      <div className='vending-machine'>
        <Products />
        <Controls />
      </div>
    </Provider>
  );
};

export default App;
