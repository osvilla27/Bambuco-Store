import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
 }
 a{
	color: ${({ theme }) => theme.COLORS.dark};
 }
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background: linear-gradient(45deg, #ff0080 0%, #7928ca 100%);
  border: none;
  outline: none;
  color: ${({ theme }) => theme.COLORS.white};
  font-weight: bold;
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1140px;
  width: 100%;
  @media (max-width: 1140px) {
    padding: 0px 20px;
  }
  @media (max-width: 480px) {
    padding: 0px 5px;
  }
`;

// Typography styles
export const H1 = styled.h1`
  font-weight: bold;
  color: ${(props) => {
    switch (props.color) {
      case "primary":
        return props.theme.COLORS.primary;
      case "secondary":
        return props.theme.COLORS.secondary;
      default:
        return props.theme.COLORS.black;
    }
  }};
  font-size: ${(props) => props.theme.SIZES.h1}px;
  @media (max-width: 720px) {
    font-size: ${(props) => props.theme.SIZES.h2}px;
  }
  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.SIZES.h3}px;
  }
`;

export const H2 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h2}px;
  @media (max-width: 720px) {
    font-size: ${(props) => props.theme.SIZES.h3}px;
  }
  @media (max-width: 320px) {
    font-size: ${(props) => props.theme.SIZES.h4}px;
  }
`;

export const H3 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h3}px;
  @media (max-width: 720px) {
    font-size: ${(props) => props.theme.SIZES.h4}px;
  }
`;

export const H4 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h4}px;
`;

export const H5 = styled(H1)`
  font-size: ${(props) => props.theme.SIZES.h5}px;
`;

export const P = styled.p`
  font-size: ${(props) => props.theme.SIZES.p}px;
`;

export const Span = styled.p`
  font-size: ${(props) => props.theme.SIZES.p}px;
`;
export default GlobalStyle;
