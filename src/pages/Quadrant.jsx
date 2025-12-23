import React, { useState } from "react";
import Header2 from "../layouts/land/Header2";
import Title from "../components/Title";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";
import PageBottom from "../layouts/land/PageBottom";
import PartLeft from "../layouts/land/ecology/PartLeft";
import PartRight from "../layouts/land/ecology/PartRight";


const quadrantData = [
  {
    id: "wild_hengchun",
    img: "./img/quadrant/quadrant_lxuy.png",
    title: "野性恆春",
    description:
      "走進恆春古城，城門、老街與市場把時間慢慢收攏。民謠在巷弄裡輕輕響起，人情像海風一樣不急不徐。這裡的生活很 chill，適合用散步把日常讀完。",
  },
  {
    id: "ancient_town_tour",
    img: "./img/quadrant/quadrant_rxuy.png",
    title: "古城漫遊",
    description:
      "離開城裡，半島的陸地立刻變得野性而遼闊。草原、惡地、林帶與溪谷交織出多樣棲地，候鳥季節從天空掠過。夜裡抬頭，星河鋪滿，像把大自然的祕密都點亮。",
  },
  {
    id: "ecology_ocean",
    img: "./img/quadrant/quadrant_lxdy.png",
    title: "湛藍呼喚",
    description:
      "向海靠近，湛藍像一聲召喚。珊瑚礁孕育超過四百種珊瑚與豐富魚群，海龜悠游其間，潮汐推送著生命的節奏。黑潮帶來溫暖與遠方的力量，讓海一直在生長。",
  },
  {
    id: "tropical_celebration",
    img: "./img/quadrant/quadrant_rxdy.png",
    title: "熱帶慶典",
    description:
      "熱帶半島的氣候像一場長長的慶典，吸引人來生活、來呼吸。乾淨的空氣、清澈的水質與舒適的環境，讓日子更輕盈。這裡不只適合旅行，更適合把身心安放成宜居的家。",
  },
];

const Quadrant = () => {
  const [activeQuadrant, setActiveQuadrant] = useState(null);
  return (
    <div className="quadrant pages">
      <Header2
        title="恆春人的生活象限"
        icon_img="./icon/flavor_icon.png"
        bgImage="./img/move/IMG_4785.JPG"
        description1="「恆春象限」是將恆春豐富的生活樣態系統化的概念模型。它不只是理論，而是恆春人長年以來「靠感覺生活」的體現。這個座標軸以「恆春感性」為核心，將我們在前面章節探索的五大永續面向（生態、文化、風味、運動、宜居），定錨在由人文、生態天空和海洋構成的四個生活方位上。本章將逐一解構這四個象限，展示恆春的生活是如何在風、光、人、情的交會中，找到獨特的平衡。"
      />
      <Outline
        title="恆春人的生活象限"
        icon="./icon/flavor_icon.png"
        items={[
          { id: "quadrant", label: "恆春象限" },
          { id: "x_culture_and_ecology", label: "X 軸｜文化 × 生態" },
          { id: "y_sky_and_ocean", label: "Y 軸｜天空 × 海洋" },
          { id: "quadrant_integration", label: "象限融合" },
        ]}
      />
      <div className="quadrant_map" id="quadrant">
        <Title text="恆春象限" />

        <div className="map_container">
          {quadrantData.map((q) => (
            <div
              key={q.id}
              className="map_item"
              onClick={() => setActiveQuadrant(q)}
            >
              <img src={q.img} alt={q.title} />
            </div>
          ))}
        </div>
      </div>
      <div className="quadrant_content">
        <div className="block" id="x_culture_and_ecology">
          <Title text="X 軸：文化 vs. 生態的平衡線" />
          <p className="subtitle">
            從古城文化到自然共生，一條描繪人與土地關係的軸線。
          </p>
          <p className="inner_p">
            軸線核心：X
            軸描繪了恆春人與土地的關係，一端是「人文、文化」的積累與創造，另一端是「生態、自然」的謙遜與共生。
          </p>
          <p className="inner_p">
            正向：強調古城文化、民謠傳承、風味美食、地方創生的熱情。
          </p>
          <p className="inner_p">
            負向：強調對潮間帶、山林、動植物的尊重與保護。這條軸線的拉鋸，定義了恆春的文化半島、風味半島與生態半島。
          </p>
          <p className="inner_p">
            恆春的感性，就在這條軸線上找到一個柔軟的平衡點：既能享受文化的溫度，也懂得順應自然的法則。
          </p>
        </div>
        <div className="block" id="y_sky_and_ocean">
          <Title text="Y 軸：天空 vs. 海洋的脈動線" />
          <p className="subtitle">
            追隨風、光、水流的直覺，一條感受自然力量的動態軸線。
          </p>
          <p className="inner_p">
            軸線核心：Y
            軸描繪了恆春人與自然力量的互動與行動，是恆春生活的動態感。
          </p>
          <p className="inner_p">
            正向：代表「天空」的開闊與自由，包括觀星、賞鷹、追逐日出日落，以及影響全半島的落山風。
          </p>
          <p className="inner_p">
            負向：代表「海洋」的深邃與活力，包括潛水、衝浪、海洋教育、淨灘等水域活動。這條軸線定義了運動半島與恆春人靠感覺生活的直覺。
          </p>
          <p className="inner_p">
            在這裡，生活的節奏不是來自時鐘，而是來自風速和潮汐，人必須保持感性，才能與自然共舞。
          </p>
        </div>
        <div className="block" id="quadrant_integration">
          <Title text="恆春象限的融合：四個生活方位的感性實踐" />
          <p className="subtitle">
            將五大永續面向具象化，描繪出最宜居的南國座標。
          </p>
          <p className="inner_p">
            當 X 軸與 Y
            軸交會，便形成了恆春人生活的四個感性方位。這四個象限不是孤立的，它們彼此滲透，共同構成恆春「宜居半島」的具體場景。
          </p>
          <p className="inner_p">
            我們可以在「文化x 海洋」的象限裡，看到漁村文化的再生；在「生態 x
            天空」的象限裡，體驗到社頂公園的日夜生態導覽。
          </p>
          <p className="inner_p">
            恆春感性的最終意義，是讓我們在這個座標系上找到自己獨特的落點，並理解每一個落點，都是對永續生活的一次感性實踐。
          </p>
        </div>
      </div>
      {activeQuadrant && (
        <div
          className="quadrant_modal"
          onClick={() => setActiveQuadrant(null)}
        >
          <div
            className="modal_content"
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeQuadrant.title}</h3>
            <p>{activeQuadrant.description}</p>
            <button onClick={() => setActiveQuadrant(null)}>關閉</button>
          </div>
        </div>
      )}
      <PageBottom img="./IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  );
};

export default Quadrant;
