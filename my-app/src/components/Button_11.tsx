import React from 'react';

type ButtonProps = {
  label: string;
};

const Button_11 = ({ label }: ButtonProps) => {
  return (
    <div>
      <button>{label}</button>
    </div>
  );
};

Button_11.defaultProps = {
  label: 'Hello',
};

export default Button_11;
