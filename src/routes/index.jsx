import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import ScrollToTop from "../services/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
