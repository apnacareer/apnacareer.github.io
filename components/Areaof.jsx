import React from 'react';

const AreaOf = () => {

    const h1 = "Area of Expertise";
    const p1 = "Our educational consultant offers a range of services to support your educational journey, from academic advising to college application guidance.";

    const expertise = [
        {
            name: 'Academic Advising',
            description: 'We provide expert guidance on course selection, academic planning, and study skills to help students succeed in their academic pursuits.'
        },
        {
            name: 'College Admissions',
            description: 'We assist students in navigating the college admissions process, including selecting schools, writing essays, and preparing for interviews.'
        },
        {
            name: "Career Planning",
            description: "We help individuals explore career options, develop job search strategies, and create resumes and cover letters that stand out to employers."
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

export default AreaOf;