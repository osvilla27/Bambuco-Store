import ProductsList from "components/ProductList";
import FullWidthLayout from "../../../hocs/FullWidthLayout";
import Experience from "components/Experience/Index";
import LandingList from "components/LandingList";


const Home = () => {
  return (
    <>
      <FullWidthLayout>
        <Experience />
        <LandingList />
        <ProductsList />
      </FullWidthLayout>
    </>
  );
};

export default Home;
