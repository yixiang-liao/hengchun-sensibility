import React from "react";
import BottomGallery from "./BottomGallery";

const VisitorsRight = ({ img, title, paragraphs = [], bottomImg = [] }) => {
  return (
    <div className="visitorsRight">
      <div className="visitor-container">
        <div className="vis-right">
          <h3>{title}</h3>
          {paragraphs.map((item, index) => {
            return <p key={index}>{item}</p>;
          })}
        </div>
        <div className="vis-line" />
        <div className="vis-left">
          <img src={img} alt="Visitors Left" />
        </div>
      </div>
      <BottomGallery images={bottomImg} />
    </div>
  );
};

export default VisitorsRight;
