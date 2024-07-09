import React, { useRef, useState } from "react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/images/carousel/1.png",
      text: "Авторский курс",
      title: "Авторский курс по ИИ",
      paragraph1:
        "Курс без наставничества, рассчитанный на самостоятельное обучение Стоимость: 23 тысячи тенге В стоймость входит основной материал и видео",
      paragraph2:
        "Курс с наставничеством Длительность : две недели Стоимость: 30 тысяч тенге В стоймость входит основной материал, видео, сертификат, онлайн созвон по зум индивидуально 1 раз",
    },
    {
      id: 2,
      image: "/assets/images/carousel/2.png",
      text: "Мастер класс",
      title: "Мастер класс по ИИ",
      paragraph1:
        "Длительность 1.5 часа 30 минут теории + час практики Стоимость: 8 тысяч тенге Формат : онлайн через зум конференциюВ стоймость входит запись МК для каждого участника и разбора домашнего задания через WhatsApp группу ",
      paragraph2: "",
    },
    {
      id: 3,
      image: "/assets/images/carousel/3.png",
      text: "Консультация",
      title: "Консультация от автора",
      paragraph1:
        "45 минут Стоимость - 15 тысяч тенге Формат : онлайн / офлайн Астана В стоймость входит запись обучения и поддержкаученика в течении двух недель",
      paragraph2: "",
    },
    {
      id: 4,
      image: "/assets/images/carousel/4.jpg",
      text: "Тренинги",
      title: "Корпоративные тренинги",
      paragraph1: "- по договоренности",
      paragraph2: "",
    },
  ];

  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState(null);

  const containerDimensions = containerRef.current
    ? containerRef.current.getBoundingClientRect()
    : { width: 0 };

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

  const openModal = (slide) => {
    setSelectedSlide(slide);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePurchase = (text) => {
    const message = encodeURIComponent(`Здравствуйте, я хочу приобрести "${text}".`);
    const whatsappUrl = `https://wa.me/+77783550947/?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="product wrapper">
      <button onClick={handlePrevSlide} className="pre-btn">
        <img src="assets/arrow.png" alt="" />
      </button>
      <button onClick={handleNextSlide} className="nxt-btn">
        <img src="assets/arrow.png" alt="" />
      </button>
      <div className="product-container" ref={containerRef}>
        {slides.map((slide, i) => (
          <div key={i + currentIndex} className="product-card">
            <div className="product-image">
              <img src={slide.image} className="product-thumb" alt="" />
            </div>
            <div className="product-info">
              <h2 className="product-brand">{slide.text}</h2>
              <button onClick={() => openModal(slide)} className="moreBTN">
                Больше
              </button>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal active" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="imgblock">
              <img
                onClick={closeModal}
                height={250}
                src={selectedSlide.image}
                alt={selectedSlide.text}
              />
            </div>
            <div className="infoBlock" onClick={closeModal}>
              <h3>{selectedSlide.text}</h3>
              <p>{selectedSlide.paragraph1}</p>
              <p>{selectedSlide.paragraph2}</p>
              <button onClick={() => handlePurchase(selectedSlide.text)} className="moreBTN">Приобрести</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
