"use client";

import { useEffect, useState } from "react";

const useScreenDetector = () => {
  const [width, setWidth] = useState(1024);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    setWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  const isTablet = width < 1024;
  const isDesktop = width >= 1024;

  return { isMobile, isTablet, isDesktop };
};

export default useScreenDetector;