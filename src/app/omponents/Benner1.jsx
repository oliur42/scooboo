'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

const products = [
  {
    title: 'Zebra DelGuard Mechanical Pencil – 0.5mm',
    price: 395,
    rating: 5,
    colors: ['black', 'blue'],
    image: 'https://scooboo.in/cdn/shop/files/ZebraDelGuard0.5mmMechanicalPencil_1.jpg?v=1745240072&width=1125',
  },
  {
    title: 'Zebra Sarasa 4 Color Multi Gel Pen – 0.5mm',
    price: 395,
    rating: 8,
    colors: ['black', 'red'],
    image: 'https://scooboo.in/cdn/shop/files/Artboard1_577062e6-159c-4926-8630-1e0d64cc3b1f.jpg?v=1745325039&width=1125',
  },
  {
    title: 'Zebra Sarasa Dry Gel Pen',
    price: 175,
    rating: 5,
    colors: ['blue'],
    image: 'https://scooboo.in/cdn/shop/files/ZebraSarasaDryGelPen_1.jpg?v=1745058721&width=1125',
  },
  {
    title: 'Zebra bLen Ball Pen x5',
    price: 875,
    rating: 6,
    colors: ['blue', 'black', 'red'],
    image: 'https://scooboo.in/cdn/shop/files/ZebrabLen3C3ColorBallpointPen_4.jpg?v=1745315814&width=1125',
  },
];

export default function Benner1() {
  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-[1300px] mx-auto px-4 flex flex-col lg:flex-row gap-6">
        {/* Left Banner */}
        <div className="w-full lg:w-[300px]">
          <Image
            src="https://scooboo.in/cdn/shop/files/Zebra-main-exclusive-banner.jpg?v=1745383448&width=1125" 
            alt="Zebra Banner"
            width={300}
            height={300}
            className=" object-cover"
          />
          <div className='bg-gray-800 h-[75px]'>
            <div className='flex justify-center items-center'>
                <button className=' text-center bg-amber-700 text-white px-20 py-2 rounded-2xl mt-4 hover:bg-amber-500/60'>Explore Now</button>
            </div>
          </div>
        </div>

        {/* Right Product Grid */}
        <div className="flex-1 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Zebra</h2>
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <div key={index} className="border rounded-md p-2 hover:shadow-md transition">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={250}
                  height={150}
                  className="mx-auto   h-[100px] object-contain"
                />
                <p className="text-sm text-gray-800 mt-2">Zebra</p>
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <div className="flex items-center text-yellow-500 text-xs my-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar key={i} className={i < product.rating ? '' : 'text-gray-300'} />
                  ))}
                  <span className="ml-1 text-gray-500">({product.rating})</span>
                </div>
                <p className="font-semibold">Rs. {product.price}.00</p>
                <div className="flex gap-2 mt-1">
                  {product.colors.map((color, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full border-2 border-white shadow-md`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
