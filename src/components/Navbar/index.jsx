import { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Button, Container } from "globalStyles";
import { Li, Nav, NavbarWrapper, Navigation, Ul } from "./styles";
import { Link } from "react-router-dom";

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
            <h1>Bambuco</h1>
            <Ul className={open ? `active` : `navlinks`}>
              <Li>
                <Link to={`#`}>Inicio</Link>
              </Li>
              <Li>
                <Link to={`#`}>Sobre Nosotros</Link>
              </Li>
              <Li>
                <Link to={`#`}>Contacto</Link>
              </Li>
            </Ul>
            <Button>Iniciara Sesión</Button>
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
