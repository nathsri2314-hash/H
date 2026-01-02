
import React from 'react';

const Candle: React.FC<{ x: number; y: number; delay: string }> = ({ x, y, delay }) => (
  <g>
    <rect x={x} y={y} width="10" height="40" fill="#f8b400" rx="3" />
    <path
      d={`M${x+5},${y-2} q0,-5 2,-7 q-2,2 -2,7`}
      fill="#ffdd59"
      className="animate-candle-flicker"
      style={{ animationDelay: delay }}
    />
  </g>
);

const BirthdayCake: React.FC = () => {
  return (
    <div className="flex justify-center my-8">
      <svg viewBox="0 0 200 200" width="200" height="200">
        {/* Candles */}
        <Candle x={55} y={30} delay="0s" />
        <Candle x={85} y={30} delay="0.2s" />
        <Candle x={115} y={30} delay="0.1s" />
        <Candle x={145} y={30} delay="0.3s" />
        
        {/* Cake Layers */}
        <rect x="20" y="70" width="160" height="50" fill="#fecdd3" rx="10" />
        <rect x="20" y="80" width="160" height="10" fill="#ffffff" opacity="0.8" />
        
        <rect x="25" y="120" width="150" height="50" fill="#e9d5ff" rx="10" />
        <rect x="25" y="130" width="150" height="10" fill="#ffffff" opacity="0.8" />

        {/* Plate */}
        <ellipse cx="100" cy="175" rx="90" ry="15" fill="#fce7f3" />
      </svg>
    </div>
  );
};

export default BirthdayCake;
