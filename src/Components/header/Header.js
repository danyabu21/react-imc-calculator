import React from "react";
import poweredBy from "../../Assets/powered.png";
import { HeaderWrapper } from "./HeaderStyle";
const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <img src={poweredBy} alt="Desenvolvido por BW7" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
