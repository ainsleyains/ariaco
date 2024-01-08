import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
export default function Header() {
    const [navbar, setNavbar] = useState(false);
    const handleNav = () => {
        setNavbar(!navbar);
        if (!navbar) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'scroll';
        }
    };
    return (
        <div className='absolute z-50 w-full flex justify-between px-10 py-8 items-center'>
            <Link
                to='/'
                className='font-serif font-bold text-3xl z-20 '
            >
                ARIA & CO.
            </Link>

            <AiOutlineMenu
                onClick={handleNav}
                className='z-20 cursor-pointer'
                size={35}
            />
            <div
                className={
                    navbar
                        ? 'ease-in-out duration-300 fixed left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-50'
                        : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-300 z-50'
                }
            >
                <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
                    <li className='font-bold text-3xl p-8 uppercase hover:border-b border-[#af8c53] hover:tracking-widest'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='font-bold text-3xl p-8 uppercase hover:border-b border-[#af8c53] hover:tracking-widest'>
                        <a href='/about'>About</a>
                    </li>
                    <li className='font-bold text-3xl p-8 uppercase hover:border-b border-[#af8c53] hover:tracking-widest'>
                        <a href='/services'>Services</a>
                    </li>
                    <li className='font-bold text-3xl p-8 uppercase hover:border-b border-[#af8c53] hover:tracking-widest'>
                        <a href='/projects'>Projects</a>
                    </li>
                    <li className='font-bold text-3xl p-8 uppercase hover:border-b border-[#af8c53] hover:tracking-widest'>
                        <a href='/contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
