import Image from 'next/image'
import React from 'react'

function Benner2() {
    const pictures = [
        {
            image: "https://scooboo.in/cdn/shop/collections/pens_collection-CI_2.jpg?v=1715670252&width=400",
            titel: "Pens"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/pencil_collection_1.jpg?v=1715670274&width=400",
            titel: "Pencils"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-notebook_1.jpg?v=1715847707&width=400",
            titel: "Notebook"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-notepad_1.jpg?v=1715847896&width=400",
            titel: "Notepad"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/CI-planner_1.webp?v=1721047139&width=400",
            titel: "Planner"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/highlighters-709675.jpg?v=1715670519&width=400",
            titel: "Highlighters"
        },
        {
            image: "https://scooboo.in/cdn/shop/files/journals-892953.webp?v=1721047210&width=400",
            titel: "Journals"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-to-do_1.jpg?v=1715670572&width=400",
            titel: "To-Do List"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-sticky_notes_1.jpg?v=1715848078&width=400",
            titel: "Sticky Notes"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-memo_1.jpg?v=1715854747&width=400",
            titel: "Memo"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/eraser-correction-935962.jpg?v=1715847460&width=400",
            titel: "Eraser"
        },
        {
            image: "https://scooboo.in/cdn/shop/collections/CI-sharpener.jpg?v=1715670705&width=400",
            titel: "Sharpener"
        }
    ]

    return (
        <div className='bg-white py-6'>
            <div className='w-[95%] max-w-[1200px] mx-auto'>
                <h1 className='text-2xl font-bold mb-6 text-center md:text-left'>
                    Elevate Your Workspace with Premium Stationery
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
            </div>
            <div className='py-10'>
                <Image src="https://scooboo.in/cdn/shop/files/smileyworld_banner.gif?v=1718893058&width=1750"
                    width={250}
                    height={150}
                    className="mx-auto w-[1200px] h-[420px] object-cover" />
            </div>
        </div>
    )
}

export default Benner2;
