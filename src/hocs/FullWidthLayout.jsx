import Footer from "components/Footer";
import Header from "components/Header";
import { connect } from "react-redux";

const FullWidthLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

const mapStateTopProps = (state) => ({});

export default connect(mapStateTopProps, {})(FullWidthLayout);
