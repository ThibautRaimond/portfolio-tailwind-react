import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0e1111]'>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-3xl text-[#07ed66]'>Bonjour je suis</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Thibaut Raimond</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#656a79] py-4'>Développer web & mobile</h2>
                <div>
					<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#07ed66] hover:border-[#07ed66] hover:text-#0e1111]'> 
					<Link to="about" mooth={true} duration={500}>
							Voir mon profil
						</Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3'/> 
                    </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;