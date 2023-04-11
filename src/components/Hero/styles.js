import { Container } from "globalStyles";
import styled from "styled-components";

export const HeroWrapper = styled(Container)`
  display: flex;
  align-items: center;
  min-height: 600px;
  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  width: 60%;
  padding: 20px 20px 20px 0px;
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    padding: 40px 20px;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  padding: 20px 0px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Background = styled.img`
  object-fit: cover;
  height: 100%;
`;
