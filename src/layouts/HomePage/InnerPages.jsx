import React from "react";
import Title from "../../components/Title";

const InnerPages = () => {
  return (
    <div className="inner-pages" id="inner-pages">
      <Title text="永續半島五大面向" />
      <p className="inner_p">
        恆春半島的永續，並非一句空泛的口號，而是由五個堅實的面向共同編織、持續支撐而成的穩定基石。對於每一個選擇與恆春共生的人無論是老居民還是新移居者這五大面向都是理解在地資源、構築安心生活的起點。它們不僅僅是五個名詞，更是生活在這裡的五種核心方式、五種與土地共舞的智慧。
      </p>

      <p className="inner_p">
        在恆春，永續不是遙遠的理想，而是一種會呼吸的生活方式。風、山、海與人彼此環扣，從潮間帶的浪聲到老城的歌聲，每一個行動都在延續地方的生命節奏。有人潛進海裡撿回敬意，有人種菜、煮飯、唱歌，用日常實踐出「能長久存在」的溫柔力量。
        讓我們從自然、生態、文化、食物、運動與生活出發，看見恆春如何在感性與永續之間，找到屬於自己的呼吸節奏。
      </p>
      <div className="grid-container">
        <a href="/your-link" className="card">
          <img src="./img/homepage/000_5470.jpg" alt="" />
          <div className="overlay"></div>
          <div className="text">
            <h3>生態半島</h3>
            <p>自然共生的法則</p>
          </div>
        </a>
        <a href="/your-link" className="card">
          <img src="./img/homepage/IMG_4278.JPG" alt="" />
          <div className="overlay"></div>
          <div className="text">
            <h3>文化半島</h3>
            <p>生活累積的厚度</p>
          </div>
        </a>
        <a href="/your-link" className="card">
          <img src="./img/homepage/IMG_4554.JPG" alt="" />
          <div className="overlay"></div>
          <div className="text">
            <h3>風味半島</h3>
            <p>風土產生的滋味</p>
          </div>
        </a>
        <a href="/your-link" className="card">
          <img src="./img/homepage/IMG_4599.JPG" alt="" />
          <div className="overlay"></div>
          <div className="text">
            <h3>運動半島</h3>
            <p>與自然共振的自由</p>
          </div>
        </a>
        <a href="/your-link" className="card">
          <img src="./img/homepage/IMG_4922.JPG" alt="" />
          <div className="overlay"></div>
          <div className="text">
            <h3>宜居半島</h3>
            <p>安心生活的支持體系</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default InnerPages;
