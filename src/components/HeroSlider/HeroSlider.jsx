import { useState, useEffect } from "react";
import "./HeroSlider.css";

const slides = [
{
id: 1,
tag: "WELCOME TO SURYA TRUST",
title: "Empowering Communities Through Education",
description:
"Supporting students and families with education, healthcare and social welfare programs.",
image:
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
},
{
id: 2,
tag: "WELCOME TO SURYA TRUST",
title: "Healthcare For Everyone",
description:
"Providing medical awareness and support for underserved communities.",
image:
"https://images.unsplash.com/photo-1576091160550-2173dba999ef",
},
];

function HeroSlider() {
const [current, setCurrent] = useState(0);

// Auto Slide Every 5 Seconds
useEffect(() => {
const slider = setInterval(() => {
setCurrent((prev) => (prev + 1) % slides.length);
}, 5000);


return () => clearInterval(slider);


}, [current]);

const nextSlide = () => {
setCurrent((prev) => (prev + 1) % slides.length);
};

const prevSlide = () => {
setCurrent(
(prev) => (prev - 1 + slides.length) % slides.length
);
};

return ( <section className="hero-slider"> <div className="container hero-wrapper">
{/* Left Content */} <div className="hero-content"> <button className="primary-btn hero-tag">
{slides[current].tag} </button>


      <h1>{slides[current].title}</h1>

      <p>{slides[current].description}</p>

      <div className="hero-btn-wrapper">
        <button className="primary-btn">
          TALK WITH US
        </button>
      </div>

      {/* Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={
              current === index ? "active" : ""
            }
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-wrapper">
        {slides.map((item, index) => (
          <img
            key={item.id}
            src={item.image}
            alt={`thumbnail-${item.id}`}
            className={
              current === index
                ? "active-thumb"
                : ""
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className="hero-image">
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="hero-main-image"
      />

      <button
        className="nav-btn prev"
        onClick={prevSlide}
      >
        ❮
      </button>

      <button
        className="nav-btn next"
        onClick={nextSlide}
      >
        ❯
      </button>
    </div>
  </div>
</section>


);
}

export default HeroSlider;
