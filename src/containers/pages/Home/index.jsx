import ProductsList from "components/ProductList";
import FullWidthLayout from "../../../hocs/FullWidthLayout";
import Experience from "components/Experience/Index";
import LandingList from "components/LandingList";
import Slider from "components/Slider";
import Hero from "components/Hero";


const Home = () => {
  document.title = "Banbuco Store";
  return (
    <>
      <FullWidthLayout>
        <Slider/>
  
        <Experience />
        <LandingList />
        <ProductsList />
      </FullWidthLayout>
    </>
  );
};

export default Home;
