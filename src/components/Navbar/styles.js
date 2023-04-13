import { Section } from "globalStyles";
import styled from "styled-components";

export const NavbarWrapper = styled(Section)`
  //position: fixed;
  width: 100%;
  //top: 0;
  //left: 0;
  z-index: 1000;
  background-color: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.09);
`;

export const Navigation = styled.header`
  width: 100%;
  overflow: hidden;
  padding: 5px 0px;
  background-color: ${({ theme }) => theme.COLORS.withe};
  //z-index: 999;
  position: relative;
  @media (max-width: 600px) {
    overflow: visible;
  }
`;

export const Nav = styled.nav`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hamburger {
    max-width: 3rem;
    display: none;
  }
  @media (max-width: 600px) {
    button {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
  Ul.active {
    display: block;
  }
`;

export const Ul = styled.ul`
  display: flex;
  width: 30%;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: absolute;
    top: 100px;
    background-color: ${({ theme }) => theme.COLORS.dark};
    display: none;
    padding: 10px;
    text-align: center;
  }
`;

export const Li = styled.li`
  padding: 0px 10px;
  color: red;
`;

export const Logo = styled.div`
  display: flex;
`;


export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;

`;
