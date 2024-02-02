import React, {useState, useEffect } from 'react'

function Image() {
 const images=[
    'https://media.istockphoto.com/id/505823546/photo/dog-in-the-city-park.webp?b=1&s=170667a&w=0&k=20&c=OsPkgZNlsppQIqrXo29w6oqkD4Z1ByJJ_NCYDMVMQhQ=',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvynVafqhTbfWVmVZshKSlMty5lS7nC9XzooUmepqbLLhtaVj2m9bNoSW6KZLHAb0-y0&usqp=CAU',
    'https://media.istockphoto.com/id/1008499438/photo/young-beautiful-labrador-retriever-puppy-is-eating-some-dog-food-out-of-humans-hand-outside.jpg?s=612x612&w=0&k=20&c=TViboczCH2KeAwMcAVtPHPghWnDX3fb6L3l7Sa4zcv0=',
    'https://pikwizard.com/pw/small/00fce3cf67ed714a4a56a7f04eb7ba81.jpg',
       
 ]
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % images.length)
};
const handlPrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
}
useEffect(() => {
    const timoutId = setTimeout(handleNextClick, 3000);
    return () => {
        clearTimeout(timoutId);
    };
}, [currentImageIndex, handleNextClick]);

return (
    <div>
        <div className='flex justify-evenly'>
            <div className='text-center'><button className='rounded p-2 bg-red-500 text-white mt-44' onClick={handlPrevClick}>Previous</button> </div>
            <div className='w-fixed h-fixed'>
                <img className='mt-40  h-40 w-52'
                    src={images[currentImageIndex]}
                    alt={`${currentImageIndex + 1}`}
                />
            </div>
            <div className='text-center'>
                <button className='rounded p-2 bg-red-500 text-white mt-44 ' onClick={handleNextClick}>Next</button>

            </div>
        </div>

    </div>
)
}

export default Image