import Image from 'next/image'
import React from 'react'

function Benner3() {
    const pic = [
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-stapler_1.jpg?v=1715670751&width=400",
            titel: "CI_stapler"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-scissors_1.jpg?v=1715847853&width=400",
            titel: "CI_scissors"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/calculators-388860.jpg?v=1715861774&width=400",
            titel: "calculators"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/folders-fillings-593531.jpg?v=1715848179&width=400",
            titel: "folders"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/organizers-953696_d4dc4904-4b4a-4a55-b4ac-eab86442c6b3.webp?v=1716360570&width=400",
            titel: "organizers"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/magnifiers-644478.jpg?v=1715847593&width=400",
            titel: "magnifiers"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/cutters-265978.jpg?v=1715847522&width=400",
            titel: "cutters"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-paperclips_1.jpg?v=1715670842&width=400",
            titel: "CI-paperclicps"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/CI-whiteboard_marker_3f53c7aa-7da8-4964-80c7-4735d2e2c119.webp?v=1721200774&width=400",
            titel: "CI_whiteboard"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/glue-adhesives-324914.jpg?v=1715848219&width=400",
            titel: "gule"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-punches.jpg?v=1715847832&width=400",
            titel: "CI-punches"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-tape_dispenser.jpg?v=1715670877&width=400",
            titel: "CI-tape"
        }
    ]
    return (
        <div>
            <div className='w-[95%] max-w-[1200px] mx-auto'>
                <h1 className='text-2xl font-bold mb-6 text-center md:text-left'>
                    Elevate Your Workspace Efficiency - Office Essentials
                </h1>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                    {pic.map((item, index) => (
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
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-10">
                    <Image
                        src="https://scooboo.in/cdn/shop/files/newtheme_under_99-2.jpg?v=1716004556&width=1000"
                        height={300}
                        width={300}
                        alt="logo"
                        className="w-full"
                    />
                    <Image
                        src="https://scooboo.in/cdn/shop/files/newtheme_under_199-2.jpg?v=1716004557&width=1000"
                        height={300}
                        width={300}
                        alt="logo"
                        className="w-full"
                    />
                    <Image
                        src="https://scooboo.in/cdn/shop/files/newtheme_under_299-2.jpg?v=1716004557&width=1000"
                        height={300}
                        width={300}
                        alt="logo"
                        className="w-full"
                    />
                    <Image
                        src="https://scooboo.in/cdn/shop/files/under_499_-2.jpg?v=1716012319&width=1000"
                        height={300}
                        width={300}
                        alt="logo"
                        className="w-full"
                    />
                </div>

            </div>
        </div>
    )
}


export default Benner3
