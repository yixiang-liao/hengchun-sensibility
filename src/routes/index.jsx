// routes/index.jsx
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../services/ScrollToTop";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Ecology from "../pages/Ecology";
import Culture from "../pages/Culture";
import Flavor from "../pages/Flavor";
import Sport from "../pages/Sport";
import Quadrant from "../pages/Quadrant";
import Move from "../pages/Move";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/ecology" element={<Ecology />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/flavor" element={<Flavor />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/quadrant" element={<Quadrant />} />
        <Route path="/move" element={<Move />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
