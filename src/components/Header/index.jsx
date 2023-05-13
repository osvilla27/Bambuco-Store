import { useState } from "react";
import {
  Content,
  HeaderWrapper,
  NavMenu,
  NavLinks,
  ContentWrapper,
  MobileIcon,
  SideNavWrapper,
  Input,
} from "./styles";
import { Link } from "react-router-dom";

import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { H3 } from "globalStyles";
import { FaAlignRight } from "react-icons/fa";

const data = [
  {
    to: "/",
    text: "Tienda",
    id: "store",
  },
  {
    to: "/aboutus",
    text: "Sobre Nosotros",
  },
  {
    to: "/contact",
    text: "Contacto",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const SideNav = ({ show }) => (
    <SideNavWrapper show={show}>
      <Content>
        {data.map((el, index) => (
          <Link key={index}>
            <li>{el.text}</li>
          </Link>
        ))}
      </Content>
    </SideNavWrapper>
  );

  return (
    <HeaderWrapper>
      <ContentWrapper>
        <H3 color="dark">Bambuco Store</H3>
        <NavLinks>
          {data.map((el, index) => (
            <Link key={index}>{el.text}</Link>
          ))}
        </NavLinks>
        <NavMenu>
          <Input icon="Buscar" placeholder="Buscar" className="none" />
          <Link to="#">
            <CiShoppingCart size="20px" className="none" />
          </Link>
          <Link to="#">
            <CiUser size="20px" className="none" />
          </Link>

          <MobileIcon onClick={() => setOpen(true)}>
            {open ? <AiOutlineClose /> : <FaAlignRight />}
          </MobileIcon>
        </NavMenu>
        {open && (
          <div className="top">
            <div className="close" onClick={() => setOpen(false)}>
              <AiOutlineClose />
            </div>
          </div>
        )}
        <SideNav show={open} />
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;
