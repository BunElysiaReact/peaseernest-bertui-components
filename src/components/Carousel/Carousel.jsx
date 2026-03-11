import { useState, useEffect, useCallback } from 'react';
import '../../styles/bertui-components.css';

export function CarouselImage({ src, alt = '' }) {
  return <img src={src} alt={alt} className="bertui-carousel-img" />;
}

export function CarouselSlide({ children }) {
  return <div className="bertui-carousel-slide">{children}</div>;
}

export function Carousel({
  children,
  items,
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
}) {
  const slides = items
    ? items.map((src, i) => <CarouselImage key={i} src={src} />)
    : Array.isArray(children) ? children : [children];

  const [current, setCurrent] = useState(0);
  const count = slides.length;

  const prev = useCallback(() => setCurrent(c => (c - 1 + count) % count), [count]);
  const next = useCallback(() => setCurrent(c => (c + 1) % count), [count]);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, next]);

  return (
    <div className="bertui-carousel">
      <div className="bertui-carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((slide, i) => (
          <div className="bertui-carousel-slide" key={i}>
            {slide}
          </div>
        ))}
      </div>

      {showArrows && count > 1 && (
        <>
          <button className="bertui-carousel-btn bertui-carousel-btn--prev" onClick={prev} aria-label="Previous">&#8592;</button>
          <button className="bertui-carousel-btn bertui-carousel-btn--next" onClick={next} aria-label="Next">&#8594;</button>
        </>
      )}

      {showDots && count > 1 && (
        <div className="bertui-carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={['bertui-carousel-dot', i === current ? 'bertui-carousel-dot--active' : ''].join(' ')}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
