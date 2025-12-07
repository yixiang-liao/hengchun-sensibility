import React, { useState } from "react";
import BackToTopButton from "../components/BackToTopButton";
import InnerPages from "../layouts/HomePage/InnerPages";

const HomePage = () => {
  const [showLetter, setShowLetter] = useState(false);
  return (
    <div className="homepage">
      <div className="home" id="home">
        <div></div>
        <div className="profile">
          <div className="title-group">
            {/* <h1>恆春感性</h1>
            <h2>Hengchun Sensibility</h2> */}
            <img
              src="./logo/logo-3.png"
              alt="Hengchun Sensibility Logo"
              className="logo"
            />
            {/* <div className="line"></div> */}
            {/* <img
            className="msg_in_bottle"
              src="./img/homepage/msg_in_Bottle.png"
            /> */}
            <img
              className="msg_in_bottle glow"
              src="./img/homepage/msg_in_Bottle.png"
              onClick={() => setShowLetter(true)}
              style={{ cursor: "pointer" }}
            />
            <p>在南國風與光裡，找到生活的節奏</p>
          </div>
        </div>
        <div
          className="illustrations"
          onClick={() => {
            document.getElementById("inner-pages")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {/* <img
            src="./img/homepage/web_arrow r.png"
            alt="Illustration"
            className="sun-illustration"
          /> */}
          <img
            src="./img/homepage/web_arrow_w.png"
            alt="Illustration"
            className="sun-illustration"
          />
        </div>
      </div>

      {/* 📌 Popup 區塊 */}
      {showLetter && (
        <div className="popup-overlay" onClick={() => setShowLetter(false)}>
          <img
            className="popup-img"
            src="./img/homepage/web_letter2.png"
            alt="Letter"
          />
        </div>
      )}

      <InnerPages />

      <BackToTopButton />
    </div>
  );
};

export default HomePage;
