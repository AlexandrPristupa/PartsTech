import React, { Component } from 'react';
import { object, number } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Input from './../components/input';
import Button from './../components/button';
import * as actions from '../actions/actions';
import _ from 'lodash';

class Controls extends Component {
  static propTypes = {
    product: object,
    cash: number
  };

  state = {
    message: '',
    change: 0
  };

  handleChange = event => {
    this.props.enterCash(+event.target.value)
  };

  handleClick = () => {
    if (_.size(this.props.product)) {
      debugger;
      if (this.props.cash >= this.props.product.prise) {
        const message = `You buy ${this.props.product.name}`;
        const change = +this.props.cash - this.props.product.prise;

        this.setState({
          message,
          change
        }, () => {
          this.props.buy(this.props.product.id);
        });
      } else {
        this.setState({
          message: !_.size(this.props.product) ? 'Select product!' : 'Not enough cash'
        })
      }
    }
  };

  render() {
    const { cash, product } = this.props;
    const { message, change } = this.state;

    return (
      <div className='controls'>
        <Input
          value={cash}
          handleChange={this.handleChange}
        />
        <Button
          disabled={cash > 0 && !_.size(product)}
          handleOnClick={this.handleClick}
        />

        {change && (
          `Change ${change}`
        )}

        <br/>

        {message && (
          `${message}`
        )}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cash: state.reducer.cash,
    product: state.reducer.product
  }
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
