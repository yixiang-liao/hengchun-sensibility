import React from "react";

const Outline = ({ title, icon, items = [] }) => {

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="outline">
      <div className="outline1">
        
        <div className="outline_title">
          <div className="icon">
            {icon && <img src={icon} alt={title} />}
          </div>
          <div className="text">{title}</div>
        </div>

        <div className="line"></div>

        <div className="outline-content">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="outline-link"
            >
              {item.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Outline;
