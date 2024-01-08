import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

export default function Gallery() {
    const slides = [
        {
            url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Bloomsbury',
        },
        {
            url: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Primrose Hill',
        },
        {
            url: 'https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Oxshott',
        },
        {
            url: 'https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Barbican',
        },
        {
            url: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Hampstead',
        },
    ];

    const [currentInd, setCurrentInd] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentInd === 0;
        const newInd = isFirstSlide ? slides.length - 1 : currentInd - 1;
        setCurrentInd(newInd);
    };
    const nextSlide = () => {
        const isLastSlide = currentInd === slides.length - 1;
        const newInd = isLastSlide ? 0 : currentInd + 1;
        setCurrentInd(newInd);
    };

    const goToSlide = (slideIndex) => {
        setCurrentInd(slideIndex);
    };

    return (
        <div className='max-w-[1256px] h-[600px] w-full m-auto mt-[180px] md:mt-[120px] py-16 px-4 relative group '>
            <div
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{ backgroundImage: `url(${slides[currentInd].url})` }}
            ></div>
            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-[#252926]/60 cursor-pointer'>
                <BsChevronCompactLeft
                    onClick={prevSlide}
                    size={30}
                />
            </div>

            <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-[#252926]/60  cursor-pointer'>
                <BsChevronCompactRight
                    onClick={nextSlide}
                    size={30}
                />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, i) => (
                    <div
                        className='text-2xl cursor-pointer'
                        key={i}
                        onClick={() => goToSlide(i)}
                    >
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
