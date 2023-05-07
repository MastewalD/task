import React, { useState } from 'react';
import './style.css';
const Input= (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;
  const handleFocuse = (e) => {
    setFocused(true);
  };
  return (
    <div>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocuse}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
export default Input;
