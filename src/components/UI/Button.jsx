import React from 'react';
import './UI.css';

const Button = (props) => {
  return (
    <button 
      className={`button ${props.className}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
 
export default Button;