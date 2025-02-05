import React from 'react';
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {

    const h1 = "Empowering Your Educational Journey";
    const h2 = "As an experienced educational consultant, We're dedicated to helping you navigate the complexities of the education system and achieve your academic and professional goals";

    return (
        <section className='flex flex-col justify-center items-center w-full herosection'>
            <div className='grid grid-cols-1 justify-center items-center w-[95vw] lg:w-[80vw] py-20 md:py-40'>
                <div className='flex flex-col justify-center items-center gap-3 md:px-10 px-5'>
                    <h1 className='text-5xl font-bold text-zinc-900 md:text-center'>{h1}</h1>
                    <h2 className='text-xl font-medium text-zinc-800 lg:max-w-[60vw] md:text-center'>{h2}</h2>
                    <Link href='#contact' className='px-7 py-3 text-xl font-medium text-slate-200 bg-zinc-700 hover:bg-zinc-900 text-[18px] transition ease-in-out rounded-full flex items-center gap-4 self-start md:self-center'>Get in Touch<FaArrowRightLong /></Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;