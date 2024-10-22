import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Define the type for image props
export interface Image {
  src: string;
  alt: string;
}

// Define the type for component props
interface ImageCarouselProps {
  images: Image[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={3000}  // Slides change every 3 seconds
        showStatus={false}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image.src} alt={image.alt} className="carousel-image" />
          </div>
        ))}
      </Carousel>
  );
};

export default ImageCarousel;
