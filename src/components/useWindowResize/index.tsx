import { useLayoutEffect, useState } from "react";

export const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowSize(() => ({
        width: window.innerWidth,
        height: window.innerHeight
      }));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
