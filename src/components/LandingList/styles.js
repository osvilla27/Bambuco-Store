import { Blur, Container, H5 } from "globalStyles";
import styled from "styled-components";

export const LandingWrapper = styled(Container)`
  margin-bottom: 30px;
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
  margin: 0px;
  h4 {
    padding: 5px 0px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0px;
`;

export const Compare = styled(H5)`
  text-decoration: line-through;
  margin-right: 10px;
`;

export const Image = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 10px;
  object-fit: cover;

  @media (max-width: 420px) {
    height: 400px;
  }
`;

export const ButtonBlur = styled(Blur)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: calc(80%);
  position: relative;
  top: 75%;
  left: calc(10%);
`;
