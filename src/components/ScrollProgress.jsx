import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setProgress(Math.min(nextProgress, 100));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="scroll-progress">
      <span style={{ width: `${progress}%` }}></span>
    </div>
  );
}

export default ScrollProgress;
