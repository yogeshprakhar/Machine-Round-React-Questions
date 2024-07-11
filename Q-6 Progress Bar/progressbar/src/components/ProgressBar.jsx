import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [bar, setBar] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBar((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          
        }
        return Math.min(prev+5, 100);
      });
    }, 150);
    return () => {
        clearInterval(interval)
    }
  }, []);

  return (
    <div className="container">
      <div
        style={{ transform: `translateX(${bar - 100}%)` }}
        className="progress"
      ></div>
    </div>
  );
};

export default ProgressBar;
