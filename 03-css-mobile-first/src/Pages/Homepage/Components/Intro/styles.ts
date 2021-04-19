import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  padding: 12em 2em;

  & > * {
    margin: 1.4rem 0;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.3rem;
  }

  button {
    background: #d43053;
    color: var(--white);
    margin-top: 4em;
    padding: 1em 4.5em;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    border: none;
    border-radius: 4%;

    svg {
      font-size: 2rem;
    }
  }
`;

export const Titulo = styled.div`
  display: flex;
`;
