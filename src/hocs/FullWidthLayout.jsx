import Footer from "components/Footer";
import Navbar from "components/Navbar";
import { connect } from "react-redux";

const FullWidthLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

const mapStateTopProps = (state) => ({});

export default connect(mapStateTopProps, {})(FullWidthLayout);
