import React from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';
import Products from './containers/products';

const App = () => {
  return (
    <Provider store={store}>
      <Products />
    </Provider>
  );
}

export default App;
