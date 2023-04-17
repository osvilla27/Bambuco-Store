import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "containers/pages/Home";
import Error404 from "containers/erros/Error404";
import GlobalStyle from "globalStyles";
import LandingPage from "containers/pages/LandingPage";
import { ENV } from "utils/env";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
        <Route path="landing" element={<LandingPage />} />
        <Route path={ENV.API_WHATSAPP.WHATSAPP} element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
