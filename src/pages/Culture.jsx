import React from "react";
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";

import PartLeft from "../layouts/land/ecology/PartLeft";
import PartRight from "../layouts/land/ecology/PartRight";

import PageBottom from "../layouts/land/PageBottom";

const Culture = () => {
  return (
    <div className="culture pages">
      <Header2
        title="文化半島"
        subtitle="生活累積的厚度"
        icon_img="./img/ecology/ecology_icon.png"
        bgImage="./img/ecology/IMG_5008.JPG"
        description1="這裡的生活，比歷史更耐人尋味。"
        description2="恆春的文化，不是博物館裡的靜態展品，而是生活長年累積的厚度。從清代的古城牆、充滿社交意義的「吃大麵」文化，到每年落山風藝術季。這裡的文化是活的，它存在於老街的氣味、古城的巷弄、以及每一位在地居民的故事裡。"
      />
      <Outline
        title="文化半島"
        icon="./img/ecology/ecology_icon.png"
        items={[
          { id: "ancient-city", label: "古城輪廓" },
          { id: "local-language", label: "在地語言" },
          { id: "faith-festivals", label: "信仰與節慶" },
          { id: "youth-innovation", label: "青創浪潮" },
        ]}
      />
      <PartLeft
        id="ancient-city"
        image="./img/culture/IMG_4461.JPG"
        title="古城輪廓"
        subtitle="四個城門，四種生活切面"
        paragraphs={[
          "「城牆是歷史，巷弄是日常。」",
          "恆春古城是台灣少數保存完整的清代城池。四個城門各有風情：西門連接著鎮中心與老街；東門面向龍鑾潭的寧靜；南門是生活主要出入；北門的寂靜配上虎頭山的美景。每天穿梭在城牆邊，歷史就在周圍。",
          [
            "東門：保存最完整，每年舉辦「中元搶孤」活動。",
            "西門：鄰近老街，是電影《海角七號》取景地，也是民謠節的主要活動場域。",
            "南門、北門：歷經重建與部分毀損，見證時代更迭。",
          ],
        ]}
        bottomImg={[
          "./img/culture/IMG_4435.JPG", "./img/culture/IMG_4461.JPG", "./img/culture/IMG_4467.JPG", "./img/culture/IMG_4484.JPG", "./img/culture/IMG_4495.JPG", "./img/culture/IMG_4493.JPG",
        ]}
      />
      <PartRight
        id="local-language"
        image="./img/culture/IMG_4880.JPG"
        title="在地語言"
        subtitle="落山風與恆春民謠"
        paragraphs={[
          "「歌聲裡，藏著海與土地的對話。」",
          "恆春最具代表性的文化象徵「恆春民謠」",
          [
            "恆春民謠：如《思想起》，是先民開墾與生活感懷的聲音紀錄。",
            "理解它們，就是理解恆春的靈魂。",
            "月琴：恆春民謠主要伴奏樂器，音色哀婉，具地區象徵性。",
          ],
        ]}
        bottomImg={["./img/culture/IMG_4861.JPG", "./img/culture/IMG_4871.JPG", "./img/culture/IMG_4873.JPG", "./img/culture/IMG_4875.JPG", "./img/culture/IMG_4880.JPG", "./img/culture/IMG_4883.JPG", "./img/culture/IMG_4884.JPG", "./img/culture/IMG_4885.JPG", "./img/culture/IMG_4889.JPG", "./img/culture/IMG_4910.JPG",
        ]}
      />
      <PartLeft
        id="faith-festivals"
        image="./img/culture/IMG_4486.JPG"
        title="信仰與節慶"
        subtitle="土地公與搶孤文化"
        paragraphs={[
          "「在敬天畏地中，凝聚社群的力量」",
          "在地信仰成為連結當地人的核心，延續人與人之間的聯繫。",
          [
            "恆春搶孤：每年農曆七月的重大儀式，不僅展現了地方的勇氣與團結，更延續了恆春人特有的文化記憶。",
            "土地公廟：散佈在各聚落，是常民生活最親近的守護神。",
            "參與在地節慶，能深刻感受恆春的生命力。",
          ],
        ]}
        bottomImg={[
          "./img/culture/IMG_4444.JPG", "./img/culture/IMG_4445.JPG", "./img/culture/IMG_4486.JPG", "./img/culture/IMG_4500.JPG","./img/culture/IMG_4216.JPG", "./img/culture/IMG_4252.JPG", "./img/culture/IMG_4254.JPG", "./img/culture/IMG_4344.JPG", "./img/culture/IMG_4325.JPG", "./img/culture/IMG_4311.JPG", "./img/culture/IMG_4307.JPG", "./img/culture/IMG_4278.JPG", "./img/culture/IMG_4279.JPG",
        ]}
      />
      <PartRight
        id="youth-innovation"
        image="./img/culture/IMG_4789.JPG"
        title="青創浪潮"
        subtitle="歷史的文化新生命"
        paragraphs={[
          "「舊地方，新生活」",
          "許多返鄉或移居的青年選擇在古城老街區，以老屋為載體開啟了咖啡廳、選物店、獨立書店等。他們尊重老建築的紋理及味道，同時注入現代設計與永續理念，讓恆春的文化風景不再只是歷史。",
          [
            "南懶咖啡：因緣際會下到恆春旅行，喜歡上當地的環境及氛圍。",
            "紅氣球書屋：想逃離都市的喧囂的同時，也持續自己的事業，在喜歡的環境做喜歡的事。",
          ],
        ]}
        bottomImg={[
          "./img/culture/IMG_4916.JPG", "./img/culture/IMG_4932.JPG", "./img/culture/IMG_4949.JPG", "./img/culture/IMG_4961.JPG", "./img/culture/IMG_4962.JPG", "./img/culture/IMG_4973.JPG", "./img/culture/IMG_4789.JPG", "./img/culture/IMG_4779.JPG", "./img/culture/IMG_4776.JPG", "./img/culture/IMG_4769.JPG", "./img/culture/IMG_4755.JPG", "./img/culture/IMG_4749.JPG",
        ]}
      />
      <PageBottom img="./img/ecology/IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  );
};

export default Culture;
