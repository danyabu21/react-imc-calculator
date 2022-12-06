import React from "react";
import { GridItemWrapper } from "./GridItemStyle";
import { ReactComponent as UpImage } from "../../Assets/good.svg";
import { ReactComponent as AlertImage } from "../../Assets/alert.svg";

export const GridItem = ({
  result,
  id,
  title,
  color,
  icon,
  imc,
  yourImc,
  ...props
}) => {
  return (
    <GridItemWrapper {...props} bgColor={color}>
      <div>{icon === "up" ? <UpImage /> : <AlertImage />}</div>
      <h3>{title}</h3>
      {result && <p>Seu IMC é de: {result.yourImc} km/m²</p>}
      <small>
        IMC está entre <strong>{imc[0]}</strong> e <strong>{imc[1]}</strong>
      </small>
    </GridItemWrapper>
  );
};
