import React from "react";
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";
import PageBottom from "../layouts/land/PageBottom";

import PartLeft from "../layouts/land/ecology/PartLeft";
import PartRight from "../layouts/land/ecology/PartRight";
import Intro from "../layouts/land/move/Intro";

const Flavor = () => {
  return (
    <div className="flavor pages">
      <Header2
        title="風味半島"
        subtitle="風土產生的滋味"
        icon_img="./icon/flavor_icon.png"
        bgImage="./img/move/IMG_4785.JPG"
        description1="一種順應季節與人情的飲食節奏。"
        description2="恆春的味道，是海風的鹹、陽光的甜，更是土地與勞動者的敬意。這裡不只有觀光海產，更有充滿在地人情味的早餐、午間的「大麵文化」，以及隱藏在巷弄裡的外來新滋味。用胃口探索恆春，你將品嚐到最真實的生活。"
      />
      <Outline
        title="風味半島"
        icon="./icon/flavor_icon.png"
        items={[
          { id: "breakfast", label: "恆春早餐宇宙" },
          { id: "lunch", label: "午餐時光" },
          { id: "noodle", label: "大麵地圖" },
          { id: "dinner", label: "晚餐與宵夜" },
          { id: "cafe", label: "甜點與咖啡" },
        ]}
      />
      <PartLeft
        id="breakfast"
        image="./img/flavor/IMG_5035.JPG"
        title="恆春早餐宇宙"
        subtitle="以在地香氣開啟序曲"
        paragraphs={[
          "臭脯餅、飯糰、古早味，開啟南國的一天。",
          "恆春的清晨由豐富的早餐選擇組成：",
          [
            "在地小吃型：吳家中式早餐的「臭脯餅」、蓮阿姨的古早味飯糰，是純粹的在地香氣。",
            "市場型：邊逛市場邊吃，感受人聲鼎沸的活力。",
            "咖啡早午餐型：新興的咖啡廳提供結合在地小農食材的早午餐。",
          ],
        ]}
        attractions={{
          locations: [["吳家中式早餐（菜市場臭脯餅）",""], ["小山東早餐",""]],
        }}
        bottomImg={[
          "./img/flavor/IMG_4679.JPG", "./img/flavor/IMG_4681.JPG", "./img/flavor/IMG_4682.JPG", "./img/flavor/IMG_4684.JPG", "./img/flavor/IMG_4688.JPG", "./img/flavor/IMG_4690.JPG", "./img/flavor/IMG_5029.JPG", "./img/flavor/IMG_5047.JPG", "./img/flavor/IMG_5052.JPG", "./img/flavor/IMG_5046.JPG", "./img/flavor/IMG_5035.JPG", "./img/flavor/IMG_5030.JPG"
        ]}
      />
      <PartRight
        id="lunch"
        image="./img/flavor/IMG_4240.JPG"
        title="午餐時光"
        subtitle="「吃大麵」的在地社交文化"
        paragraphs={[
          "入縣城，呷大麵，一碗麵，是最好的社交與歇腳文化。",
          "「吃大麵」是恆春獨特的午間社交文化，人們在麵店歇腳、聊八卦、談公事。麵店種類多元：",
          [
            "傳統切仔麵：阿琴麵店、縣城大麵等，是經典選擇。",
            "異國麵食：也有融入在地海鮮的越式或泰式麵點。",
            "這份簡單的在地滋味，是恆春人日常不可或缺的印記。",
          ],
        ]}
        attractions={{
          locations: [["縣城大麵",""], ["Mangia Pizza",""]],
        }}
        bottomImg={["./img/flavor/IMG_4229.JPG", "./img/flavor/IMG_4236.JPG", "./img/flavor/IMG_4240.JPG", "./img/flavor/IMG_4247.JPG", "./img/flavor/IMG_4248.JPG", "./img/flavor/IMG_5094.JPG", "./img/flavor/IMG_5091.JPG", "./img/flavor/IMG_5090.JPG", "./img/flavor/IMG_5085.JPG", "./img/flavor/IMG_5084.JPG", "./img/flavor/IMG_5083.JPG", "./img/flavor/IMG_5082.JPG", "./img/flavor/IMG_5081.JPG", "./img/flavor/IMG_5078.JPG", "./img/flavor/IMG_5077.JPG", "./img/flavor/IMG_5076.JPG"
        ]}
      />
      <Intro
        id="noodle"
        title="恆春大麵地圖"
        paragraphs={[
          "本地圖以恆春舊城區為範圍，標示在地人中午常吃的大麵店位置。路線非精確比例，而是依日常行走與生活動線繪製，希望帶你用一碗大麵，走進恆春最真實的中午風景。",
        ]}
      />
      <div className="sport_map_container">
        <img className="sport_map" src="./img/flavor/noodle_map.png" />
      </div>
      <PartLeft
        id="dinner"
        image="./img/flavor/IMG_4811.JPG"
        title="晚餐與宵夜"
        subtitle="夕陽映照下的家常溫度"
        paragraphs={[
          "從家庭聚餐的臺菜沙龍到深夜的巷口人情。",
          "恆春的夜晚，節奏開始放慢。",
          [
            "晚餐：從提供在地臺菜的虎炊稻，到充滿家常溫度的誠食，適合家庭聚餐。",
            "宵夜：恆春炭烤1314、熱炒燒烤是深夜巷口的人情味。",
            "夜生活：30M BAR提供慢慢聊天、慢慢喝的恆春步調。",
          ],
        ]}
        attractions={{
          locations: [["咱的生魚片 (後壁湖)",""], ["30M BAR",""]],
        }}
        bottomImg={["./img/flavor/IMG_4560.JPG", "./img/flavor/IMG_4554.JPG", "./img/flavor/IMG_4551.JPG", "./img/flavor/IMG_4547.JPG", "./img/flavor/IMG_4543.JPG", "./img/flavor/IMG_4541.JPG", "./img/flavor/IMG_4539.JPG", "./img/flavor/IMG_4534.JPG", "./img/flavor/IMG_4532.JPG", "./img/flavor/IMG_0907.JPG", "./img/flavor/IMG_4820.JPG", "./img/flavor/IMG_4814.JPG", "./img/flavor/IMG_4811.JPG", "./img/flavor/IMG_4807.JPG", "./img/flavor/IMG_4806.JPG", "./img/flavor/IMG_4803.JPG", "./img/flavor/IMG_4799.JPG", "./img/flavor/IMG_4795.JPG", "./img/flavor/IMG_4794.JPG"
        ]}
      />
      <PartRight
        id="cafe"
        image="./img/flavor/IMG_4384.JPG"
        title="甜點與咖啡"
        subtitle="南國午後的甜味生活"
        paragraphs={[
          "炎熱午後，一碗甜湯就是生活的解藥。",
          "綠豆饌是恆春特有的消暑甜品，由去殼綠豆與 Q 彈的粉條組成，清涼解渴。此外，許多特色咖啡廳（如樹夏飲事、麋谷）選擇在老屋或特色建築中，提供手沖咖啡與在地甜點，成為移居者與旅人享受午後時光的秘密基地。",
        ]}
        attractions={{
          locations: [["阿伯綠豆饌",""], ["艸野人綠豆沙",""]],
        }}
        bottomImg={["./img/flavor/IMG_5197.JPG", "./img/flavor/IMG_5204.JPG", "./img/flavor/IMG_5210.JPG", "./img/flavor/IMG_4375.JPG", "./img/flavor/IMG_4381.JPG", "./img/flavor/IMG_4384.JPG", "./img/flavor/IMG_4392.JPG", "./img/flavor/IMG_4742.JPG", "./img/flavor/IMG_4749.JPG", "./img/flavor/IMG_4781.JPG", "./img/flavor/IMG_4782.JPG", "./img/flavor/IMG_4784.JPG", "./img/flavor/IMG_4792.JPG", "./img/flavor/IMG_4791.JPG"
        ]}
      />
      <PageBottom img="./IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  );
};

export default Flavor;
