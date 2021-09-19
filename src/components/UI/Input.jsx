import React from 'react';
import './UI.css';

const Input = (props) => {
  return (
    <input
      type={props.type || 'text'}
      className={`input ${props.className}`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;