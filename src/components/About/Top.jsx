import founders from '../../assets/aboutImgs/founders.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Top() {
    return (
        <div className='max-w-[1256px] mx-auto  w-full'>
            <div className='relative p-4'>
                <p
                    className='w-full md:absolute z-10 top-[30%] right-[40%]  max-w-[650px] leading-8 bg-[#252926]/[.66] text-2xl mb-4 mt-32'
                    data-aos='fade-up-right'
                    data-aos-duration='3000'
                >
                    <span className='text-3xl font-bold'>Our story </span>founded in 2023 by Edra
                    Starr and Ariadne Snyder, Aria & CO. Studio creates astonishing and
                    sophisticated interiors for residential, retail, and hospitality spaces. Starr
                    and Snyder met as MA students at Saint Martin's University, where Starr studied
                    interiors and architecture, and Snyder specialized in object and furniture
                    design. <br />
                    After graduation, they spent a decade working for various brands and
                    studios—Snyder designing products for Valentino, Balenciaga, and Celine at
                    Design Height and Tate, and Starr orchestrating interiors for Hermès and Four
                    Seasons Hotel Hampshire. Starr and Snyder now lead a small team of creatives.
                </p>
                <img
                    className='w-full h-full object-cover ml-auto relative md:max-w-[65%] max-h-[550px] mt-48'
                    src={founders}
                    alt='founders of ARIA & CO.'
                    data-aos='fade-left'
                    data-aos-duration='3000'
                />
            </div>
        </div>
    );
}
