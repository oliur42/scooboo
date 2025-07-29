'use client';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const images = [
  "https://scooboo.in/cdn/shop/files/Untitled_design_6_e66bbe1a-aba0-449b-8959-7595bbfc5569.png?v=1751868656&width=1750",
  "https://scooboo.in/cdn/shop/files/Untitled_design_4_701acb0a-2e9d-48b2-bde8-cf5e12d58096.png?v=1751868655&width=1750",
  "https://scooboo.in/cdn/shop/files/Untitled_design_3_d37f6561-dc53-41ee-b6b8-fbf3198efcae.png?v=1751868655&width=1750",
  "https://scooboo.in/cdn/shop/files/Untitled_design_2_0f98ca54-d173-46e1-b550-cf6fcb0f6d6a.png?v=1751868655&width=1750"
];

export default function ImageSlide() {
  return (
    <div className="w-full flex justify-center py-6">
      <div className="w-full ">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
          transitionTime={600}
          stopOnHover
          emulateTouch
          showArrows={true}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full 
                h-[200px] sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[450px]"
            >
              <Image
                src={src}
                alt={`Cover ${index + 1}`}
                fill
                className="object-fill "
                priority={index === 0}
                quality={100}
                sizes="(max-width: 640px) 100vw,
                       (max-width: 768px) 100vw,
                       (max-width: 1024px) 100vw,
                       100vw"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
