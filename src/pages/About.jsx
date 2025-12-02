import React from "react";
import Header from "../components/Header";
// import "./about.scss";

const About = () => {
  return (
    <div className="about">
    <Header 
      title="關於恆春感性" 
      subtitle="生活的語言"
      bgImage="./img/about/about-header2.png"
    />

      <div className="about-content">
        <h2>介紹內容</h2>
        <p>這裡放你的關於我們文字內容...</p>
      </div>
    </div>
  );
};

export default About;
