import React from "react";

const PartLeft = ({
  id,
  image,
  title,
  subtitle,
  paragraphs = [],
  attractions,
  bottomImg = [],
}) => {
  return (
    <div className="part-left" id={id}>
      <div className="top-part">
        {/* 圖片 */}
        <div className="top-img">
          <img src={image} alt={title} />
        </div>

        {/* 中線 */}
        <div className="line"></div>

        {/* 文字 */}
        <div className="top-text">
          <div className="top-title">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <div className="description">
            {/* ⭐ 用陣列 render 敘述段落 */}
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}

            {/* 精選景點（可選） */}
            {attractions && (
              <div className="attractions">
                <span className="icon">#</span>
                <span className="highlight">
                  {attractions.label || "精選景點："}
                </span>
                <span className="locations">{attractions.locations}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bottom-part">
        {bottomImg.length > 0 &&
          bottomImg.map((imgSrc, index) => (
            <div className="bottom-img" key={index}>
              <img src={imgSrc} alt={`${title} bottom ${index + 1}`} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PartLeft;
