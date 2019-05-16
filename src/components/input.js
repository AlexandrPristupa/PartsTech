import React from 'react';
import { string, func } from 'prop-types';

const Input = ({ value, handleChange }) => (
  <input type='number' value={value} onChange={handleChange} max={10} min={1} />
);

Input.propTypes = {
  value: string,
  handleChange: func
};

export default Input;
