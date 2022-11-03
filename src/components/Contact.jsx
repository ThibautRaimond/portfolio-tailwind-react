import React from 'react';

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-[#0e1111] flex justify-center items-center p-4'>
            <form method='POST' action="https://getform.io/f/7169b0b6-03d1-4a1f-befd-83105a82ffd2" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#07ed66] text-gray-300'>Contact</p>
                    <p className='text-gray-300 py-4'>Remplissez le formulaire ou envoyer moi un e-mail à l'adresse suivante: raimond.thibaut@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6]' type="text" placeholder='Nom' name='name' />
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
                <textarea name="message" className='bg-[#ccd6f6]'rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-[#07ed66] hover:border-[#07ed66] px-4 py-3 my-8'>Collaborons ensemble</button>
            </form>
        </div>
    );
};

export default Contact;