import { Button, H1, H2, P, Section } from "globalStyles";
import {
  Background,
  Content,
  ContentWrapper,
  HeroWrapper,
  ImageWrapper,
} from "./styles";

import col from "../../assets/img/colagebari_sin_fondo_1.png";

const Hero = () => {
  return (
    <Section>
      <HeroWrapper>
        <ContentWrapper>
          <H1 gradient>Colagebari</H1>
          <br></br>
          <H2 color="dark">Colágeno Hidrolizado</H2>
          <Content>
            <P color="dark">
              No esperes más para comenzar a cuidar tu piel, cabello, uñas y
              articulaciones desde adentro . ¡Mejora tu apariencia y bienestar
              con Colágeno Colagebari!
            </P>
          </Content>
          <Content>
            <Button>COMPRAR AHORA</Button>
          </Content>
        </ContentWrapper>
        <ImageWrapper>
          <Background src={col} />
        </ImageWrapper>
      </HeroWrapper>
    </Section>
  );
};

export default Hero;
