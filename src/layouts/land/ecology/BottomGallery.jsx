import React, { useRef, useState, useEffect } from "react";

const BottomGallery = ({ images = [] }) => {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const [activeImg, setActiveImg] = useState(null);

  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollByAmount = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollBy({
      left: direction === "right" ? el.clientWidth * 0.8 : -el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  // ESC 關閉
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setActiveImg(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = trackRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  if (images.length === 0) return null;

  return (
    <>
      <div className="bottom-gallery">
        {canScrollLeft && (
          <button className="arrow left" onClick={() => scrollByAmount("left")}>
            ◀
          </button>
        )}

        <div className="gallery-track" ref={trackRef}>
          {images.map((src, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => setActiveImg(src)}
            >
              <img src={src} alt={`gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            className="arrow right"
            onClick={() => scrollByAmount("right")}
          >
            ▶
          </button>
        )}
      </div>

      {/* 🔍 點擊後的展示層 */}
      {activeImg && (
        <div className="lightbox" onClick={() => setActiveImg(null)}>
          <img
            src={activeImg}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="close" onClick={() => setActiveImg(null)}>
            ✕
          </button>
        </div>
      )}
    </>
  );
};

export default BottomGallery;
