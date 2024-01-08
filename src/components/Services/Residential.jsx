import livingroom from '../../assets/servicesImgs/livingroom.jpg';
import kitchen from '../../assets/servicesImgs/kitchen.jpg';
import bathroom from '../../assets/servicesImgs/bathroom.jpg';
import bedroom from '../../assets/servicesImgs/bedroom.jpg';

export default function Residential() {
    return (
        <div className='max-w-[1400px] h-[500px] bg-white/[.06] mx-auto my-20 mb-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-8'>
            <div
                className='lg:top-20 relative lg:col-span-1 col-span-2'
                data-aos='fade-up-right'
                data-aos-duration='3000'
            >
                <h3 className='text-3xl md:text-4xl font-bold'>Residential</h3>

                <p className=' leading-relaxed text-2xl py-6'>
                    Our expertise, from Residential Remodel to Residential Furnishing, delivers
                    inspirational, meticulously well-considered, comfortable, and high-quality
                    design that bridges the past and embraces the present. Let elegance meet
                    innovation.
                </p>
            </div>
            <div
                className='grid grid-cols-2 col-span-2 gap-2'
                data-aos='fade-up-left'
                data-aos-duration='3000'
            >
                <img
                    className='object-cover w-full h-full'
                    src={livingroom}
                    alt='livingroom'
                />

                <img
                    className='object-cover w-full h-full'
                    src={kitchen}
                    alt='kitchen'
                />

                <img
                    className='object-cover w-full h-full'
                    src={bedroom}
                    alt='bedroom'
                />

                <img
                    className='object-cover w-full h-full'
                    src={bathroom}
                    alt='bathroom'
                />
            </div>
        </div>
    );
}
