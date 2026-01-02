
import React, { useEffect, useRef, useState } from 'react';

interface WishCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  animationDelay?: number;
}

const useOnScreen = <T extends Element,>(options: IntersectionObserverInit): [React.RefObject<T>, boolean] => {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return [ref, isVisible];
};

const WishCard: React.FC<WishCardProps> = ({ icon, title, description, animationDelay = 0 }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({
    threshold: 0.3,
  });

  const cardClasses = `
    transition-all duration-1000 transform
    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
  `;
  
  return (
    <div
      ref={ref}
      className={`bg-white/50 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-lg border border-pink-200/80 ${cardClasses} hover:border-pink-400 hover:shadow-2xl hover:shadow-pink-500/10 transition-all`}
      style={{ transitionDelay: `${animationDelay}s` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-pink-500/10 p-3 rounded-full">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default WishCard;
