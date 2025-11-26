import { useState, useMemo } from "react";

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const allCategories = ["Zouk", "Salsa", "West Coast Swing", "Bachata", "Lindy Hop", "Kiz", "Blues"];

export const AnimatedCategoryTitle = () => {
  const categories = useMemo(() => shuffleArray(allCategories), []);
  const [isHovering, setIsHovering] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsHovering(true);
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % categories.length;
      setCurrentIndex(index);
    }, 400);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsHovering(false);
      setCurrentIndex(0);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  };

  return (
    <h1 className="text-2xl font-semibold text-foreground inline-flex items-center gap-0.5">
      <span
        className="font-trade-winds inline-block overflow-hidden relative cursor-pointer h-[1.2em] align-middle"
        onMouseEnter={handleMouseEnter}
        style={{ minWidth: "200px" }}
      >
        <span
          className="inline-block transition-transform duration-300 ease-in-out will-change-transform"
          style={{
            transform: `translateY(-${currentIndex * 1.2}em)`,
          }}
        >
          {categories.map((cat, idx) => (
            <span
              key={idx}
              className="block h-[1.2em] leading-[1.2em]"
            >
              {cat}
            </span>
          ))}
        </span>
      </span>
      Recaps
    </h1>
  );
};
