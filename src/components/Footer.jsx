import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

export default function Footer() {
    return (
        <div className='mt-auto w-full py-2 px-2 text-xl'>
            <div className='max-w-[1140px] grid grid-cols-2 md:grid-cols-6 border-b-2 border-[#af8c53] mx-auto py-2 px-4'>
                <div>
                    <h6 className=' tracking-wider font-bold mb-4  '>Studio</h6>
                    <ul>
                        <li className=' uppercase text-[#af8c53]'>
                            <a href='/'>Home</a>
                        </li>
                        <li className=' uppercase text-[#af8c53]'>
                            <a href='/services'>Services</a>
                        </li>
                        <li className=' uppercase text-[#af8c53]'>
                            <a href='/projects'>Projects</a>
                        </li>
                        <li className=' uppercase text-[#af8c53] pb-6'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className=' tracking-wider font-bold mb-4 '>Info</h6>
                    <ul>
                        <li className=' uppercase text-[#af8c53]'>
                            <a href='/about'>About</a>
                        </li>
                        <li className=' uppercase text-[#af8c53]'>FAQS</li>
                        <li className=' uppercase text-[#af8c53]'>
                            <a href='/contact'>Contact</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className='tracking-wider font-bold mb-4 '>Legal</h6>
                    <ul>
                        <li className=' uppercase text-[#af8c53]'>Privacy </li>
                        <li className=' uppercase text-[#af8c53]'>Terms</li>
                        <li className=' uppercase text-[#af8c53]'>Policies</li>
                    </ul>
                </div>

                <div className='tracking-wider col-span-3 py-8 md:pt-2'>
                    <p className='font-bold '>Join the list</p>
                    <p className='py-4 text-[#af8c53]'>
                        Receive weekly styling advice and inspiration, as well as all the latest
                        news and offers, direct to your inbox.
                    </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input
                            className='w-full p-2 mr-4 rounded-md mb-4'
                            type='email'
                            placeholder='Enter email..'
                        />
                        <button className=' bg-transparent  px-3  hover:border-b border-[#af8c53] text-[#af8c53]font-medium hover:text-[#af8c53] '>
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <div className='flex flex-col max-w-[1140px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
                <p className='py-4 text-[#af8c53]'>
                    &copy; Copyright {new Date().getFullYear()} by{' '}
                    <span className='font-serif'>ARIA & CO. </span>All rights reserved
                </p>
                <div className=' text-[#af8c53] flex justify-between sm:w-[300px] pt-4 text-2xl'>
                    <FaFacebook />
                    <FaInstagram />
                    <FaTwitter />
                    <TiSocialPinterest size={34} />
                </div>
            </div>
        </div>
    );
}
