import commercial1 from '../../assets/servicesImgs/commercial1.jpg';
import commercial2 from '../../assets/servicesImgs/commercial2.jpg';
import commercial3 from '../../assets/servicesImgs/commercial3.jpg';
export default function Commercial() {
    return (
        <div className='max-w-full m-auto px-4 py-16 grid lg:grid-cols-2 gap-4'>
            <div
                className='md:mx-12 grid grid-cols-2 grid-rows-2 h-[80vh] gap-2'
                data-aos='zoom-in'
                data-aos-duration='3000'
            >
                <img
                    className='object-cover w-full h-full p-2 '
                    src={commercial1}
                    alt='commercial interior design'
                />
                <img
                    className='object-cover w-full h-full p-2  row-span-2'
                    src={commercial3}
                    alt='commercial interior design'
                />

                <img
                    className='object-cover w-full h-full p-2  '
                    src={commercial2}
                    alt='commercial interior design'
                />
            </div>
            <div
                className='flex flex-col h-full justify-center'
                data-aos='zoom-in'
                data-aos-duration='3000'
            >
                <h3 className='text-3xl md:text-4xl font-bold'>Commercial</h3>
                <p className='w-4/5 leading-relaxed text-2xl py-6'>
                    Our specialization extends to Commercial Renovations & Remodels, Commercial
                    Furnishing, and Commercial Tenant Improvements, completely transforming the
                    appearance of your commercial space, which never grows old. Let your character
                    and attitude permeate your commercial environment.
                </p>
            </div>
        </div>
    );
}
