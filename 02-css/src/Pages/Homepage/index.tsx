import { Container } from "./styles";

import Header from "../../components/Header/";
import Home from "./components/Home/";
import Info from "./components/Info";

const Homepage: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <Home />
        <Info />
      </Container>
    </>
  );
};

export default Homepage;
