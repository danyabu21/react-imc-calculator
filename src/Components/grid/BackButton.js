import React from "react";
import { BackButtonWrapper } from "./BackButtonStyle";
import { ReactComponent as BackIcon } from "../../Assets/back.svg";
export const BackButton = ({ ...props }) => {
  return (
    <BackButtonWrapper {...props}>
      <BackIcon />
    </BackButtonWrapper>
  );
};
