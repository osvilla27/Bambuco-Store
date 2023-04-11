import { Container } from "globalStyles";
import styled from "styled-components";

export const FeaturesContainer = styled(Container)`
  border-radius: 15px;
  text-align: center;
  padding: 80px 20px 30px 20px;
  margin: 40px 0px;
  @media (max-width: 1140px) {
    margin: 40px 20px;
  }
  background: ${({ theme }) => `linear-gradient(
    45deg, 
    ${theme.GRADIENTS.dark[0]} 0%,
    ${theme.GRADIENTS.dark[1]} 100%
);`};
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 25px auto;
`;

export const FeatureCard = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 40px;
  padding: 0 10px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
