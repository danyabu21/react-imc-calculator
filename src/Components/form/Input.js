import React from "react";
import { InputWrapper } from "./InputStyle";

const Input = ({
  name,
  placeholder,
  label,
  type,
  value,
  setValue,
  ...props
}) => {
  return (
    <InputWrapper>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={({ target }) => setValue(target.valueAsNumber)}
        {...props}
      />
    </InputWrapper>
  );
};

export default Input;
