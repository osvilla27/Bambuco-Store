import { Button, H2, H4, P, Section } from "globalStyles";
import {
  FeatureCard,
  FeaturesContainer,
  FeaturesWrapper,
} from "./styles";

const features = [
  {
    title: "Fortalece tus articulaciones",
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/40/ba/8c/caption.jpg?w=700&h=-1&s=1",
    description:
      "Colagebari es una excelente opción para mejorar la salud y la flexibilidad de tus articulaciones gracias a su alto contenido de colágeno hidrolizado.",
  },
  {
    title: "Reduce la celulitis",
    src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/40/ba/8c/caption.jpg?w=700&h=-1&s=1",
    description:
      "Al estimular la producción de colágeno en el cuerpo, Colagebari puede ayudar a reducir la apariencia de la celulitis y a mejorar la elasticidad de la piel.",
  },
  {
    title: "Mejora la salud de tu cabello y uñas",
    src: "Los ingredientes naturales de Colagebari, como la vitamina C y el ácido hialurónico, pueden ayudar a fortalecer y mejorar la apariencia de tu cabello y uñas.",
    description:
      "Al estimular la producción de colágeno en el cuerpo, Colagebari puede ayudar a reducir la apariencia de la celulitis y a mejorar la elasticidad de la piel.",
  },
];

const Features = () => {
  const renderedFeature = features.map((feature) => (
    <FeatureCard>
      <H4 gradient>{feature.title}</H4>
      <P color="white">{feature.description}</P>
    </FeatureCard>
  ));
  return (
    <Section>
      <FeaturesContainer>
        <H2 color="white">Beneficios del Colagebari</H2>
        <FeaturesWrapper>{renderedFeature}</FeaturesWrapper>
        <Button>COMPRAR AHORA</Button>
      </FeaturesContainer>
    </Section>
  );
};

export default Features;
