import useEmblaCarousel from 'embla-carousel-react';
import slide1 from '../../assets/servicesImgs/slide1.jpg';
import slide2 from '../../assets/servicesImgs/slide2.jpg';
import slide3 from '../../assets/servicesImgs/slide3.jpg';
import slide4 from '../../assets/servicesImgs/slide4.jpg';
import slide5 from '../../assets/servicesImgs/slide5.jpg';
import Autoplay from 'embla-carousel-autoplay';

export const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

    return (
        <div className='max-w-[1256px] mx-auto w-full'>
            <div className='relative p-4'>
                <div
                    className='overflow-hidden mt-40  '
                    ref={emblaRef}
                >
                    <div className='flex'>
                        <div className='flex-[0_0_100%] min-w-0'>
                            <img
                                className='md:w-[65%] h-screen object-contain'
                                src={slide1}
                                alt='slides'
                            />
                        </div>
                        <div className='flex-[0_0_100%] min-w-0'>
                            <img
                                className='md:w-[65%] h-screen object-contain'
                                src={slide2}
                                alt='slides'
                            />
                        </div>
                        <div className='flex-[0_0_100%] min-w-0'>
                            <img
                                className='md:w-[65%] h-screen object-contain'
                                src={slide3}
                                alt='slides'
                            />
                        </div>
                        <div className='flex-[0_0_100%] min-w-0'>
                            <img
                                className='md:w-[65%] h-screen object-contain'
                                src={slide4}
                                alt='slides'
                            />
                        </div>
                        <div className='flex-[0_0_100%] min-w-0'>
                            <img
                                className='md:w-[65%] h-screen object-contain'
                                src={slide5}
                                alt='slides'
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full  md:absolute z-10 top-[30%] left-[50%] max-w-[650px] leading-8 bg-[#252926]/[.66] p-8'>
                    <h3 className='text-4xl  font-bold md:mb-20 mb-12'>What we craft</h3>
                    <h6 className='font-[fraunces] text-2xl italic font-bold mb-4'>01</h6>
                    <h6 className='text-2xl font-bold mb-4'>Full-Service Design</h6>
                    <p className='text-2xl leading-relaxed py-6 '>
                        Begin your design journey with us; this package empowers us to thoughtfully
                        interpret your passions and styles by providing innovative and exquisite
                        furniture, textiles, even art and antiques. Creating a space that is not
                        only practical but also has a real identity, a place you can call home!
                    </p>
                </div>
            </div>
        </div>
    );
};
