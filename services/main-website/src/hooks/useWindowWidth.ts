import { useEffect, useMemo, useState } from "react";

const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  wait: number,
) => {
  let timeoutId: number | undefined;
  return (...args: T) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  const handleResize = useMemo(
    () =>
      debounce(() => {
        setWidth(window.innerWidth);
      }, 250),
    [],
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  return width;
}
