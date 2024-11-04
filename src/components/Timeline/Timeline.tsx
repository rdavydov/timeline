import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import { TimelineSection } from "./types";
import { timelineSections } from "./data";
import "./Timeline.scss";

export const Timeline: React.FC = () => {
  // Состояние для отслеживания активного временного отрезка
  const [activeSection, setActiveSection] = useState<number>(0);

  // Ссылки на DOM-элементы для анимации
  const circleRef = useRef<SVGCircleElement>(null);
  const dotsRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (circleRef.current && dotsRef.current) {
      setupCircleAnimation();
    }
  }, [activeSection]);

  // Настройка анимации кругового интерфейса
  const setupCircleAnimation = () => {
    gsap.to(dotsRef.current, {
      rotation: -60 * activeSection,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  // Расчет позиций точек на окружности
  const calculateDotPositions = (totalDots: number) => {
    const radius = 100;
    const angle = 360 / totalDots;
    return Array.from({ length: totalDots }, (_, i) => ({
      x: radius * Math.cos((i * angle - 90) * (Math.PI / 180)),
      y: radius * Math.sin((i * angle - 90) * (Math.PI / 180)),
    }));
  };

  // Функция для обработки навигации по слайдеру
  const handleSlideChange = (index: number) => {
    setActiveSection(index);
  };

  return (
    <div className="timeline">
      <h1 className="timeline__title">Исторические даты</h1>

      <div className="timeline__years">
        <span className="timeline__year timeline__year--start">
          {timelineSections[activeSection].startYear}
        </span>
        <span className="timeline__year timeline__year--end">
          {timelineSections[activeSection].endYear}
        </span>
      </div>

      <div className="timeline__circle">
        <svg viewBox="-120 -120 240 240">
          <circle
            ref={circleRef}
            className="timeline__circle-path"
            r="100"
            fill="none"
          />
          <g ref={dotsRef}>
            {calculateDotPositions(timelineSections.length).map((pos, i) => (
              <circle
                key={i}
                className={`timeline__dot ${
                  i === activeSection ? "timeline__dot--active" : ""
                }`}
                cx={pos.x}
                cy={pos.y}
                r="3"
                onClick={() => handleSlideChange(i)}
              />
            ))}
          </g>
        </svg>
      </div>

      <div className="timeline__slider">
        <Swiper
          slidesPerView={1}
          onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
        >
          {timelineSections.map((section, index) => (
            <SwiperSlide key={index}>
              <div className="timeline__events">
                {section.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="timeline__event">
                    <span className="timeline__event-year">{event.year}</span>
                    <p className="timeline__event-text">{event.text}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
