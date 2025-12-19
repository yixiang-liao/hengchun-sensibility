import React from "react";
import Header2 from "../layouts/land/Header2";
import BackToTopButton from "../components/BackToTopButton";
import Outline from "../layouts/land/Outline";
import PartLeft from "../layouts/land/ecology/PartLeft";
import PartRight from "../layouts/land/ecology/PartRight";
import PageBottom from "../layouts/land/PageBottom";

const Ecology = () => {
  return (
    <div className="ecology pages">
      <Header2
        title="生態半島"
        subtitle="認識自然的最佳場域"
        icon_img="./icon/ecology_icon.png"
        bgImage="./img/ecology/IMG_5008.JPG"
        description1="你有沒有想過，城市旁邊還藏著一片真正的「自然」？"
        description2="以前，它可能只是一片靠近海邊的土地。從沒想過這片土地會蘊藏著麼豐富的生態物種。走進這裡，你會感覺空氣都特別清新，能聽到各種鳥叫聲，腳底下踩的可能是礁岩濕地，也可能是被太陽照曬溫暖的白沙。"
      />
      <Outline
        title="生態半島"
        icon="./icon/ecology_icon.png"
        items={[
          { id: "land", label: "陸域生態" },
          { id: "ocean", label: "海洋生態" },
          { id: "air", label: "空域生態" },
        ]}
      />
      <PartLeft
        id="land"
        image="./img/ecology/UJ-40.jpg"
        title="陸域生態"
        subtitle="梅花鹿的足跡與風剪樹"
        paragraphs={[
          "恆春生態半島，是一片由古老珊瑚隆起而成的陸地礁石奇景。",
          "在社頂公園這片高地上，風剪樹以百年不撓的姿態巍然屹立。它不僅見證了這座古城的生態變遷，更象徵著這片土地的堅韌與毅力。這裡的生態，是訴說歷史演變的最佳文本。",
          "當漫步到水蛙窟一帶，廣闊的低矮草原隨風起伏。復育成功的梅花鹿，在草原與礁岩古林間輕盈穿梭，牠們的呼吸聲，融合了草地和岩石的氣息，引領追隨生態的人們，會使人感受到恆春半島陸地最原始、最珍貴的生命活力與堅韌本質。",
        ]}
        attractions={{
          locations: "社頂公園、水蛙窟",
        }}
        bottomImg={[
          "./img/ecology/UJ-58.jpg",
          "./img/ecology/UJ-17.jpg",
          "./img/ecology/JCE_0548-20151124.jpg",
          "./img/ecology/JCE_7848-20150702.jpg",
          "./img/ecology/JCE_0543-20151124.jpg",
          "./img/ecology/JCE_0533-20151124.jpg",
          "./img/ecology/DSC_6382.jpg",
        ]}
      />
      <PartRight
        id="ocean"
        image="./img/ecology/IMG_4995.JPG"
        title="海域生態"
        subtitle="海洋的溫柔與力量"
        paragraphs={[
          "恆春半島西岸的海岸線下，隱藏著一片由古老珊瑚礁與海洋生物共同組成的生態圈，這裡被譽為臺灣本島珊瑚礁最豐富的海域。",
          "在後壁湖潮間帶，我們見證著微小卻強大的韌性。每當潮水緩緩退去，裸露的礁岩立刻變身為生命的微觀舞台：寄居蟹、海螺、以極致的抓附力，抵抗著海水的衝擊與變幻，淋漓盡致地展現了這片海陸交界處頑強不息的生命力量。",
          "而最具人氣的南灣，以細緻的白沙與蔚藍的海色聞名，這裏訴說著人們與生態間共存的故事篇章。作為享受這片海域的居民和訪客，我們都肩負著守護的責任，確保這場白沙、潮汐與生命的永續，能夠永遠在恆春半島的海岸線迴盪。",
        ]}
        attractions={{
          locations: "後壁湖潮間帶、南灣",
        }}
        bottomImg={[
          "./img/ecology/JCE_0477-20151107.jpg",
          "./img/ecology/JCE_0481-20151107.jpg",
          "./img/ecology/JCE_3801.jpg",
        ]}
      />
      <PartLeft
        id="air"
        image="./img/ecology/000_3516.jpg"
        title="空域生態"
        subtitle="風中的南方驛站"
        paragraphs={[
          "恆春半島的天空，是一條古老而壯闊的生命航線，充滿了鳥類遷徙故事。",
          "每年秋季，數以萬計的赤腹鷹和灰面鵟鷹，沿著固定的路徑抵達恆春。牠們巧妙地利用落山風和上升熱氣流，在空中形成震撼的遷徙場景，展現跨越數千公里的南遷之旅。這些猛禽在白天高飛穿越半島上空，而在半島中央，被譽為水鳥天堂的龍鑾潭，則迎接著另一批嬌客。",
          "龍鑾潭在冬季是大量雁鴨科候鳥南下度冬的重要棲息地，每年吸引數千隻鳳頭潛鴨、小水鴨等水鳥群聚，與天空中過境的景觀，共同構築了恆春半島豐富的鳥類生態。",
          "白日的鷹群飛過，傍晚時刻關山則上演著另一場光影盛宴。夕陽緩緩沉入海平面，將天空染成一片金色。到了夜晚，站在龍磐一望無際的草原上，頭頂的星空浩瀚無垠，讓恆春多了一幅畫。恆春的空域，是風、光、生命的忠實體現。",
        ]}
        attractions={{
          locations: "龍鑾潭、關山、龍磐公園",
        }}
        bottomImg={[
          "./img/ecology/000_3523.jpg",
          "./img/ecology/000_3530-1.jpg",
          "./img/ecology/000_3530-1.jpg",
          "./img/ecology/000_3530.jpg",
          "./img/ecology/000_4702-20190724.jpg",
          "./img/ecology/JCE_1743.jpg",
          "./img/ecology/JCE_1790.jpg",
        ]}
      />
      <PageBottom img="./IMG_5133.JPG" />
      <BackToTopButton />
    </div>
  );
};

export default Ecology;
