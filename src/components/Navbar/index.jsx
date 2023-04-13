import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Button, Container, H3 } from "globalStyles";
import {
  Content,
  Li,
  Logo,
  Nav,
  NavbarWrapper,
  Navigation,
  Ul,
} from "./styles";
import { Link } from "react-router-dom";
import Input from "components/Input";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <NavbarWrapper>
      <Container>
        <Navigation>
          <Nav>
            <Logo>
              <H3 color="dark">Bambuco Store</H3>
            </Logo>
            <Ul className={open ? `active` : `navlinks`}>
              <Li>
                <Link to={`#`}>Tienda</Link>
              </Li>
              <Li>
                <Link to={`#`}>Sobre Nosotros</Link>
              </Li>
              <Li>
                <Link to={`#`}>Contacto</Link>
              </Li>
            </Ul>
            <Content>
              <Input icon="Buscar" placeholder="Buscar" />
              <CiShoppingCart size="20px" />
              <CiUser size="20px" />
            </Content>

            {open ? (
              <AiOutlineClose className="hamburger" onClick={handleClick} />
            ) : (
              <FaAlignRight className="hamburger" onClick={handleClick} />
            )}
          </Nav>
        </Navigation>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
