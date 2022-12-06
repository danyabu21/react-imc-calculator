import React from "react";
import { ButtonWrapper } from "./ButtonStyle";

const Button = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

export default Button;
