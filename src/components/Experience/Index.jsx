import { H3, H4, P, Section } from "globalStyles";
import {
  Content,
  ExperienceWrapper,
  IconWrapper,
  TitleWrapper,
} from "./styles";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";


const Experience = () => {
  return (
    <>
      <Section>
        <TitleWrapper>
          <div>
            <H3>Brindamos las</H3>
            <H3>mejores experiencia al cliente</H3>
          </div>
          <Content>
            <P>
              Nos aseguramos que nuestros clietes tengan la mejor experiencia de
              compra
            </P>
          </Content>
        </TitleWrapper>
      </Section>
      <Section>
        <ExperienceWrapper>
          <div>
            <IconWrapper>
              <FaShippingFast size="25"/>
            </IconWrapper >
            <H4>Envío Gratis</H4>
            <P>Ofrecemos envío rápido y gratuito para 95% del país</P>
          </div>
          <div>
            <IconWrapper>
              <FaMoneyBillWave size="25"/>
            </IconWrapper >
            <H4>Pago Contra Entrega</H4>
            <P>Pagas unicamente al recibir tu pedido en la puerta de tu casa</P>
          </div>
          <div>
            <IconWrapper>
              <FaShippingFast size="25"/>
            </IconWrapper >
            <H4>Envío Gratis</H4>
            <P>Ofrecemos envío rápido y gratuito para 95% del país</P>
          </div>
          <div>
            <IconWrapper>
              <FaShippingFast size="25"/>
            </IconWrapper >
            <H4>Envío Gratis</H4>
            <P>Ofrecemos envío rápido y gratuito para 95% del país</P>
          </div>
        </ExperienceWrapper>
      </Section>
    </>
  );
};

export default Experience;
