import React from "react";

const Intro = ({ id, title, subtitle, paragraphs, bottomImg }) => {
  return (
    <div className="intro" id={id}>
      <div className="intro-container">
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
          </div>
        </div>
        <div className="bottom-img">
          <img src={bottomImg} alt="Intro Bottom" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
