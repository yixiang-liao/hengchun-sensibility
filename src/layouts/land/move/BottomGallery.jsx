import React, { useRef, useState, useEffect } from "react";

const BottomGallery = ({ images = [] }) => {
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // ⭐ 用 index 控制目前顯示圖片
  const [activeIndex, setActiveIndex] = useState(null);

  /* =========================
     檢查橫向捲動狀態
     ========================= */
  const checkScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  /* =========================
     橫向捲動
     ========================= */
  const scrollByAmount = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    el.scrollBy({
      left:
        direction === "right"
          ? el.clientWidth * 0.8
          : -el.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  /* =========================
     Lightbox 切換圖片
     ========================= */
  const showPrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const showNext = () => {
    setActiveIndex((prev) =>
      prev < images.length - 1 ? prev + 1 : prev
    );
  };

  /* =========================
     鍵盤控制（ESC / ← →）
     ========================= */
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKey = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, images.length]);

  /* =========================
     初始化捲動監聽
     ========================= */
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
      {/* =========================
          底部橫向 Gallery
          ========================= */}
      <div className="bottom-gallery-move">
        {canScrollLeft && (
          <button
            className="arrow left"
            onClick={() => scrollByAmount("left")}
          >
            ◀
          </button>
        )}

        <div className="gallery-track" ref={trackRef}>
          {images.map((src, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => setActiveIndex(index)}
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

      {/* =========================
          Lightbox（放大檢視）
          ========================= */}
      {activeIndex !== null && (
        <div className="lightbox" onClick={() => setActiveIndex(null)}>
          <button
            className="nav prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            disabled={activeIndex === 0}
          >
            ‹
          </button>

          <img
            src={images[activeIndex]}
            alt="preview"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;

              const deltaX =
                e.changedTouches[0].clientX - touchStartX.current;

              if (deltaX > 50) showPrev(); // 👉 右滑
              if (deltaX < -50) showNext(); // 👉 左滑

              touchStartX.current = null;
            }}
          />

          <button
            className="nav next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            disabled={activeIndex === images.length - 1}
          >
            ›
          </button>

          <button
            className="close"
            onClick={(e) => {
              e.stopPropagation();
              setActiveIndex(null);
            }}
          >
            ✕
          </button>

          {/* 圖片計數（可留可刪） */}
          <div className="counter">
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default BottomGallery;
