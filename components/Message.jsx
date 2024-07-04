"use client"
import React, { useState } from 'react';

const Message = () => {
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        setError('');
        const formData = new FormData(event.target);

        formData.append('access_key', '7b0557e5-bda7-4b9e-8a60-098249b18eaa');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult('Form Submitted Successfully');
                event.target.reset();
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Something went wrong. Please try again later.');
        }
    };

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[80vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start text-zinc-800 flex gap-2 items-center'>Send Message</h1>
                </div>
                <form onSubmit={onSubmit} className='p-5 rounded-lg flex flex-col justify-center items-center gap-2 w-full bg-slate-200'>
                    <label htmlFor="name" className='text-xl text-zinc-800 font-medium self-start'>Name</label>
                    <input type="text" id='name' name="name" placeholder='Your Name' className='text-zinc-800 font-medium px-3 py-2 rounded-lg w-full outline-none' required />
                    <label htmlFor="email" className='text-xl text-zinc-800 font-medium self-start'>Email</label>
                    <input type="email" id='email' name="email" placeholder='Your Email' className='text-zinc-800 font-medium px-3 py-2 rounded-lg w-full outline-none' required />
                    <label htmlFor="number" className='text-xl text-zinc-800 font-medium self-start'>Contact No.</label>
                    <input type="number" id='number' name="number" placeholder='Contact Number' className='text-zinc-800 font-medium px-3 py-2 rounded-lg w-full outline-none' />
                    <label htmlFor="message" className='text-xl text-zinc-800 font-medium self-start'>Message</label>
                    <textarea id='message' name="message" placeholder='Drop Your Message' className='text-zinc-800 font-medium px-3 py-2 rounded-lg w-full outline-none' required></textarea>
                    <button type="submit" className='px-3 py-2 font-semibold bg-zinc-700 text-slate-200 hover:bg-zinc-800 text-xl transition ease-in-out rounded-lg mt-2 self-start'>Submit</button>
                </form>
                {error && <span className="text-xl text-zinc-800 font-medium">{error}</span>}
                {result && <span className="text-xl text-zinc-800 font-medium">{result}</span>}
            </div>
        </section>
    )
}

export default Message;