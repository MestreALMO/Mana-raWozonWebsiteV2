import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px;
`;

export const Left = styled.div``;

export const Right = styled.div`
  margin: 0 30px;

  a {
    color: var(--black);
    text-decoration: none;
    padding-right: 20px;

    &:last-child {
      padding-right: 0;
    }
  }
`;
