
import React, { useMemo } from 'react';

const Sparkle: React.FC<{ top?: string; left?: string; right?: string; bottom?: string; size?: number; }> = ({ top, left, right, bottom, size = 15 }) => {
    const style = useMemo(() => {
        const animationDuration = Math.random() * 2 + 1.5; // 1.5s to 3.5s
        const animationDelay = Math.random() * 3; // 0s to 3s
        return {
            top,
            left,
            right,
            bottom,
            width: `${size}px`,
            height: `${size}px`,
            animationDuration: `${animationDuration}s`,
            animationDelay: `${animationDelay}s`,
            zIndex: 5,
        };
    }, [top, left, right, bottom, size]);

    return (
        <svg
            className="absolute animate-twinkle text-pink-300"
            fill="currentColor"
            viewBox="0 0 24 24"
            style={style}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M12 2l2.35 7.16h7.53l-6.09 4.42 2.35 7.16-6.14-4.42-6.14 4.42 2.35-7.16-6.09-4.42h7.53z" />
        </svg>
    );
};

export default Sparkle;
