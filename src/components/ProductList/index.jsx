import { H4, H5, P, Section } from "globalStyles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowRight } from "react-icons/fa";
import { fetchProducts } from "../../store";
import { Card, Compare, Content, Image, ProductWrapper } from "./styles";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { isLoding, productList, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const renderedProducts = productList.map((product) => {
    return (
      <Card key={product.id}>
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
        <Content>
          <H4 color="primary">Ver más detalles</H4>
          <FaArrowRight />
        </Content>
      </Card>
    );
  });

  if (isLoding) return <div> Cargando... </div>;

  if (error) return <div> Error... </div>;

  return (
    <Section>
      <ProductWrapper>{renderedProducts}</ProductWrapper>
    </Section>
  );
};

export default ProductsList;
