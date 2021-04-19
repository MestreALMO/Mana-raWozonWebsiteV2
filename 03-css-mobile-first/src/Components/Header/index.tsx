import React from "react";
import { HiMenu } from "react-icons/hi";

import { Content } from "./styles";

const Header = () => {
  return (
    <>
      <Content>
        <h1>Manaíra Wozon</h1>
        <button type="button">
          <HiMenu />
        </button>
      </Content>
    </>
  );
};

export default Header;
