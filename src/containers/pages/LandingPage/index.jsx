import Hero from "components/Hero";
import FullWidthLayout from "../../../hocs/FullWidthLayout";
import Features from "components/Features";

const LandingPage = () => {
  return (
    <FullWidthLayout>
      <Hero />
      <Features />
    </FullWidthLayout>
  );
};

export default LandingPage;
