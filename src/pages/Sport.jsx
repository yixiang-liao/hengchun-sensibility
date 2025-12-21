import React from "react";
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";

import PartLeft from "../layouts/land/ecology/PartLeft";
import PartRight from "../layouts/land/ecology/PartRight";

import PageBottom from "../layouts/land/PageBottom";

const Sport = () => {
  return (
    <div className="sport pages">
      <Header2
        title="運動半島"
        subtitle="與自然共振的自由"
        icon_img="./icon/sport_icon.png"
        bgImage="./img/sport/000_4635-20190721.jpg"
        description1="將大自然作為你的專屬健身房。"
        description2="恆春半島就是一座天然的運動場。在這裡，運動不是非得在健身房裡揮汗，而是跟著身體去旅行，將自然作為活動場域。從水上活動到山林越野，恆春的自由感，是透過身體與風、海、土地共振而感受到的。"
      />
      <Outline
        title="運動半島"
        icon="./icon/sport_icon.png"
        items={[
          { id: "waters", label: "水域活動" },
          { id: "land", label: "陸域活動" },
          { id: "sport_map", label: "運動地圖" },
        ]}
      />
      <PartLeft
        id="waters"
        image="./img/sport/000_4635-20190721.jpg"
        title="水域活動"
        subtitle="潛水與衝浪的海洋日常"
        paragraphs={[
          "「潛入海底，與海龜共享一片寧靜。」",
          "恆春不僅是台灣最南端的城市，也是最適合運動的地方；剛好的溫度、剛好的天氣，最容易激起運動欲。",
          [
            "潛水：後壁湖、萬里桐是潛水勝地，能近距離觀察珊瑚礁。",
            "獨木舟：只靠槳聲和浪花，把自由感收入心中。",
            "風帆/風箏衝浪：在落山風季節，感受到與風的追逐。",
            "海洋運動是恆春人最引以為傲的自由。",
          ],
        ]}
        bottomImg={[
          "./img/sport/000_4606-20190721.jpg",
          "./img/sport/000_4617-20190721.jpg",
          "./img/sport/000_4627-20190721.jpg",
          "./img/sport/000_4635-20190721.jpg",
        ]}
      />
      <PartRight
        id="land"
        image="./img/sport/IMG_4594.JPG"
        title="陸域活動"
        subtitle="單車、越野與慢跑地圖"
        paragraphs={[
          "「用慢速的方式，漫遊半島風情。」",
          "恆春的天氣與地理環境，有許多適合單車、越野和慢跑的路線",
          [
            "單車：環龍鑾潭或沿著屏鵝公路的慢車道。",
            "越野：挑戰社頂公園的林道或龍磐公園的草原。",
            "慢跑：古城牆內或海邊沙灘，都是感受南國氣味的絕佳場域。",
          ],
        ]}
        bottomImg={[
          "./img/sport/IMG_4565.JPG",
          "./img/sport/IMG_4566.JPG",
          "./img/sport/IMG_4567.JPG",
          "./img/sport/IMG_4575.JPG",
          "./img/sport/IMG_4576.JPG",
          "./img/sport/IMG_4581.JPG",
          "./img/sport/IMG_4579.JPG",
          "./img/sport/IMG_4595.JPG",
          "./img/sport/IMG_4594.JPG",
          "./img/sport/IMG_4593.JPG",
          "./img/sport/IMG_4580.JPG",
        ]}
      />
      <PageBottom img="./IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  );
};

export default Sport;
