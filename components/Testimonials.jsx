import React from 'react';

const Testimonials = () => {

    const h1 = "What Our Clients Say";
    const p1 = "Hear from the students and families who have benefited from our educational consultant' expertise and guidance.";

    const testimonials = [
        {
            name: 'Rakesh , Student',
            description: 'Working with the educational consultant was a game-changer for me. They helped me navigate the college application process and find the right fit for my academic and career goals.'
        },
        {
            name: 'Anupam , Parent',
            description: 'Our family is incredibly grateful for the guidance and support we received from the educational consultant. They helped our child find their passion and unlock their full potential.'
        },
        {
            name: "Sneha , Student",
            description: "The educational consultant's expertise and personalized approach were invaluable. They helped me discover my strengths and find the right path forward in my educational journey."
        },
    ]

    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center gap-4 w-[95vw] lg:w-[80vw] py-6'>
                <h1 className='text-3xl font-semibold text-zinc-800 self-start'>{h1}</h1>
                <p className='text-xl font-medium text-zinc-800 self-start'>{p1}</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-start items-stretch gap-5 w-full'>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className='flex flex-col justify-center items-center gap-2 p-5 rounded-lg bg-slate-200 border-b-4 border-zinc-800 transition ease-in-out'>
                            <p className='text-xl font-medium text-zinc-800 mt-0'>{testimonial.description}</p>
                            <p className='text-xl font-semibold text-zinc-800 my-auto self-start'>{testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;