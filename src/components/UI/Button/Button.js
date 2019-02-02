import React from 'react';
import classes from './Button.scss';

const Button = (props) => {
    return (
      <button
          onClick={props.onClick}
          className={`${classes.Button} ${classes[props.type]}`}
          disabled={props.disabled}
      >
          {props.children}
      </button>
    );
};

export default Button;