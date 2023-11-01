import React, { useState, useEffect } from "react";
import "./carrousel.css";

function Carrousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState("next");
  const totalItems = 3;

  const goToNextSlide = () => {
    if (!isPaused) {
      setDirection("next");
      setActiveSlide((prevSlide) => (prevSlide + 1) % totalItems);
    }
  };

  const goToPrevSlide = () => {
    setDirection("prev");
    setActiveSlide((prevSlide) => (prevSlide - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const slideInterval = setInterval(goToNextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [isPaused]);


  return (
    <div className="container mt-5 carrou">
      <div id="myCarousel" className="carousel slide">
        <ol className="carousel-indicators">
          {[...Array(totalItems)].map((_, idx) => (
            <li
              key={idx}
              className={idx === activeSlide ? "active" : ""}
              onClick={() => setActiveSlide(idx)}
            ></li>
          ))}
        </ol>

        <div className="carousel-inner" onMouseEnter={() => {setHoveredSlide(activeSlide); setIsPaused(true);}} onMouseLeave={() => {setHoveredSlide(null); setIsPaused(false);}}>
          {[
            {
              src: "https://stillmed.olympics.com/media/Images/OlympicOrg/News/2019/02/21/2019-02-21-paris-2024-sports-thumbnail.jpg",
              alt: "Image 1",
              description: "Description 1"
            },
            {
              src: "https://district93foot.fff.fr/wp-content/uploads/sites/98/2023/01/879x555_FFF_MATCHDAY_FRA-GRC-611x378.jpg",
              alt: "Image 2",
              description: "Description 2"
            },
            {
              src: "https://www.sportbuzzbusiness.fr/wp-content/uploads/2023/10/NBA-Paris-Game-2024-en-clair-diffusion-TV-CANAL.png",
              alt: "Image 3",
              description: "Description 3"
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`carousel-item ${idx === activeSlide ? "active" : ""}`}
              onMouseEnter={() => setHoveredSlide(idx)}
              onMouseLeave={() => setHoveredSlide(null)}
            >
              <img src={item.src} alt={item.alt} className="d-block w-100" />
              <div className={`carousel-caption ${idx === hoveredSlide ? "show-description" : ""}`}>
                <h3>{item.alt}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <a className="carousel-control-prev" onClick={() => setActiveSlide((prevSlide) => (prevSlide - 1 + totalItems) % totalItems)}>
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" onClick={goToNextSlide}>
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  );
}

export default Carrousel;
