import React from "react";
import BottomGallery from "./BottomGallery";

const PartRight = ({
  id,
  image,
  title,
  subtitle,
  paragraphs = [],
  attractions,
  bottomImg = [],
}) => {
  return (
    <div className="part-left part-right" id={id}>
      <div className="top-part">
        {/* 文字 */}
        <div className="top-text">
          <div className="top-title">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>

          <div className="description">
            {paragraphs.map((item, index) => {
              // 如果是陣列 → 列點
              if (Array.isArray(item)) {
                return (
                  <ul className="description-list" key={index}>
                    {item.map((li, liIndex) => (
                      <li key={liIndex}>{li}</li>
                    ))}
                  </ul>
                );
              }

              // 否則就是一般段落
              return <p key={index}>{item}</p>;
            })}

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

        {/* 中線 */}
        <div className="line"></div>

        {/* 圖片 */}
        <div className="top-img">
          <img src={image} alt={title} />
        </div>
      </div>

      {/* <div className="bottom-part">
        {bottomImg.length > 0 &&
          bottomImg.map((imgSrc, index) => (
            <div className="bottom-img" key={index}>
              <img src={imgSrc} alt={`${title} bottom ${index + 1}`} />
            </div>
          ))}
      </div> */}
      <BottomGallery images={bottomImg} />
    </div>
  );
};

export default PartRight;
