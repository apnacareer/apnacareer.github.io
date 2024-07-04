import React from 'react';

const About = () => {

    const h1  = "About the Consultant";
    const p1 = "With over a decade of experience in the education industry, We have a deep understanding of the challenges and opportunities that students and families face. Our expertise spans a wide range of areas, including academic advising, college admissions, and career planning.";
    const p2 = "We're passionate about empowering individuals to achieve their educational and professional goals, and We take a personalized approach to each client's unique needs and aspirations.";

    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4 w-[95vw] lg:w-[80vw] py-6 mt-6'>
                <h1 className='text-3xl font-semibold text-zinc-800 self-start'>{h1}</h1>
                <div className='flex flex-col justify-center items-center gap-2 p-5 rounded-lg bg-slate-200'>
                    <p className='text-xl font-medium text-zinc-800'>{p1}</p>
                    <p className='text-xl font-medium text-zinc-800'>{p2}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;