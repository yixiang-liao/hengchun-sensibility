export default function LoadingPage({ visible = true }) {
  return (
    <div className={`loading-page ${visible ? "show" : "hide"}`}>
      <div className="loading-content">
        <img
          src="./logo/logo-2.png"
          alt="Hengchun Sensibility Logo"
          className="loading-logo"
          draggable="false"
        />
        <div className="loading-line" />
        <p className="loading-text">正在載入中...</p>
      </div>
    </div>
  );
}
