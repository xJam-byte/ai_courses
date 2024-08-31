import React, { useEffect, useRef, useState } from "react";

function CanDo() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const slides = [
    {
      id: 1,
      content: "",
    },
    {
      id: 2,
      content: "",
    },
    {
      id: 3,
      content: "",
    },
    {
      id: 4,
      content: "",
    },
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerDimensions = containerRef.current
    ? containerRef.current.getBoundingClientRect()
    : { width: currentIndex * 0 };

  const containerWidth = containerDimensions.width;

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
    if (containerRef.current) {
      containerRef.current.scrollLeft += containerWidth;
    }
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    if (containerRef.current) {
      containerRef.current.scrollLeft -= containerWidth;
    }
  };

  useEffect(() => {
    const handleResize = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="wrapper catsBlock">
      <h2>Что вы можете создать</h2>
      {innerWidth > 1025 ? (
        <>
          <div className="topBlock">
            <div className="leftBlock">
              <img src="/assets/images/cats/top/1.png" alt="cat1" />
            </div>
            <div className="middleBlock">
              <div className="top">
                <img src="assets/images/cats/top/2.png" alt="cat2" />
                <img src="assets/images/cats/top/3.png" alt="cat3" />
                <img src="assets/images/cats/top/4.png" alt="cat4" />
              </div>
              <div className="bottom">
                <img src="/assets/images/cats/top/5.png" alt="cat5" />
                <img src="/assets/images/cats/top/6.png" alt="cat6" />
              </div>
            </div>
            <div className="rightBlock">
              <img src="/assets/images/cats/top/7.png" alt="cat7" />
            </div>
          </div>
          <div className="bottomBlock">
            <div className="leftBlock">
              <img src="/assets/images/cats/bottom/1.png" alt="cat8" />
            </div>
            <div className="rightBlock">
              <img src="/assets/images/cats/bottom/2.jpg" alt="cat9" />
              <img src="/assets/images/cats/bottom/3.jpg" alt="cat10" />
              <img src="/assets/images/cats/bottom/4.jpg" alt="cat11" />
              <img src="/assets/images/cats/bottom/5.jpg" alt="cat12" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="product wrapper">
            <button onClick={handlePrevSlide} className="pre-btn">
              {/* <img src="/assets/images/arrow.png" alt="prev" /> */}
            </button>
            <button onClick={handleNextSlide} className="nxt-btn">
              {/* <img src="/assets/arrow.png" alt="next" /> */}
            </button>
            <div className="product-container" style={{height: 600}} ref={containerRef}>
              <div className="product-card">
                <div style={{ width: 400 , height: 600 }} className="product-image">
                  <img
                    src="/assets/images/cats/top/1.png"
                    alt="cat1"
                    className="product-thumb"
                  />
                </div>
              </div>

              <div
                className="product-card"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  width: 1300,
                  height: 600,
                  marginLeft: innerWidth > 426 ? "10%" : 200
                }}
              >
                <div
                  style={{ height: "45%", width: "30%" }}
                  className="product-image"
                >
                  <img
                    src="/assets/images/cats/top/2.png"
                    alt="cat1"
                    className="product-thumb"
                  />
                </div>
                <div
                  style={{ height: "45%", width: "30%", marginLeft: 15 }}
                  className="product-image"
                >
                  <img
                    src="/assets/images/cats/top/3.png"
                    alt="cat1"
                    className="product-thumb"
                  />
                </div>

                <div
                  style={{ height: "45%", width: "30%", marginLeft: 15 }}
                  className="product-image"
                >
                  <img
                    src="/assets/images/cats/top/4.png"
                    alt="cat1"
                    className="product-thumb"
                  />
                </div>
                <div
                  style={{ marginTop: 50, height: "45%", width: "60%" }}
                  className="product-image"
                >
                  <img
                    src="/assets/images/cats/top/5.png"
                    alt="cat1"
                    className="product-thumb"
                  />
                </div>
                <div
                  style={{
                    marginTop: 50,
                    height: "45%",
                    width: "30%",
                    marginLeft: 25,
                  }}
                  className="product-image"
                >
                  <img
                    src="/assets/images/cats/top/6.png"
                    alt="cat1"
                    className="product-thumb"
                  />
                </div>
              </div>
              <div className="product-card" style={{ marginLeft: -100 }}>
                <div style={{ width: 400 , height: 600 }} className="product-image">
                  <img
                    src="/assets/images/cats/top/7.png"
                    alt="cat1"
                    className="product-thumb"
                  />
                </div>
              </div>
                          <div className="product-card">
                <div style={{width: 400, marginLeft: innerWidth <= 375 ? 300 : 200, height: 600 }} className="product-image">
                  <img
                    src="/assets/images/cats/bottom/1.png"
                    className="product-thumb"
                    alt=""
                  />
                </div>
              </div>

              <div className="product-card">
                <div style={{ width: 400, marginLeft: innerWidth <= 375 ? 600 : 400,height: 600 }} className="product-image">
                  <img
                    src="/assets/images/cats/bottom/2.jpg"
                    className="product-thumb"
                    alt=""
                  />
                </div>
              </div>

              <div className="product-card">
                <div style={{ width: 400, marginLeft: innerWidth <= 375 ? 900 : 600,height: 600 }} className="product-image">
                  <img
                    src="/assets/images/cats/bottom/3.jpg"
                    className="product-thumb"
                    alt=""
                  />
                </div>
              </div>

              <div className="product-card">
                <div style={{ width: 400, marginLeft: innerWidth <= 375 ? 1200 : 800,height: 600 }} className="product-image">
                  <img
                    src="/assets/images/cats/bottom/4.jpg"
                    className="product-thumb"
                    alt=""
                  />
                </div>
              </div>
              
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CanDo;
