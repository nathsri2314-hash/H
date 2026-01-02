
import React, { useMemo } from 'react';

interface BalloonProps {
  color: string;
}

const Balloon: React.FC<BalloonProps> = ({ color }) => {
  const styles = useMemo(() => {
    const size = Math.random() * (100 - 50) + 50;
    const left = Math.random() * 100;
    const duration = Math.random() * (25 - 15) + 15;
    const delay = Math.random() * 10;

    return {
      width: `${size}px`,
      height: `${size * 1.2}px`,
      left: `${left}%`,
      animationDuration: `${duration}s`,
      animationDelay: `${delay}s`,
      backgroundColor: color,
    };
  }, [color]);

  return (
    <div
      className="absolute bottom-[-150px] rounded-full animate-float"
      style={styles}
    >
      <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-t-[10px] border-t-current border-r-[6px] border-r-transparent" style={{ color }}></div>
    </div>
  );
};

export default Balloon;
