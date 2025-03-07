import React from 'react';
import { ArenaImage } from './types';

interface GalleryThumbnailsProps {
  images: ArenaImage[];
  currentImage: number;
  onSelect: (index: number) => void;
}

const GalleryThumbnails = ({ images, currentImage, onSelect }: GalleryThumbnailsProps) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-4">
      {images.map((image, index) => (
        <button
          key={image.id}
          onClick={() => onSelect(index)}
          className={`relative aspect-[2/1] overflow-hidden rounded-lg ${
            currentImage === index ? 'ring-2 ring-blue-500' : ''
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-black/50 ${
            currentImage === index ? 'bg-opacity-0' : ''
          }`} />
        </button>
      ))}
    </div>
  );
};

export default GalleryThumbnails;