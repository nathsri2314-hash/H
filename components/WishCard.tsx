
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
      className={`group w-full max-w-lg ${cardClasses} p-1 rounded-2xl bg-gradient-to-br from-rose-200 via-white to-rose-200 shadow-xl shadow-rose-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-rose-300/60 hover:-translate-y-2`}
      style={{ transitionDelay: `${animationDelay}s` }}
    >
      <div className="bg-rose-50/80 backdrop-blur-lg rounded-[15px] p-6 sm:p-8 h-full w-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-pink-500/10 p-3 rounded-full group-hover:scale-110 group-hover:rotate-[-10deg] transition-transform duration-300">
            {icon}
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-800">{title}</h3>
        </div>
        <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default WishCard;