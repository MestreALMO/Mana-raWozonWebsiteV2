import React from "react";
import Manaira from "../../../../assets/manaira.png";

import { Content, Text, Titulo } from "./styles";

import { AiOutlineRight } from "react-icons/ai";

const Homepage = () => {
  return (
    <>
      <Content>
        <Text>
          <Titulo>
            <h1>Manaíra&nbsp;</h1>
            <h1>Wozon</h1>
          </Titulo>
          <p>Architect, since 2020. Building and reforming.</p>
          <button>
            Contact <AiOutlineRight />
          </button>
        </Text>
        <img src={Manaira} alt="Manaíra Wozon" />
      </Content>
    </>
  );
};

export default Homepage;
