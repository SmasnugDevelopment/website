"use client";

// Thanks v0 :)

import { useEffect, useRef, useState } from "react";

export default function GridBackground({
  generationMultiplier = 40,
  generationAdd = 20,
  className = "fixed w-full h-full inset-0 overflow-hidden -z-10",
  cellSize = 60,
  animationInterval = 100,
}) {
  const [squares, setSquares] = useState<string[]>([]);
  const [gridSize, setGridSize] = useState({ cols: 0, rows: 0 });
  const [baseColors, setBaseColors] = useState<number[]>([]);
  const [currentColors, setCurrentColors] = useState<string[]>([]);
  const gridBackground = useRef<HTMLDivElement>(null);

  const generateColor = () => {
    const value =
      Math.floor(Math.random() * generationMultiplier) + generationAdd;
    return `rgb(${value}, ${value}, ${value})`;
  };

  const calculateGridSize = () => {
    if (gridBackground.current) {
      const gridBounding = gridBackground.current?.getBoundingClientRect();

      const width = gridBounding.width;
      const height = gridBounding.height;

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      return { cols, rows };
    } else {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      return { cols, rows };
    }
  };

  const generateSquares = () => {
    const { cols, rows } = calculateGridSize();
    setGridSize({ cols, rows });

    const totalSquares = cols * rows;
    const defaultColor = "rgb(0, 0, 0)";
    const newSquares = Array(totalSquares).fill(defaultColor);

    setBaseColors(Array(totalSquares).fill(0));
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
            return generateColor();
          }
          return prevColors[index];
        }),
      );
    };

    const interval = setInterval(animateSquares, animationInterval); // Update every 200ms
    return () => clearInterval(interval);
  }, [baseColors]);

  return (
    <div className={className} ref={gridBackground}>
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
