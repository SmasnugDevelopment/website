"use client";

// Thanks v0 :)

import { useEffect, useRef, useState } from "react";

export default function GridBackground() {
  const [squares, setSquares] = useState<string[]>([]);
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
  const [baseColors, setBaseColors] = useState<number[]>([]);
  const [currentColors, setCurrentColors] = useState<string[]>([]);
  const gridBackground = useRef<HTMLDivElement>(null);

  const generateBrighterGray = (baseValue: number) => {
    const variation = Math.floor(Math.random() * 40) - 20; // -20 to +20 variation
    const newValue = Math.max(0, Math.min(80, baseValue + variation));
    return `rgb(${newValue}, ${newValue}, ${newValue})`;
  };

  const calculateGridSize = () => {
    if (gridBackground.current) {
      const gridBounding = gridBackground.current?.getBoundingClientRect();

      const width = gridBounding.width;
      const height = gridBounding.height;

      // Square size based on screen size
      let squareSize = 60;
      if (width < 640)
        squareSize = 40; // mobile
      else if (width < 1024)
        squareSize = 50; // tablet
      else if (width < 1536)
        squareSize = 60; // desktop
      else squareSize = 80; // large desktop

      const cols = Math.ceil(width / squareSize);
      const rows = Math.ceil(height / squareSize);

      return { cols, rows };
    } else {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Square size based on screen size
      let squareSize = 60;
      if (width < 640)
        squareSize = 40; // mobile
      else if (width < 1024)
        squareSize = 50; // tablet
      else if (width < 1536)
        squareSize = 60; // desktop
      else squareSize = 80; // large desktop

      const cols = Math.ceil(width / squareSize);
      const rows = Math.ceil(height / squareSize);

      return { cols, rows };
    }
  };

  const generateSquares = () => {
    const { cols, rows } = calculateGridSize();
    setGridSize({ cols, rows });

    const totalSquares = cols * rows;
    const newBaseColors = Array.from({ length: totalSquares }, () =>
      Math.floor(Math.random() * 30),
    );
    const newSquares = newBaseColors.map(
      (value) => `rgb(${value}, ${value}, ${value})`,
    );

    setBaseColors(newBaseColors);
    setSquares(newSquares);
    setCurrentColors(newSquares);
  };

  useEffect(() => {
    generateSquares();

    const handleResize = () => {
      generateSquares();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (baseColors.length === 0) return;

    const animateSquares = () => {
      setCurrentColors((prevColors) =>
        prevColors.map((_, index) => {
          // Only animate random squares (about 10% each cycle)
          if (Math.random() < 0.1) {
            return generateBrighterGray(baseColors[index]);
          }
          return prevColors[index];
        }),
      );
    };

    const interval = setInterval(animateSquares, 200); // Update every 200ms
    return () => clearInterval(interval);
  }, [baseColors]);

  return (
    <div
      className="fixed inset-0 w-full h-[50%] overflow-hidden -z-10"
      ref={gridBackground}
    >
      <div
        className="w-full h-full grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        }}
      >
        {currentColors.map((color, index) => (
          <div
            key={index}
            className="w-full h-full transition-colors duration-200 hover:opacity-80"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  );
}
