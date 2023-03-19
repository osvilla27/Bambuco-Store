import { Container } from "globalStyles";
import styled from "styled-components";

export const ProductWrapper = styled(Container)`
  margin: 30px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  height: 350px;
  h4 {
    padding: 5px 0px;
  }
  overflow: hidden;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 5px 0px;
`;

export const Image = styled.img`
  height: 280px;
  width : 100%;
  object-fit: cover;
`;
