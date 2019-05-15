import React from 'react';

const Product = ({ id, name, img }) => (
  <div>
    {name}
    <img src={img} width='60' height='40' alt={name} />
  </div>
)

export default Product;
