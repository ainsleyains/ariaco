import { BsEnvelope, BsFillTelephoneFill } from 'react-icons/bs';
export default function Contact() {
    return (
        <div className='w-full h-full  p-24 '>
            <form
                action='https://getform.io/f/17340ee6-98d1-4d53-91de-9de82da573f6'
                method='POST'
                className='flex flex-col max-w-[1260px] w-full mx-auto mt-36 '
            >
                <div className='pb-2 '>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='flex flex-col justify-start items-start '>
                            <input
                                type='text'
                                placeholder='NAME'
                                name='name'
                                className='p-2 w-full text-gray-400 border-b border-gray-400 bg-inherit'
                            />
                            <input
                                type='email'
                                placeholder='EMAIL'
                                name='email'
                                className='my-8 p-2 w-full  text-gray-400 border-b border-gray-400 bg-inherit'
                            />
                            <textarea
                                name='message'
                                rows='10'
                                placeholder='MESSAGE'
                                className='p-2 mt-8 w-full text-gray-400 border border-gray-400 bg-inherit'
                            ></textarea>
                            <button className='px-4 py-3 my-8 mx-auto text-xl flex items-center  text-gray-400 border border-gray-400 rounded-lg hover: hover:text-inherit hover:border-[#d6ac67]'>
                                Get in touch
                            </button>
                        </div>
                        <div className='flex flex-col justify-start items-end'>
                            <p className='text-6xl md:text-8xl font-bold py-12 uppercase text-right'>
                                Let's talk!
                            </p>
                            <div className='flex items-center'>
                                <p className=' text-2xl pr-4'>info@ariaandco.uk</p>
                                <BsEnvelope size={22} />
                            </div>
                            <div className='flex items-center'>
                                <p className=' text-2xl pr-4'>(020) 3048 5432</p>
                                <BsFillTelephoneFill size={22} />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
