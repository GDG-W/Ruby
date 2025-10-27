import type { RefObject } from "react";
import { useEffect, useRef } from "react";

interface UseIntersectionObserverOptions extends IntersectionObserverInit {
  once?: boolean;
  onEnter?: (entry: IntersectionObserverEntry) => void;
  onExit?: (entry: IntersectionObserverEntry) => void;
}

export function useIntersectionObserver(
  ref: RefObject<HTMLElement | null>,
  options?: UseIntersectionObserverOptions,
) {
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Call onEnter callback
          options?.onEnter?.(entry);

          // If once is true, disconnect after first trigger
          if (options?.once) {
            hasTriggeredRef.current = true;
            observer.disconnect();
          }
        } else {
          // Call onExit callback
          options?.onExit?.(entry);
        }
      },
      {
        threshold: options?.threshold ?? 0.1,
        root: options?.root,
        rootMargin: options?.rootMargin,
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);
}
