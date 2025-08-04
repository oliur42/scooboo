import Image from 'next/image'
import React from 'react'

function Benner4() {
    const pictures = [
        {
            image: "https://scooboo.in/cdn/shop/files/CI-watercolor.webp?v=1721048270&width=400",
            titel: "CI-watercolor"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/acrylic-colors-162689.webp?v=1721047577&width=400",
            titel: "acrylic-colors"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/coloured-pencils-745798.webp?v=1721047738&width=400",
            titel: "coloured-pencils"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/ci-sketch_pencil_dcdf6e88-94a6-4c34-b8dc-02c9a10cd9c6.webp?v=1721048386&width=400",
            titel: "ci-sketch_pencil"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/charcoal-pencils-844992.webp?v=1721047699&width=400",
            titel: "charcoal-pencils"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/brush-pens-611929.webp?v=1721047542&width=400",
            titel: "brush-pens"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/fineliners-191999.webp?v=1721047846&width=400",
            titel: "Journals"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/Oil_Pastels_c3aa99bf-3796-4659-94af-d09f9163d50b.webp?v=1721214217&width=400",
            titel: "Oil_Pastels"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-brush.jpg?v=1715847624&width=400",
            titel: "CI-brush"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-sketching_1.jpg?v=1715848113&width=400",
            titel: "CI-sketching_"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-mandala_coloring.jpg?v=1715847562&width=400",
            titel: "CI-mandala"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/Masking_Decoration_Tapes.jpg?v=1715847666&width=400",
            titel: "Masking_Decoration"
        }
    ]
    return (
        <div>
            <div className='w-[95%] max-w-[1200px] mx-auto'>
                <h1 className='text-2xl font-bold mb-6 text-center md:text-left'>
                    Dive Into A World of Creativity With Our Artistry & Crafting Wonders
                </h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                    {pictures.map((item, index) => (
                        <div
                            key={index}
                            className=' rounded-md p-2 hover:shadow-lg transition duration-300 ease-in-out'
                        >
                            <div className='overflow-hidden rounded-md'>
                                <Image
                                    src={item.image}
                                    alt={item.titel}
                                    width={250}
                                    height={150}
                                    className='rounded-md transform hover:scale-105 transition duration-300 ease-in-out'
                                />
                            </div>
                            <p className='font-semibold text-center mt-2'>{item.titel}</p>
                        </div>
                    ))}
                </div>
                <div className="py-10">
                    <Image
                        src="https://scooboo.in/cdn/shop/files/Clearance_sale_6992ba42-aacc-4825-a66d-285e6b754443.jpg?v=1753342805&width=1750"
                        alt="Clearance Sale Banner"
                        width={1750}
                        height={420}
                        className="w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[420px] object-cover"
                        priority
                    />
                </div>


            </div>

        </div>
    )
}

export default Benner4
