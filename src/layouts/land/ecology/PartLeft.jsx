import React from "react";

const PartLeft = () => {
  return (
    <div className="part-left" id="land">
      <div className="top-part">
        <div className="top-img">
          <img src="./img/ecology/IMG_4995.JPG" />
        </div>
        <div className="line"></div>
        <div className="top-text">
          <div className="top-title">
            <h2>陸域生態</h2>
            <p>梅花鹿的足跡與風剪樹</p>
          </div>
          <div className="description">
            <p>恆春生態半島，是一片由古老珊瑚隆起而成的陸地礁石奇景。</p>
            <p>
              在社頂公園這片高地上，風剪樹以百年不撓的姿態巍然屹立。它不僅見證了這座古城的生態變遷，更象徵著這片土地的堅韌與毅力。這裡的生態，是訴說歷史演變的最佳文本。
            </p>
            <p>
              當漫步到水蛙窟一帶，廣闊的低矮草原隨風起伏。復育成功的梅花鹿，在草原與礁岩古林間輕盈穿梭，牠們的呼吸聲，融合了草地和岩石的氣息，引領追隨生態的人們，會使人感受到恆春半島陸地最原始、最珍貴的生命活力與堅韌本質。
            </p>
            <div className="attractions">
              <span>精選景點：</span>
              <span>社頂公園、水蛙窟</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartLeft;
