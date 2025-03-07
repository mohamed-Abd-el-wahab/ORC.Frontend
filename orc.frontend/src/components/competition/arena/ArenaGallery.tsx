import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArenaImage } from './types';
import GalleryImage from './GalleryImage';
import GalleryThumbnails from './GalleryThumbnails';

const images: ArenaImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Arena exterior at sunset",
    description: "Main entrance facade with modern architectural lighting"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1572944549084-d6bd2c98bc45?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Aerial view of arena",
    description: "Panoramic aerial view showing the complete facility"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Arena interior bowl",
    description: "Upper level view of the seating bowl and competition floor"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000&h=1000",
    alt: "Arena floor level",
    description: "Competition surface with state-of-the-art lighting system"
  }
];

const ArenaGallery = () => {
  const [currentImage, setCurrentImage] = React.useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">ARENA GALLERY</h2>
        
        <div className="relative">
          {/* Main Image */}
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
            <GalleryImage image={images[currentImage]} />
            
            {/* Navigation Buttons */}
            <button
              onClick={previousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Thumbnails */}
          <GalleryThumbnails
            images={images}
            currentImage={currentImage}
            onSelect={setCurrentImage}
          />
        </div>
      </div>
    </section>
  );
};

export default ArenaGallery;