import React from 'react'
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";

import PageBottom from "../layouts/land/PageBottom";


const Move = () => {
  return (
    <div className="move pages">
      <Header2
        title="宜居半島"
        subtitle="聽見日常恆春不同的聲音"
        icon_img="./img/ecology/ecology_icon.png"
        bgImage="./img/move/IMG_4926.JPG"
        description1="在享受海風的同時，生活也能獲得安心的守護。"
        description2="移居恆春，不只是追求浪漫的海風，更需要被支撐的生活。本章聚焦居住、教育、醫療與交通的真實樣貌，並透過在地居民、移居者與旅行者的訪談，看見一座小鎮如何讓人「願意留下」與「能夠留下」。從完善的醫療體系到共學的教室、再到夜裡仍亮著燈的街巷，恆春，用自己的節奏，定義了什麼叫「宜居」。"
      />
      <Outline
        title="宜居半島"
        icon="./img/ecology/ecology_icon.png"
        items={[
          { id: "local", label: "在地人訪談" },
          { id: "migrant", label: "移居者訪談" },
          { id: "traveler", label: "旅行者訪談" },
        ]}
      />

      <PageBottom img="./img/ecology/IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  )
}

export default Move
