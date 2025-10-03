import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

// Detects if device primarily uses touch (mobile) vs mouse (desktop/laptop)
export function useIsTouchDevice() {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const updateTouchStatus = () => {
      setIsTouch(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          // @ts-ignore
          navigator.msMaxTouchPoints > 0,
      );
    };

    updateTouchStatus();

    window.addEventListener("pointermediachange", updateTouchStatus);
    window.addEventListener("touchstart", updateTouchStatus, { once: true });
    window.addEventListener("mousemove", updateTouchStatus, { once: true });

    return () => {
      window.removeEventListener("pointermediachange", updateTouchStatus);
      window.removeEventListener("touchstart", updateTouchStatus);
      window.removeEventListener("mousemove", updateTouchStatus);
    };
  }, []);

  return isTouch;
}

// Better: Detects actual interaction preference
export function useInteractionPreference() {
  const [prefersTouch, setPrefersTouch] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = (e: Event) => {
      if (e.type === "touchstart") setPrefersTouch(true);
      else if (e.type === "mousemove") setPrefersTouch(false);

      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("mousemove", handleFirstInteraction);
    };

    window.addEventListener("touchstart", handleFirstInteraction, {
      once: true,
    });
    window.addEventListener("mousemove", handleFirstInteraction, {
      once: true,
    });

    return () => {
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("mousemove", handleFirstInteraction);
    };
  }, []);

  return prefersTouch;
}
