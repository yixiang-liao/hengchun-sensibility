import Title from "./Title";
import { LuWaves } from "react-icons/lu";

const Header2 = ({ title, subtitle, bgImage }) => {
  return (
    <header className="header2">
      <div className="header-content">
        <div className="discover-frame">
          {/* 上框線 */}

          <div className="frame-grid">
            <div className="left">
              <h1 className="left-top">生態半島</h1>
              <h2 className="left-bottom">認識自然的最佳場域</h2>
            </div>
            <div className="right">
              <LuWaves />
            </div>
          </div>

          {/* 下框線 */}
        </div>
        <div className="bottom">
          <LuWaves />
        </div>
      </div>
      <div className="header-img">
        <img src="./img/ecology/IMG_4995.JPG" alt="Header Background" />
      </div>
    </header>
  );
};

export default Header2;
