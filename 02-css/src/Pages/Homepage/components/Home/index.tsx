import { Container, GraySquare, Left, Right } from "./styles";
import Manaira from "../../../../assets/manaira.png";

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <GraySquare />
        <Left>
          <div>
            <h1>Manaíra&nbsp;</h1>
            <h1>Wozon</h1>
            <p>Architect, since 2020. Building and reforming.</p>
            <button>Contact me</button>
          </div>
        </Left>
        <Right>
          <img src={Manaira} alt="Manaíra Wozon" />
        </Right>
      </Container>
    </>
  );
};

export default Home;
