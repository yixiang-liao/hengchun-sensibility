import { useEffect, useState } from "react";
import "./styles/style.css";
import AppRoutes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

function App() {
  const [loaded, setLoaded] = useState(false);

  // useEffect(() => {
  //   const images = Array.from(document.images);

  //   if (images.length === 0) {
  //     setLoaded(true);
  //     return;
  //   }

  //   let count = 0;
  //   const done = () => {
  //     count++;
  //     if (count === images.length) {
  //       setLoaded(true);
  //     }
  //   };

  //   images.forEach((img) => {
  //     if (img.complete) done();
  //     else {
  //       img.addEventListener("load", done);
  //       img.addEventListener("error", done);
  //     }
  //   });
  // }, []);
  useEffect(() => {
  const images = Array.from(document.images);

  if (images.length === 0) {
    setTimeout(() => setLoaded(true), 5000);
    return;
  }

  let count = 0;
  const done = () => {
    count++;
    if (count === images.length) {
      // ⭐ 圖片都載完後，再等 5 秒
      setTimeout(() => {
        setLoaded(true);
      }, 2000);
    }
  };

  images.forEach((img) => {
    if (img.complete) done();
    else {
      img.addEventListener("load", done);
      img.addEventListener("error", done);
    }
  });
}, []);


  return (
    <div className="app">
      {/* ⭐ Loading 只是遮罩（overlay） */}
      <LoadingPage visible={!loaded} />

      {/* ⭐ 重點：整個網站永遠存在，只是透明度變化 */}
      <div
        className="app-content"
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
