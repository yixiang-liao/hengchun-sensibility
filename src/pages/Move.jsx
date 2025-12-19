import React from "react";
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";

import Intro from "../layouts/land/move/Intro";
import VisitorsLeft from "../layouts/land/move/VisitorsLeft";
import VisitorsRight from "../layouts/land/move/VisitorsRight";
import Traveler from "../layouts/land/move/Traveler";

import PageBottom from "../layouts/land/PageBottom";

const Move = () => {
  return (
    <div className="move pages">
      <Header2
        title="宜居半島"
        subtitle="聽見日常恆春不同的聲音"
        icon_img="./icon/ecology_icon.png"
        bgImage="./img/move/IMG_4926.JPG"
        description1="在享受海風的同時，生活也能獲得安心的守護。"
        description2="移居恆春，不只是追求浪漫的海風，更需要被支撐的生活。本章聚焦居住、教育、醫療與交通的真實樣貌，並透過在地居民、移居者與旅行者的訪談，看見一座小鎮如何讓人「願意留下」與「能夠留下」。從完善的醫療體系到共學的教室、再到夜裡仍亮著燈的街巷，恆春，用自己的節奏，定義了什麼叫「宜居」。"
      />
      <Outline
        title="宜居半島"
        icon="./icon/ecology_icon.png"
        items={[
          { id: "local", label: "在地人訪談" },
          { id: "migrant", label: "移居者訪談" },
          { id: "traveler", label: "旅行者訪談" },
          { id: "conclusion", label: "結語" },
        ]}
      />
      <Intro
        id="local"
        title="在地人訪談"
        subtitle="生活的日常感"
        paragraphs={[
          "從小鎮長大的日常味，看見恆春的本質。",
          "在地人眼中的恆春，是由風、巷弄、街市與熟悉的臉孔堆疊出的日常。不是觀光指南上的亮點，而是一種從生活裡自然浮出的節奏感。",
        ]}
        bottomImg="./img/move/IMG_4483.JPG"
      />

      <VisitorsLeft
        img="./img/move/IMG_0979.JPG"
        title="一芳海苔醬的女婿"
        paragraphs={[
          "接手六十年老店的女婿原本來自台北，五年前隨妻子返鄉。他發現恆春的生活很簡單：早上騎車吹風、下午望海放空。空氣乾燥清爽、風大但舒心。他一邊向岳父學日式古法慢煮海苔醬，一邊把老店重新整理，從傳統「一芳海苔」延伸到新品牌「惦佃」，讓老味道走進更多場合。",
          "在他眼裡，恆春真正迷人的不是觀光季節的熱鬧，而是淡季時的安靜、緩慢與踏實。他認為這裡的人情味與自然，是能讓人重新找回生活步調的力量。",
        ]}
        bottomImg={[
          "./img/move/IMG_0923.JPG",
          "./img/move/IMG_0931.JPG",
          "./img/move/IMG_0929.JPG",
          "./img/move/IMG_1016.JPG",
          "./img/move/IMG_1011.JPG",
          "./img/move/IMG_1008.JPG",
          "./img/move/IMG_0995.JPG",
        ]}
      />
      <VisitorsRight
        img="./img/move/IMG_4539.JPG"
        title="30M Bar 的老闆"
        paragraphs={[
          "在恆春生活十二年的他，把每天過得像是與小鎮同步呼吸。早晨上頂樓照顧花園，中午與太太吃飯，下午看風與心情備料、運動或休息，晚上開店。他把「恆春味」形容為海的鹹、山的草本與風的自然味，因此調酒中常加入帶海氣的「港口茶」。",
          "十二年的生活讓他明白：恆春不會急、也不會變太快。店家開了又關，是這座小鎮的節奏。他只是順著風留下來，也因此真正把恆春當成家。",
        ]}
        bottomImg={["./img/move/IMG_4742.JPG", "./img/move/IMG_0917.JPG", "./img/move/IMG_4560.JPG", "./img/move/IMG_4555.JPG", "./img/move/IMG_4539.JPG", "./img/move/IMG_4532.JPG", "./img/move/IMG_4534.JPG", "./img/move/IMG_4538.JPG", "./img/move/IMG_4537.JPG"
        ]}
      />

      <Intro
        id="migrant"
        title="移居者訪談"
        subtitle="為什麼選擇來恆春生活？"
        paragraphs={[
          "被陽光、自由與生活感吸引的選擇。",
          "移居者帶著不同的背景來到恆春，卻因為同樣的風、自然與自在而留下。他們眼中恆春的魅力，是一種能「讓人活回自己」的地方特質。",
        ]}
        bottomImg="./img/move/IMG_4758.JPG"
      />
      <VisitorsLeft
        img="./img/move/IMG_4766.JPG"
        title="南懶咖啡的老闆娘"
        paragraphs={[
          "原本來自台南、因疫情而被迫重新調整人生節奏。一次旅行讓她被恆春的自由氣息吸引，決定搬來生活五年。她認為恆春的味道不是在地人獨有，而是由移居者與本地人共同塑造的混合能量音樂人、創作者、咖啡職人，都在這片土地找到步調。",
          "在她眼裡，恆春是一座能讓人工作、生活與自我探索並存的小鎮。她希望更多旅人別只看水上活動，而是深入街巷與社區，因為那裡才藏著恆春真正的生活感。",
        ]}
        bottomImg={["./img/move/IMG_4785.JPG", "./img/move/IMG_4742.JPG", "./img/move/IMG_0917.JPG", "./img/move/IMG_4792.JPG", "./img/move/IMG_4791.JPG", "./img/move/IMG_4789.JPG", "./img/move/IMG_4783.JPG", "./img/move/IMG_4780.JPG", "./img/move/IMG_4776.JPG", "./img/move/IMG_4769.JPG", "./img/move/IMG_4766.JPG", "./img/move/IMG_4775.JPG"
        ]}
      />
      <VisitorsRight
        img="./img/move/IMG_5015.JPG"
        title="越野自行車負責人 林忠義"
        paragraphs={[
          "二十年前，他因為熱愛沖浪搬到恆春，沒想到一路從海玩到山。他說恆春最獨特的不是海，而是同時擁有海、平原與山林的天然運動場。他的日常是修賽道、割草、騎車與跑步，用身體持續與土地對話。",
          "他說：「恆春味不是香味，是一種想讓人動起來的『戶外感』。」",
          "對他而言，恆春應被想像成國際級的運動旅居地像朝聖之路那樣，用雙腳與身體理解這座半島。",
        ]}
        bottomImg={["./img/move/IMG_5015.JPG", "./img/move/IMG_5016.JPG", "./img/move/IMG_5017.JPG", "./img/move/IMG_5018.JPG", "./img/move/IMG_5019.JPG"
        ]}
      />
      <VisitorsLeft
        img="./img/move/IMG_4951.JPG"
        title="紅氣球書屋的主理人"
        paragraphs={[
          "在北部飯店業多年後，她帶著疲憊回到南部，重新選擇生活。與老公比較過不同城市後，她確信恆春的自然、風、安定感，是不用裝飾的真魅力。開書店的決定看似衝動，卻讓她替恆春補上一塊文化空白。",
          "在她心中，恆春最吸引人的不是景點，而是能讓人慢下來、活得像自己的生活節奏。",
        ]}
        bottomImg={[
          "./img/move/IMG_4966.JPG", "./img/move/IMG_4965.JPG", "./img/move/IMG_4962.JPG", "./img/move/IMG_4951.JPG", "./img/move/IMG_4954.JPG", "./img/move/IMG_4950.JPG", "./img/move/IMG_4934.JPG", "./img/move/IMG_4932.JPG", "./img/move/IMG_4928.JPG", "./img/move/IMG_4925.JPG", "./img/move/IMG_4924.JPG", "./img/move/IMG_4923.JPG", "./img/move/IMG_4922.JPG", "./img/move/IMG_4920.JPG", "./img/move/IMG_4919.JPG", "./img/move/IMG_4916.JPG", "./img/move/IMG_4926.JPG"
        ]}
      />


      <Intro
        id="traveler"
        title="旅行者訪談"
        subtitle="旅行者眼中的恆春"
        paragraphs={[
          "旅行者眼中的恆春，是一種會讓人多待幾天的舒適。",
          "觀光客看見的恆春，是第一眼的天空、第一口的風與第一個慢下來的瞬間。對他們而言，恆春是一個不需要安排行程，就能被治癒的地方。",
        ]}
        bottomImg="./img/move/IMG_5001.JPG"
      />
      <Traveler
        title="攝影師 林育鋒"
        paragraphs={[
          "他是從台北搬到恆春的攝影師，因為喜歡這裡的光與風。他說恆春的光線特別柔和，能讓人放鬆心情、專注於當下。他喜歡在海邊散步、在巷弄中尋找靈感，並用相機捕捉這些美好的瞬間。",
          "對他而言，恆春是一個能讓人重新找回自我的地方。在這裡，他感受到生活的節奏變得緩慢而有意義，每一天都充滿了新的發現與感動。",
        ]}
      />

      <Intro
        id="conclusion"
        title="結語"
        subtitle="宜居半島的核心精神"
        paragraphs={[
          "「宜居半島」的故事，是關於「選擇」與「節奏」。無論是接手家業的在地二代、將風味封進酒瓶的酒吧主理人，還是因自由純粹而留下、將書店變成文化基地的移居者，他們都指向同一個恆春的核心價值：這是一個能夠讓人找回真實步調、並被強大社群力量所支持的地方。 在恆春，生活的儀式感不是被外力定義的成功，而是規律且扎實地順應自然、與人串連。最終，恆春的魅力在於它的「真實性」讓每一個人在這片海風與陽光裡，都能卸下偽裝，與土地、與社區、與自我展開一場長久且踏實的對話。",
        ]}
        bottomImg="./img/move/IMG_4204.JPG"
      />
      <PageBottom img="./IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  );
};

export default Move;
