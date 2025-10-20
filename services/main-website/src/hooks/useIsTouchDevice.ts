import { useEffect, useState } from "react";

export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const handleTouch = () => {
      if (!isTouch) {
        setIsTouch(true);
        window.addEventListener("mousemove", handleMouse, { once: true });
      }
    };

    const handleMouse = () => {
      if (isTouch) {
        setIsTouch(false);
        window.addEventListener("touchstart", handleTouch, { once: true });
      }
    };

    window.addEventListener("touchstart", handleTouch, { once: true });
    window.addEventListener("mousemove", handleMouse, { once: true });

    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [isTouch]);

  return isTouch;
}
