import React from "react";
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";
import PartLeft from "../layouts/land/ecology/PartLeft";
import PageBottom from "../layouts/land/PageBottom";

const Ecology = () => {
  return (
    <div className="ecology pages">
      <Header2
        title="生態半島"
        subtitle="認識自然的最佳場域"
        icon_img="./img/ecology/ecology_icon.png"
        bgImage="./img/ecology/IMG_5008.JPG"
        description1="你有沒有想過，城市旁邊還藏著一片真正的「自然」？"
        description2="以前，它可能只是一片靠近海邊的土地。從沒想過這片土地會蘊藏著麼豐富的生態物種。走進這裡，你會感覺空氣都特別清新，能聽到各種鳥叫聲，腳底下踩的可能是礁岩濕地，也可能是被太陽照曬溫暖的白沙。"
      />
      <Outline
        title="生態半島"
        icon="./img/ecology/ecology_icon.png"
        items={[
          { id: "land", label: "陸域生態" },
          { id: "ocean", label: "海洋生態" },
          { id: "air", label: "空域生態" },
        ]}
      />
      <PartLeft />
      <PageBottom img="./img/ecology/IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  );
};

export default Ecology;
