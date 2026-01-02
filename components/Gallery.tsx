
import React, { useState } from 'react';
import Modal from './Modal';

const images = [
  'https://picsum.photos/id/1015/500/500',
  'https://picsum.photos/id/1016/500/500',
  'https://picsum.photos/id/1018/500/500',
  'https://picsum.photos/id/1025/500/500',
  'https://picsum.photos/id/10/500/500',
  'https://picsum.photos/id/20/500/500',
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const showPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="w-full max-w-4xl text-center">
      <h2 className="font-great-vibes text-5xl md:text-7xl text-pink-500 mb-8">A Few Memories ✨</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg group" onClick={() => openModal(index)}>
            <img
              src={src}
              alt={`Memory ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      {selectedImage !== null && (
        <Modal
          src={images[selectedImage]}
          onClose={closeModal}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </div>
  );
};

export default Gallery;
