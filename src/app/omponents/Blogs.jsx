import Image from 'next/image';
import React from 'react';

function Blogs() {
  const blogData = [
    {
      title: 'Top 5 Pilot Pens That Make Writing a Joy',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio eligendi perferendis voluptate.',
      date: 'August 3, 2025',
      image:
        'https://cdn.shopify.com/s/files/1/0260/9384/6583/files/Top_5_Pilot_Pens_That_Make_Writing_a_Joy.png?v=1751953027',
    },
    // Duplicate entries for demo (you can change them)
    {
      title: 'Top 5 Pilot Pens That Make Writing a Joy',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio eligendi perferendis voluptate.',
      date: 'August 3, 2025',
      image:
        'https://cdn.shopify.com/s/files/1/0260/9384/6583/files/Top_Bestselling_Products_on_Scooboo_Right_Now.png?v=1751952932',
    },
    {
      title: 'Top 5 Pilot Pens That Make Writing a Joy',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio eligendi perferendis voluptate.',
      date: 'August 3, 2025',
      image:
        'https://cdn.shopify.com/s/files/1/0260/9384/6583/files/Waterman_Writing_That_Makes_a_Statement.jpg?v=1750506517',
    },
    {
      title: 'Top 5 Pilot Pens That Make Writing a Joy',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odio eligendi perferendis voluptate.',
      date: 'August 3, 2025',
      image:
        'https://cdn.shopify.com/s/files/1/0260/9384/6583/files/The_Ultimate_Guide_to_Geometry_Boxes_Tools_for_Success.jpg?v=1750506470',
    },
  ];

  return (
    <div className='py-10'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {blogData.map((blog, index) => (
            <button
              key={index}
              className='text-left group bg-white border border-gray-200 rounded-lg p-3 transition-all hover:shadow-xl w-full'
            >
              <div className='overflow-hidden rounded-lg'>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className='w-full h-[200px] object-fill transition-transform duration-300 group-hover:scale-105'
                />
              </div>
              <h2 className='text-lg font-semibold mt-3 text-gray-800'>{blog.title}</h2>
              <p className='text-sm text-gray-600 mt-1'>{blog.description}</p>
              <p className='text-xs text-gray-500 mt-2'>{blog.date}</p>
            </button>
          ))}
        </div>
      </div>
      <div className="py-10">
  <Image
    src="https://scooboo.in/cdn/shop/files/fav_banner-wide.gif?v=1721629002&width=1750"
    height={600}
    width={300}
    alt="logo"
    className="
      mx-auto 
      w-full 
      sm:h-[200px] 
      md:h-[250px] 
      lg:h-[300px] 
      xl:h-[350px] 
      2xl:h-[500px] 
      object-cover
    "
  />
</div>


    </div>
  );
}

export default Blogs;
