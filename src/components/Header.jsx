import Title from "./Title";

const Header = ({ title, subtitle, bgImage }) => {
  return (
    <header className="header">
      <img src={bgImage} alt="header背景" className="header-img" />
      <div className="header-overlay">
        <Title text={title} />
        <h3 className="subtitle">{subtitle}</h3>
      </div>
      <div className="header-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,40 
               C360,140 720,0 1080,60 
               C1260,90 1440,30 1440,40 
               L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
