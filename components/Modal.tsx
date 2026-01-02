
import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ModalProps {
  src: string;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Modal: React.FC<ModalProps> = ({ src, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt="Enlarged view" className="max-w-full max-h-[90vh] rounded-lg" />
        <button
          className="absolute top-2 right-2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={28} />
        </button>
        <button
          className="absolute top-1/2 left-2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
          onClick={onPrev}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          className="absolute top-1/2 right-2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors"
          onClick={onNext}
          aria-label="Next image"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
};

export default Modal;
