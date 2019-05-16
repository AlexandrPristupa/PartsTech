import React from 'react';
import { string, func, number } from 'prop-types';

const Product = ({ product: { id, name, prise }, onHandleSelectProduct, selectProductId }) => {
  return (
    <div
      className={`product ${selectProductId === id ? 'product-active' : null }`}
      onClick={() => onHandleSelectProduct(id)}
    >
      {name}
      <br />
      {`${prise}$`}
    </div>
  )
};

Product.propTypes = {
  product: string,
  onHandleSelectProduct: func,
  selectProductId: number
};

export default Product;
