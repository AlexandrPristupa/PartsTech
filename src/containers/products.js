import React, { Component } from 'react';
import { object } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Product from './../components/product';
import * as actions from '../actions/actions';
import _ from 'lodash';

class Products extends Component {
  static propTypes = {
    products: object,
    product: object,
    purchasedProducts: object
  };

  handleSelectProduct = id => {
    this.props.selectProduct(id)
  };

  render() {
    const { product, products } = this.props;

    return (
      <div className='product-list'>
        { _.size(products) && (
          _.map(products, item => (
            <Product
              onHandleSelectProduct={this.handleSelectProduct}
              key={item.id}
              product={item}
              selectProductId={product.id}
            />
          ))
        ) }

        { !_.size(this.props.products) && (
          'Products not found'
        ) }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.reducer.products,
    product: state.reducer.product,
    purchasedProducts: state.reducer.purchasedProducts
  }
};

const mapDispatchToProps = dispatch => ({
...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
