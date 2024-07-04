import React from 'react';

const Empowering = () => {

    const h1 = "Empowering Students and Families";
    const p1 = "Our educational consultant works with a diverse range of clients, from high school students to working professionals, to help them achieve their academic and career goals.";

    const expertise = [
        {
            name: 'High School Students',
            description: 'We help high school students navigate the college application process, explore their interests, and plan their academic and career paths.'
        },
        {
            name: 'Working Professionals',
            description: 'Our consultant provides career guidance and support to working professionals looking to advance their careers or make a career change.'
        },
        {
            name: "Families",
            description: "We work closely with families to provide comprehensive support and guidance throughout their child's educational journey."
        },
    ]

    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4 w-[95vw] lg:w-[80vw] py-6'>
                <h1 className='text-3xl font-semibold text-zinc-800 self-start'>{h1}</h1>
                <p className='text-xl font-medium text-zinc-800 self-start'>{p1}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 w-full'>
                    {expertise.map((expertis, index) => (
                        <div key={index} className='flex flex-col justify-center items-center gap-2 p-5 rounded-lg bg-slate-200 border-b-4 border-zinc-800 transition ease-in-out'>
                            <h1 className='text-2xl font-semibold text-center text-zinc-800 mt-0'>{expertis.name}</h1>
                            <p className='text-xl font-medium text-zinc-800 my-auto'>{expertis.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Empowering;