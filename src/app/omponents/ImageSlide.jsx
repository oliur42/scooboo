'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

const images = [
    'https://afrotouch.design/cdn/shop/articles/AfroTouch_Design_-_Blog_Posts_3.png?v=1597906525&width=1200',
    'https://media.istockphoto.com/id/485725200/photo/school-and-office-accessories-on-wooden-background.jpg?s=612x612&w=0&k=20&c=PWgiIA-7_QDC_PXnEhwZqDLDDzrNMIxxJjBeD4h4oLM=',
    'https://img.freepik.com/free-vector/back-school-supplies-frame_1308-172709.jpg?semt=ais_hybrid&w=740&q=80',
    'https://e7.pngegg.com/pngimages/366/232/png-clipart-school-supplies-illustration-paper-stationery-graphic-design-pencil-books-stationery-posters-comic-book-rectangle.png',
    'https://static.vecteezy.com/system/resources/previews/035/951/439/non_2x/school-stationery-kit-arts-back-to-school-stationery-items-for-students-simple-icon-design-vector.jpg',
];

export default function ImageSlide() {
    return (
        <div className="w-full flex justify-center py-4">
            <div className="w-full h-[600px]">
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
                        <div key={index} className="relative w-full h-[500px]">
                            <Image
                                src={src}
                                alt={`Cover ${index + 1}`}
                                fill
                                className="object-fill "
                                priority={index === 0}
                                quality={100}

                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
