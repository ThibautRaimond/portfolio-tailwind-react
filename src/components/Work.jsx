import React from 'react';
import WorkImg from '../assets/projects/workImg.jpeg';
import realEstate from '../assets/projects/realestate.jpg';

const Work = () => {
    return (
        <div className='w-full md:h-screen text-gray-300 bg-[#0e1111]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-4xl incline border-b-4 text-gray-300 border-[#07ed66]'>Mes projets</p>
                <p className='py-6'> Présentation de mes dernier projets</p>
            </div>

<div style={{backgroundImage: `url(WorkImg)`}}></div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-lg shadow-#0e1111] group container rounded-md flex justify-center items-center mx-auto content-div'>
                <span>

{/* hover effect */}
                </span>
                <div>
                    <a href="/">
                        <button></button>
                    </a>
                    <a href="/">
                        <button></button>
                    </a>

                </div>
            </div>
        </div>

        </div>
    </div>

    );
};

export default Work;