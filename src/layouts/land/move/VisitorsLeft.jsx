import React from "react";
import BottomGallery from "./BottomGallery";

const VisitorsLeft = ({ img, title, paragraphs = [], bottomImg = [] }) => {
  return (
    <div className="visitorsLeft">
      <div className="visitor-container">
        <div className="vis-left">
          <img src={img} alt="Visitors Left" />
        </div>
        <div className="vis-line" />
        <div className="vis-right">
          <h3>{title}</h3>
          {paragraphs.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
      </div>
      <BottomGallery images={bottomImg} />
    </div>
  );
};

export default VisitorsLeft;
