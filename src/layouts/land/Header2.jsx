import Title from "../../components/Title";
import { LuWaves } from "react-icons/lu";

const Header2 = ({
  title,
  subtitle,
  bgImage,
  icon_img,
  description1,
  description2,
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
          </div>
          <div className="line" />
        </div>
      </div>
    </header>
  );
};

export default Header2;
