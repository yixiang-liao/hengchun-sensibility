import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      // 如果不在首頁，先導回首頁，再等一下 scroll
      navigate("/");
      setTimeout(() => {
        scrollToId(id);
      }, 100); // 等待頁面 render 完
    } else {
      scrollToId(id);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="./logo/logo.png" alt="logo" />
          {/* <span className="logo-text">恆春感性 Hengchun Sensibility</span> */}
        </Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <button onClick={() => handleNavClick("home")}>首頁</button>
        </li>
        {/* <li>
          <button onClick={() => handleNavClick("about")}>關於我們</button>
        </li> */}
        {/* <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            關於我們
          </Link>
        </li> */}
        <li>
          <Link to="/ecology" onClick={() => setIsOpen(false)}>
            生態半島
          </Link>
        </li>
        <li>
          <Link to="/culture" onClick={() => setIsOpen(false)}>
            文化半島
          </Link>
        </li>
        <li>
          <Link to="/flavor" onClick={() => setIsOpen(false)}>
            風味半島
          </Link>
        </li>
        <li>
          <Link to="/sport" onClick={() => setIsOpen(false)}>
            運動半島
          </Link>
        </li>
        <li>
          <Link to="/move" onClick={() => setIsOpen(false)}>
            移居半島
          </Link>
        </li>
        <li>
          <Link to="/quadrant" onClick={() => setIsOpen(false)}>
            生活象限
          </Link>
        </li>
        {/* <li>
          <button onClick={() => handleNavClick("projects")}>Projects</button>
        </li> */}
        {/* <li>
          <Link to="/acknowledgements" onClick={() => setIsOpen(false)}>
            Acknowledgements
          </Link>
        </li>
        <li>
          <Link to="/font" onClick={() => setIsOpen(false)}>
            font
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
