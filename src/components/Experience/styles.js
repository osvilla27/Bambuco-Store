import { Container } from "globalStyles";
import styled from "styled-components";

export const TitleWrapper = styled(Container)`
  display: grid;
  margin: 25px 0px;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ExperienceWrapper = styled(Container)`
  margin: 25px 0px 50px 0px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }
`;

export const Content = styled.div`
  border-left: 3px solid ${({ theme }) => theme.COLORS.dark};
  display: flex;
  align-items: center;
  padding: 15px;
  @media (max-width: 720px) {
    padding: 5px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  margin: 10px 0px;
  background-color: ${({ theme }) => theme.COLORS.dark};
  color: ${({ theme }) => theme.COLORS.white};
  border-radius: 10px;
`;
