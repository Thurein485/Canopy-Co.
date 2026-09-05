import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix = "" }) {
  const [value, setValue] = useState(0);
  const elementRef = useRef(null);
  const decimals = Number.isInteger(target) ? 0 : `${target}`.split(".")[1]?.length ?? 0;

  useEffect(() => {
    const node = elementRef.current;
    if (!node) {
      return;
    }

    let animationFrame = 0;
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) {
            return;
          }

          started = true;
          const startTime = performance.now();
          const duration = 1500;

          const tick = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const nextValue = target * eased;
            setValue(decimals ? Number(nextValue.toFixed(decimals)) : Math.round(nextValue));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(tick);
            }
          };

          animationFrame = requestAnimationFrame(tick);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [decimals, target]);

  return (
    <span ref={elementRef}>
      {value}
      {suffix}
    </span>
  );
}

export default CountUp;
