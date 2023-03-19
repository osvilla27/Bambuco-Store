import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "containers/pages/Home";
import Error404 from "containers/erros/Error404";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;