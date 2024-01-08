import moodboard from '../../assets/aboutImgs/moodboard.jpg';
import moodboard1 from '../../assets/aboutImgs/moodboard1.jpg';
export default function Approach() {
    return (
        <div className='max-w-full m-auto  px-4 py-16 grid lg:grid-cols-2 gap-4'>
            <div
                className='md:mx-12 grid grid-cols-2 grid-rows-5 h-[80vh] gap-2'
                data-aos='zoom-in'
                data-aos-duration='3000'
            >
                <img
                    className='object-cover w-full h-full p-2 row-span-4'
                    src={moodboard}
                    alt='moodboard'
                />
                <img
                    className='object-cover w-full h-full p-2 row-start-2 row-span-4'
                    src={moodboard1}
                    alt='moodboard'
                />
            </div>
            <div
                className='flex flex-col h-full justify-center pl-6'
                data-aos='zoom-in'
                data-aos-duration='3000'
            >
                <h3 className='text-3xl md:text-4xl font-bold'>Beyond aesthetics</h3>
                <p className='w-4/5 leading-relaxed text-2xl py-6'>
                    We excel at blending the old and the new, combining colors to create an
                    immersive space. We enjoy mixing minimalism with abundant patterns and textures,
                    developing multiple lighting settings for different occasions, and assembling
                    classic modernist furniture to fashion your home.
                </p>
            </div>
        </div>
    );
}
