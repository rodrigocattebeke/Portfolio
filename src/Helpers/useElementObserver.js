import { useState } from "react";

export function useElementObserver(element = null, options = { threshold: 0.5 }) {
  const [isVisible, setIsVisible] = useState(false);
  if (!element) {
    console.warn("Se necesita un target");
    return { isVisible: false };
  }

  const callback = (entries) => {
    entries.forEach((entry) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.disconnect();
    });
  };

  const observer = new IntersectionObserver(callback, options);

  observer.observe(element);

  return { isVisible };
}
