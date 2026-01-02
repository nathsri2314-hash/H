
import React from 'react';
import Balloon from './Balloon';

const Confetti: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
  <div className="absolute animate-fall" style={style}></div>
);

const Heart: React.FC<{ style: React.CSSProperties; color: string }> = ({ style, color }) => (
  <svg
    className="absolute animate-fall"
    style={style}
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </svg>
);

const Cake: React.FC<{ style: React.CSSProperties }> = ({ style }) => (
    <svg
      className="absolute animate-fall"
      style={style}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 30 Q 50 10, 90 30 L 90 40 L 10 40 Z" fill="#F472B6" />
      <path d="M10 40 L 90 40 L 80 80 L 20 80 Z" fill="#FBCFE8" />
      <circle cx="50" cy="20" r="8" fill="#DC2626" />
      <path d="M50 20 Q 60 10, 65 5" stroke="#4D7C0F" strokeWidth="3" fill="none" />
    </svg>
  );


const AnimatedBackground: React.FC = () => {
  const pastelColors = ['#fbcfe8', '#fecdd3', '#ddd6fe', '#fef3c7', '#fce7f3'];
  const numBalloons = 12;
  const numShapes = 70;

  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      {Array.from({ length: numBalloons }).map((_, index) => (
        <Balloon key={`balloon-${index}`} color={pastelColors[index % pastelColors.length]} />
      ))}
      {Array.from({ length: numShapes }).map((_, i) => {
        const size = Math.random() * 20 + 10;
        const commonStyle = {
          top: `${Math.random() * -10}vh`,
          left: `${Math.random() * 100}vw`,
          width: `${size}px`,
          height: `${size}px`,
          animationDuration: `${Math.random() * 7 + 6}s`,
          animationDelay: `${Math.random() * 7}s`,
        };
        
        const shapeType = i % 3;
        if (shapeType === 0) {
            return <Confetti key={`confetti-${i}`} style={{...commonStyle, backgroundColor: pastelColors[i % pastelColors.length], transform: `rotate(${Math.random() * 360}deg)`}} />
        } else if (shapeType === 1) {
            return <Heart key={`heart-${i}`} style={commonStyle} color={pastelColors[i % pastelColors.length]}/>;
        } else {
            return <Cake key={`cake-${i}`} style={commonStyle} />;
        }
      })}
    </div>
  );
};

export default AnimatedBackground;
