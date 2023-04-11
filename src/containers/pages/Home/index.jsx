import ProductsList from "components/ProductList";
import FullWidthLayout from "../../../hocs/FullWidthLayout";

const Home = () => {
  return (
    <>
      <FullWidthLayout>
        <ProductsList />
      </FullWidthLayout>
    </>
  );
};

export default Home;
