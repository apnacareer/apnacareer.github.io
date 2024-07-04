import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className='flex justify-center items-center w-full bg-zinc-800'>
            <div className='flex flex-col justify-center items-center lg:w-[80vw] py-2 w-full'>
                <h1 className='text-slate-200 font-medium text-center'>@{year} All rights reserved . Apna Career</h1>
            </div>
        </footer>
    )
}

export default Footer;