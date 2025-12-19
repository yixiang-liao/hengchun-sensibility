import React from 'react'
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";
import PageBottom from "../layouts/land/PageBottom";


const Flavor = () => {
  return (
    <div className="flavor pages">
      <Header2
        title="風味半島"
        subtitle="風土產生的滋味"
        icon_img="./icon/ecology_icon.png"
        bgImage="./img/move/IMG_4785.JPG"
        description1="一種順應季節與人情的飲食節奏。"
        description2="恆春的味道，是海風的鹹、陽光的甜，更是土地與勞動者的敬意。這裡不只有觀光海產，更有充滿在地人情味的早餐、午間的「大麵文化」，以及隱藏在巷弄裡的外來新滋味。用胃口探索恆春，你將品嚐到最真實的生活。"
      />
      <Outline
        title="風味半島"
        icon="./icon/ecology_icon.png"
        items={[
          { id: "breakfast", label: "恆春早餐宇宙" },
          { id: "lunch", label: "午餐時光" },
          { id: "noodle", label: "大麵地圖" },
          { id: "dinner", label: "晚餐與宵夜" },
          { id: "cafe", label: "甜點與咖啡" },
        ]}
      />
      <PageBottom img="./IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  )
}

export default Flavor
