import React from 'react';
import './style.less';

const Button = props => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
