import home1 from '../../assets/profolio/home1.jpg';
import home2 from '../../assets/profolio/home2.jpg';
import home3 from '../../assets/profolio/home3.jpg';
import home5 from '../../assets/profolio/home5.jpg';
import home6 from '../../assets/profolio/home6.jpg';
import { Link } from 'react-router-dom';
export default function Middle() {
    return (
        <div className=''>
            <div className='max-w-full bg-white m-auto py-16 grid lg:grid-cols-2 gap-4 '>
                <div className='md:mx-12 grid grid-cols-2 grid-rows-6 h-[80vh]'>
                    <img
                        className='row-span-3 object-cover w-full h-full p-2'
                        src={home1}
                        alt='interior design project'
                    />
                    <img
                        className='row-span-2 object-cover w-full h-full p-2'
                        src={home2}
                        alt='interior design project'
                    />
                    <img
                        className='row-span-2 object-cover w-full h-full p-2'
                        src={home6}
                        alt='interior design project'
                    />
                    <img
                        className=' row-span-3 object-cover w-full h-full p-2'
                        src={home5}
                        alt='interior design project'
                    />
                    <img
                        className='row-span-2 object-cover w-full h-full p-2'
                        src={home3}
                        alt='interior design project'
                    />
                </div>
                <div className='flex flex-col h-full justify-center px-4'>
                    <p className='uppercase text-[#252926] mb-4 text-2xl '>built to last</p>
                    <h3 className='text-3xl md:text-4xl font-bold'>A place named HOME</h3>
                    <p className='w-4/5 leading-relaxed text-[#252926] text-2xl py-6'>
                        We turn dreams into exquisitely designed living realities. Our passion lies
                        in curating spaces that go beyond aesthetics, crafting homes that are not
                        just harmonious but also irresistibly inviting.
                    </p>
                    <Link
                        to='/projects'
                        className='bg-transparent text-xl my-8 w-44 px-auto md:w-44 font-bold hover:bg-[#af8c53] text-[#af8c53]font-semibold hover:text-[#252926] py-2 px-4 border border-[#af8c53] hover:border-transparent rounded-full mr-8'
                    >
                        View our work
                    </Link>
                </div>
            </div>
        </div>
    );
}
