import React from "react";
import BottomGallery from "./BottomGallery";

const PartLeft = ({
  id,
  image,
  title,
  subtitle,
  paragraphs = [],
  attractions = {
    label: "精選景點：",
    locations: [],
  },
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

            {/* 精選景點（可選） */}
            {attractions?.locations?.length > 0 && (
              <div className="attractions">
                <span className="icon">#</span>

                <span className="highlight">
                  {attractions.label || "精選景點："}
                </span>

                <span className="locations">
                  {attractions.locations.map(([name, url], index) => (
                    <span key={index} className="location-item">
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                      </a>
                      {index < attractions.locations.length - 1 && "、"}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <BottomGallery images={bottomImg} />
      {/* <div className="bottom-part">
        {bottomImg.length > 0 &&
          bottomImg.map((imgSrc, index) => (
            <div className="bottom-img" key={index}>
              <img src={imgSrc} alt={`${title} bottom ${index + 1}`} />
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default PartLeft;
