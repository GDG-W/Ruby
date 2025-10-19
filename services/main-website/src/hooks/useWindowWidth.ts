import { useEffect, useMemo, useState } from "react";

const debounce = (callback: (...args: any[]) => any, wait: number) => {
  let timeoutId: number | undefined
  return (...args: any[]) => {
      window.clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => {
          callback(...args)
      }, wait)
  }
}

export function useWindowWidth() {
  const [width, setWidth] = useState(0);

  const handleResize = useMemo(
    () =>
        debounce(() => {
          setWidth(window.innerWidth)
        }, 250),
    []
)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      handleResize()
      
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [handleResize]);

  return width;
}
