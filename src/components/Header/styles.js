import { Container, Section } from "globalStyles";
import styled from "styled-components";

export const HeaderWrapper = styled(Section)`
  position:fixed;
  width:100%;
  top: 0;
  left:0;
  z-index:1000;
  background-color: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.09);
`;

export const ContentWrapper = styled(Container)`
  min-height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .close {
    color: black;
    padding: 5px;
    padding-bottom: 2px;
    border-radius: 50%;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 5;
    transition: all 300ms ease-in;
    cursor: pointer;
    :hover {
      background-color: rgba(90, 90, 90, 0.1);
    }
  }
  .top {
    position: fixed;
    top: 0;
    right: 10px;
    z-index: 10;
    height: 75px;
    width: 270px;
    background-color: white;
    -webkit-animation: cssAnimation 400ms forwards;
    animation: cssAnimation 400ms forwards;
  }
  @keyframes cssAnimation {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1150px) {
    .close {
      background-color: lightgrey;
    }
  }
`;

export const NavLinks = styled.div`
  display: flex;
  flex-wrap: nowrap;

  a {
    padding: 7px 16px;
    font-size: 0.92rem;
    letter-spacing: 0.6px;
    text-decoration: none;
    font-weight: 500;
    border-radius: 10px;
    transition: background-color 200ms ease-in;
    cursor: pointer;
    :hover {
      background-color: rgba(90, 90, 90, 0.1);
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  a {
    padding: 7px;
    margin: 0px 2px;
    text-decoration: none;
    border-radius: 10px;
    transition: background-color 200ms ease-in;
    cursor: pointer;
    :hover {
      background-color: rgba(90, 90, 90, 0.1);
    }
  }

  @media screen and (max-width: 900px) {
    .none {
      display: none;
    }

    right: 20px;
  }
  @media screen and (max-width: 400px) {
    right: 15px;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;

    cursor: pointer;
  }
`;

export const SideNavWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.COLORS.white};
  box-shadow: 0 0.125rem 1.75rem 0 rgba(0, 0, 0, 0.09);
  width: 300px;

  a {
    text-decoration: none;
  }

  list-style: none;
  padding: 20px;
  overflow-y: scroll;

  /* display: ${(props) => (props.show ? "block" : "none")}; */
  transition: transform 400ms ease-in;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  /* translateX(100%) means the wrapper is off the screen/vw*/
`;

export const Content = styled.div`
  margin-top: 55px;
  margin-bottom: 30px;
  li {
    padding: 8px 15px;
    margin: 10px;
    font-size: 0.95rem;
    letter-spacing: 0.4px;
    border-radius: 8px;
    transition: all 300ms ease-in;
    cursor: pointer;
    :hover {
      background-color: rgba(90, 90, 90, 0.1);
      font-weight: 600;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 5px;
  margin: 7px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;
