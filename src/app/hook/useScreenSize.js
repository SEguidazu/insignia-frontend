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

  const isXSscreen = width < 640;
  const isSMscreen = width >= 640;
  const isMDscreen = width >= 768;
  const isLGscreen = width >= 1024;
  const isXLscreen = width >= 1280;

  return { isXSscreen, isSMscreen, isMDscreen, isLGscreen, isXLscreen };
};

export default useScreenDetector;
