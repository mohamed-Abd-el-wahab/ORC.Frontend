import React from 'react';
import { ArenaImage } from './types';

interface GalleryImageProps {
  image: ArenaImage;
}

const GalleryImage = ({ image }: GalleryImageProps) => {
  return (
    <>
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <p className="text-white text-lg">{image.description}</p>
      </div>
    </>
  );
};

export default GalleryImage;