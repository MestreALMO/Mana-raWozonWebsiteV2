import React from "react";

import { Content } from "./styles";

import Header from "../../Components/Header";
import Intro from "./Components/Intro";

const Homepage = () => {
  return (
    <>
      <Content>
        <Header />
        <Intro />
      </Content>
    </>
  );
};

export default Homepage;
