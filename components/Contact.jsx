import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Link from 'next/link';


const Contact = () => {

    const h1 = "Contact Us";
    const p1 = "Have any question ? or need Consultation Contact us.";

    const conxtants = [
        {
            name: "Whatsapp",
            icon: <FaWhatsapp />,
            url: "https://wa.me/919661367897",
        },
        {
            name: "Mail",
            icon: <MdOutlineMailOutline />,
            url: "mailto:Apnacareerinfo@gmail.com"
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            url: "https://www.instagram.com/apnacareerinfo",
        },
    ]

    return (
        <section className='flex flex-col justify-center items-center' id='contact'>
            <div className='flex flex-col justify-center items-center gap-4 w-[95vw] lg:w-[80vw] py-6'>
                <h1 className='text-3xl font-semibold text-zinc-800 self-start'>{h1}</h1>
                <p className='text-xl font-medium text-zinc-800 self-start'>{p1}</p>
                <div className='flex flex-wrap justify-center gap-5 w-full'>
                    {conxtants.map((conxtant, index) => (
                        <Link href={conxtant.url} key={index} className='flex flex-col justify-center items-center gap-2 p-5 rounded-full bg-slate-200 text-zinc-800 hover:text-zinc-900 transition ease-in-out text-3xl'>
                            {conxtant.icon}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;