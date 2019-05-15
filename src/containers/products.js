import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Product from './../components/product';
import * as actions from '../actions/actions';
import _ from 'lodash';

class Products extends Component {
  componentDidMount() {
    // console.log(this.props.products);
    // console.log(this.props);
  }

  render() {
    console.log(this.props.products);

    return (
      <>
        {_.map(this.props.products, product => <Product product={product} />)}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
};

const mapDispatchToProps = dispatch => ({
...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
