import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Comic Sans MS", Times, sans-serif;
    font-family: Consolas, sans-serif;
    font-family: "Poppins", sans-serif;
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
    padding: 0px 10px;
  }
`;



// Typography styles

export const H1 = styled.h1`
  font-weight: bold;
  font-size: ${(props) => props.theme.SIZES.h1}px;
  @media (max-width: 720px) {
    font-size: ${(props) => props.theme.SIZES.h2}px;
  }
  @media (max-width: 420px) {
    font-size: ${(props) => props.theme.SIZES.h3}px;
  }
  ${(props) => {
    switch (props.color) {
      case "primary":
        return `color: ${props.theme.COLORS.primary};`;
      case "secondary":
        return `color: ${props.theme.COLORS.secondary};`;
      case "info":
        return `color: ${props.theme.COLORS.info};`;
      case "success":
        return `color: ${props.theme.COLORS.success};`;
      case "warning":
        return `color: ${props.theme.COLORS.warning};`;
      case "danger":
        return `color: ${props.theme.COLORS.danger};`;
      case "light":
        return `color: ${props.theme.COLORS.light};`;
      case "white":
        return `color: ${props.theme.COLORS.white};`;
      default:
        return `color: ${props.theme.COLORS.dark};`;
    }
  }};
  ${(props) =>
    props.gradient &&
    `
    background-image:linear-gradient(
        45deg, 
        ${props.theme.GRADIENTS.primary[0]} 0%,
        ${props.theme.GRADIENTS.primary[1]} 100%
    );
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
  `}
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
  ${(props) => {
    switch (props.color) {
      case "prymary":
        return `color: ${props.theme.COLORS.primary};`;
      case "secondary":
        return `color: ${props.theme.COLORS.secondary};`;
      case "info":
        return `color: ${props.theme.COLORS.info};`;
      case "success":
        return `color: ${props.theme.COLORS.success};`;
      case "warning":
        return `color: ${props.theme.COLORS.warning};`;
      case "danger":
        return `color: ${props.theme.COLORS.danger};`;
      case "light":
        return `color: ${props.theme.COLORS.light};`;
      case "dark":
        return `color: ${props.theme.COLORS.dark};`;
      case "white":
        return `color: ${props.theme.COLORS.white};`;
      default:
        return `color: ${props.theme.COLORS.gray};`;
    }
  }}
  line-height: 1.6;
`;

export const Span = styled.p`
  font-size: ${(props) => props.theme.SIZES.p}px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  font-weight: bold;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
  color: ${(props) => props.theme.COLORS.white};
  margin: ${(props) => props.margin || "0px 5px 0px 0px"};
  ${(props) => {
    switch (props.color) {
      case "secondary":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.secondary[0]} 0%,
            ${props.theme.GRADIENTS.secondary[1]} 100%
        );`;
      case "info":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.info[0]} 0%,
            ${props.theme.GRADIENTS.info[1]} 100%
        );`;
      case "success":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.success[0]} 0%,
            ${props.theme.GRADIENTS.success[1]} 100%
        );`;
      case "warning":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.warning[0]} 0%,
            ${props.theme.GRADIENTS.warning[1]} 100%
        )`;
      case "danger":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.danger[0]} 0%,
            ${props.theme.GRADIENTS.danger[1]} 100%
        );`;
      case "light":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.light[0]} 0%,
            ${props.theme.GRADIENTS.light[1]} 100%
        );
        color: ${props.theme.COLORS.dark};`;
      case "dark":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.dark[0]} 0%,
            ${props.theme.GRADIENTS.dark[1]} 100%
        );`;
      case "white":
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.white[0]} 0%,
            ${props.theme.GRADIENTS.white[1]} 100%
        );
        color: ${props.theme.COLORS.dark};`;
      default:
        return `background: linear-gradient(
            45deg, 
            ${props.theme.GRADIENTS.primary[0]} 0%,
            ${props.theme.GRADIENTS.primary[1]} 100%
        );`;
    }
  }}
`;

export const Blur = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 5px;
  box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.09);
  backdrop-filter: blur(10px);
  border: 1px solid #ffffff40;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: saturate(80%) blur(15px);
  background-color: rbga(243, 243, 243, 0.2);
`;

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  size: props.size || "1em",
}))`
  margin: 5px;
  padding: 5px;
  cursor: pointer;
  border-radius: 8px;
  border: ${(props) => (props.isActive ? "1.5px" : "1px")};
  border-color: ${(props) =>
    props.isActive ? props.theme.COLORS.black : props.theme.COLORS.gray};
  font-size: ${(props) => props.theme.SIZES.h5}px;
  color: ${(props) => props.theme.COLORS.black};
  padding: 8px;
  ${(props) => props.icon && "padding-left: 35px"};

  :focus {
    border-color: red;
    box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.09);
  }
`;



export default GlobalStyle;
