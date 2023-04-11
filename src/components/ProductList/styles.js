import { Container, H5 } from "globalStyles";
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
  height: 400px;
  margin: 20px 0px;
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
  text-decoration:line-through;
  margin-right: 10px; 
`;


export const Image = styled.img`
  height: 350px;
  width : 100%;
  object-fit: cover;
`;
