import office from '../../assets/aboutImgs/office.jpg';
import work1 from '../../assets/aboutImgs/work1.jpg';
import team from '../../assets/aboutImgs/team.jpg';

export default function Bottom() {
    return (
        <div className='max-w-[1400px] h-[500px] bg-white/[.06] mx-auto my-20 mb-40 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-8'>
            <div
                className='lg:top-20 relative lg:col-span-1 col-span-2'
                data-aos='fade-up-right'
                data-aos-duration='3000'
            >
                <h3 className='text-3xl md:text-4xl font-bold'>
                    Define your character; Decide your attitude
                </h3>
                <p className=' leading-relaxed text-2xl py-6'>
                    We deliver exceptional interiors that reflect your personality and preferences,
                    transforming the look of your home with elegance and bringing a profound sense
                    of belonging.
                </p>
            </div>
            <div
                className='grid grid-cols-2 col-span-2 gap-2'
                data-aos='fade-up-left'
                data-aos-duration='3000'
            >
                <img
                    className='object-cover w-full h-full'
                    src={office}
                    alt='inside of office'
                />
                <img
                    className='object-cover w-full h-full'
                    src={team}
                    alt='team of Aria & CO.'
                />
                <img
                    className='object-cover w-full h-full'
                    src={work1}
                    alt='discussion in the office'
                />
            </div>
        </div>
    );
}
