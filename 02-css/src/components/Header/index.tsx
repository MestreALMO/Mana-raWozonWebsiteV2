import { Container, Left, Right } from "./styles";

const Header: React.FC = () => {
  return (
    <>
      <Container>
        <Left>
          <h1>Manaíra Wozon</h1>
        </Left>
        <Right>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Portfolio</a>
          <a href="/">Contact</a>
        </Right>
      </Container>
    </>
  );
};

export default Header;
