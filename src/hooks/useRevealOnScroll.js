import { useEffect } from "react";

function useRevealOnScroll(trigger) {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    items.forEach((item, index) => {
      item.style.transitionDelay = `${Math.min(index * 55, 360)}ms`;
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, [trigger]);
}

export default useRevealOnScroll;
