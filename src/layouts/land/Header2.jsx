import Title from "../../components/Title";
import { LuWaves } from "react-icons/lu";

const Header2 = ({
  title,
  subtitle,
  bgImage,
  icon_img,
  description1,
  description2,
  attractions = {
    label: "精選景點：",
    locations: [],
  },
}) => {
  return (
    <header className="header2">
      <div className="header-img">
        <img src={bgImage} alt="Header Background" />
      </div>
      <div className="header-content">
        <div className="frame-grid">
          <div className="top">
            <div className="left">
              <h1 className="left-top">{title}</h1>
              <p className="left-bottom">{subtitle}</p>
            </div>
            <div className="right">
              <img src={icon_img} />
            </div>
          </div>
          <div className="bottom">
            <p>{description1}</p>
            <p>{description2}</p>
            {attractions?.locations?.length > 0 && (
              <div className="attractions">
                <span className="icon">#</span>

                <span className="highlight">
                  {attractions.label || "精選景點："}
                </span>

                <span className="locations">
                  {attractions.locations.map(([name, url], index) => (
                    <span key={index} className="location-item">
                      {url ? (
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          {name}
                        </a>
                      ) : (
                        <span className="no-link">{name}</span>
                      )}
                      {index < attractions.locations.length - 1 && "、"}
                    </span>
                  ))}
                </span>
              </div>
            )}
          </div>
          <div className="line" />
        </div>
      </div>
    </header>
  );
};

export default Header2;
