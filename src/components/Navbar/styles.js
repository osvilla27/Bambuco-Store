import { Section } from "globalStyles";
import styled from "styled-components";

export const NavbarWrapper = styled(Section)`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`;

export const Navigation = styled.header`
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.COLORS.withe};
  z-index: 999;
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
