import { Copyright, FooterLinks, FooterWrapper } from "./styles";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { Button, Container, H3 } from "globalStyles";

const Footer = () => {
  return (
    <div>
      <FooterWrapper>
        <Container>
          <div className="footer_inner">
            <FooterLinks>
              <div className="footer-top">
                <H3 gradient>BAMBUCO</H3>
                <div className="social-icons">
                  <FaFacebookSquare />
                  <FaInstagramSquare />
                </div>
              </div>
              <div className="link">
                <Link to="/about">About</Link>
                <Link to="/Contact">Contact</Link> <Link to="/blog">Blog</Link>
              </div>
              <div className="link">
                <Link to="/Support">Support</Link>
                <Link to="/Help">Help</Link> <Link to="/contact">Contact</Link>
              </div>
            </FooterLinks>
            <div>
              <Button>Contacto</Button>
            </div>
          </div>
          <Copyright>
            <Link>
              2023. <b> Osvilla<span> Store </span></b>
              todos los derechos reservados.
            </Link>
              <Link to="/Support">Términos y condiciones.</Link>
              <Link to="/Support"> Aviso de privacidad.</Link>

          </Copyright>
        </Container>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
