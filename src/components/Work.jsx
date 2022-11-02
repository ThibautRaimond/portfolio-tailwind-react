import React from 'react';
import CodeDuDev from '../assets/projects/CodeDuDev.jpg'
import WorkImg from '../assets/projects/workImg.jpeg';
import realEstate from '../assets/projects/realestate.jpg';

const Work = () => {
    return (
        <div className='w-full md:h-screen text-gray-300 bg-[#0e1111]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66]'>Mes projets</p>
                <p className='py-6'> Présentation de mes derniers projets</p>
            </div>


        <div style={{backgroundImage: `url(${CodeDuDev})`}}
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center mx-auto content-div'>

{/* hover effect */}
            <div className='text-center opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
                    HTML/CSS/JS/SQL Application
                </span>
                <div className='pt-8 text-center'>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 '>Demo</button>
                    </a>
                    <a href="/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 '>Code</button>
                    </a>

                    </div>
                </div>
            </div>
        </div>

        </div>
    </div>

    );
};

export default Work;