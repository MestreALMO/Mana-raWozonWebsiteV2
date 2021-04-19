import styled from "styled-components";

export const Container = styled.div`
  background: transparent;
  max-width: 100vw;
`;

export const GraySquare = styled.div`
  background: var(--light-gray);
  height: 84%;
  width: 60%;
  margin-top: -98.4px;
  position: absolute;
  opacity: 0.2;
  z-index: -1;
`;

export const Left = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 18%;

  div {
    height: 100vh;
    width: 1076px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 3.4375rem;
      font-weight: 700;
    }

    p {
      width: 38%;
      margin: 2% 0;
      font-size: 1.125rem;
    }

    button {
      width: 20%;
      height: 7%;
      background: var(--red);
      color: var(--white);
      font-size: 1.25rem;
      font-weight: 600;

      transition: 0.2s;

      &:hover {
        background: var(--dark-red);
      }
    }
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 4% 4% 0 0;

  img {
    max-height: 100%;
    width: 40rem;
  }
`;
