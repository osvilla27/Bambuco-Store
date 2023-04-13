import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsLanding } from "../../store";
import { Container, H3, H4, H5, P, Section } from "globalStyles";
import { ButtonBlur, Card, Compare, Content, Image, LandingWrapper } from "./styles";
import { FaArrowRight } from "react-icons/fa";

const LandingList = () => {
  const dispatch = useDispatch();
  const { isLoding, productsLandingList, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductsLanding());
  }, [dispatch]);

  const renderedProducts = productsLandingList.map((product) => {
    return (
      <Card key={product.id}>
        <ButtonBlur>
          <H5 color="white">Ver más detalles </H5> &emsp;<FaArrowRight color="white" /> 
        </ButtonBlur>
        <Image src={product.image} alt={product.name} />
        <Content>
          <Content>
            <P>{product.name}</P>
          </Content>
          <Content>
            <Compare>${product.compare_price}</Compare>
            <H5 color="primary">${product.price}</H5>
          </Content>
        </Content>
        
      </Card>
    );
  });

  if (isLoding) return <div> Cargando... </div>;

  if (error) return <div> Error... </div>;

  return (
    <Section>
      <Container>
        <H3>Landing</H3>
        <LandingWrapper>{renderedProducts}</LandingWrapper>
      </Container>
    </Section>
  );
};

export default LandingList;
