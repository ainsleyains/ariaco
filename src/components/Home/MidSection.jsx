import home33 from '../../assets/profolio/home33.jpg';
import home34 from '../../assets/profolio/home34.jpg';
import home35 from '../../assets/profolio/home35.jpg';

export default function MidSection() {
    return (
        <div className='max-w-[1400px] h-[500px]  mx-auto my-4 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
            <div className='lg:top-20 relative mb-4 lg:col-span-1 col-span-2'>
                <h3 className='text-3xl md:text-4xl font-bold'>Bold expression</h3>
                <p className='text-2xl pt-6 w-[400px]'>
                    Our interior designs bring sustainable textiles, furniture, art, and antiques to
                    tell your story.
                </p>
            </div>
            <div className='grid grid-cols-2 col-span-2 gap-2'>
                <img
                    className='object-cover w-full h-full'
                    src={home34}
                    alt='interior design project'
                />
                <img
                    className=' row-span-2 object-cover w-full h-full'
                    src={home33}
                    alt='interior design project'
                />
                <img
                    className='object-cover w-full h-full'
                    src={home35}
                    alt='interior design project'
                />
            </div>
        </div>
    );
}
