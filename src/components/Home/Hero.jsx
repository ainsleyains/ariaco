import hero from '../../assets/profolio/home.jpg';
import Typed from 'react-typed';

export default function Hero() {
    return (
        <>
            <div className='w-full h-screen'>
                <img
                    className='top-0 left-0 w-full h-screen object-cover'
                    src={hero}
                    alt='interior design project'
                />
                <div className='bg-black/[.75] absolute top-0 left-0 w-full h-screen' />
                <div className='absolute top-10 w-full h-full flex flex-col justify-center'>
                    <div className='left-[10%] md:left-[15%] max-w-[1256px] m-auto absolute p-4'>
                        <div className='md:text-7xl sm:text-6xl text-5xl font-bold my-10'>
                            <h1 className=' md:text-5xl sm:text-4xl text-3xl font-bold text-[#9f8155] my-6'>
                                The absolute power of
                            </h1>
                            <Typed
                                strings={['Elegance', 'Hygge', 'Eternity']}
                                typeSpeed={120}
                                backSpeed={140}
                                loop
                            />
                        </div>

                        <p className='max-w-[550px] py-2 md:text-2xl sm:text-xl text-base mb-6 text-[#A17A43]'>
                            A home that doesn't age has a design that belongs to the past as well as to the future
                        </p>
                        <div className='flex justify-start  '>
                            <button className=' bg-transparent text-xl my-8 w-40 md:w-48 font-bold hover:bg-[#af8c53] text-[#af8c53]font-semibold hover:text-[#252926] py-2 px-4 border border-[#af8c53] hover:border-transparent rounded-full mr-8'>
                                Get In Touch
                            </button>
                            <button className='bg-[#af8c53] text-xl my-8 w-40 md:w-48 font-bold hover:bg-transparent text-[#252926]  hover:text-[#af8c53] py-2 px-4 border border-transparent  hover:border-[#af8c53] rounded-full'>
                                Décor Overview
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
