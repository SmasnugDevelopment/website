"use client";

import { useEffect, useState, useRef } from "react";

interface NavbarScrollProps {
  children: React.ReactNode;
}

const NavbarScroll = ({ children }: NavbarScrollProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled from top
      if (currentScrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down and past threshold
        setIsVisible(false);
      } else {
        // Scrolling up or at the top
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`p-4 flex justify-center sticky top-0 transition-all duration-300 ${
        isScrolled ? "bg-background shadow-sm" : ""
      } ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {children}
    </section>
  );
};

export { NavbarScroll };