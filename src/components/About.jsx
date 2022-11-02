import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0e1111] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#07ed66]'>Profil</p>
                    </div>
                    <div>
                    </div>
                    <div className=''>  
 <p>Bonjour je m'appelle Thibaut je suis passionné par le developpement web. 
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero aliquam dolorem voluptatibus reprehenderit 
    perferendis ipsa exercitationem illum officia, assumenda mollitia.</p> 
                    </div>

                    <div> <p>Fullstack JavaScript 
                        spécialisé en React Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, voluptates!</p> </div>
                </div>
            </div>
        </div>
    );
};

export default About;