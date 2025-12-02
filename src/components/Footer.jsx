import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer" id="footer">
      <div className="footer-header">
        <div className="logo">
          <img
            src="./logo/logo-2.png"
            alt="Hengchun Sensibility Logo"
            className="logo"
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <Link to="/">首頁</Link>
            </li>
            {/* <li>
              <Link to="/about">關於我們</Link>
            </li> */}
            <li>
              <Link to="/ecology">生態半島</Link>
            </li>
            <li>
              <Link to="/culture">文化半島</Link>
            </li>
            <li>
              <Link to="/flavor">風味半島</Link>
            </li>
            <li>
              <Link to="/sport">運動半島</Link>
            </li>
            <li>
              <Link to="/quadrant">生活象限</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <p>© {year} 恆春感性 Hengchun Sensibility. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
