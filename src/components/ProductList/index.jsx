import { H1, H5, P, Section } from "globalStyles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store";
import { Card, Content, Image, ProductWrapper } from "./styles";


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
            <H5> <span>${product.compare_price}</span></H5>
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
      <ProductWrapper>{renderedProducts}</ProductWrapper>
    </Section>
  );
};

export default ProductsList;
