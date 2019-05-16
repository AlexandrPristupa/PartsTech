import React from 'react';
import { bool, func } from 'prop-types';

const Button = ({ disabled, handleOnClick }) => (
  <button disabled={disabled} onClick={handleOnClick}>Buy</button>
);

Button.propTypes = {
  disabled: bool,
  handleOnClick: func
};

export default Button;
