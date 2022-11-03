import React from 'react';
import thib from '../assets/thib.png'
import CV from '../assets/CV.pdf'
import {HiArrowNarrowRight} from 'react-icons/hi';
import { Link } from 'react-scroll';

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0e1111] text-gray-300 flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold inline border-b-4 mb-20 border-[#07ed66]">Profil</h1>
			
			<div className="flex items-center p-1 shadow-md shadow-[#040c16]">

				<div className="profil-left-container flex flex-col items-center mr-2"> 
					<img src={thib} alt="Picture" className='thib'/> 
						<button className='bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-6 py-4 
						rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mt-14 ease-linear transition-all duration-15' type='button'>
						<a href={CV} download>Télécharger mon CV</a>
						</button>
					</div>
				
				<div className='profil-textSection'>	
					<p className='py-4 text-xl text-center max-w-lg '>
					Enchanté je m'appelle Thibaut et j'ai récemment découvert une passion pour le développement web. 
					J'ai donc choisi de suivre la formation FullStack JavaScript chez O'Clock. Cette formation m'a permis d'acquérir de nombreuses compétences de 
					développeur ainsi que faire part à un projet d'équipe en utilisant les méthodes AGILE et SCRUM dans la conception web. 
					</p>
					<p className='py-4 text-xl text-center max-w-lg'>
					Suite à cela j'ai pu obtenir mon diplôme de Développeur FullStack Web & Mobile de niveau RNCP 5 (BAC +2).
					</p>

					<p className='py-4 text-xl text-center max-w-lg mt-3'>
					Désormais je souhaite consolider et approfondir mes connaissances en travaillant avec une équipe professionnelle au sein d'une entreprise.
					</p>

				</div>
			</div>

			<button className='mt-10 profil-bot-button'> 
					<Link to= "skills" mooth={true} duration={500} className='text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white'>
							Mes compétences
                    <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3'/> </span>
						</Link>
                    </button>

		</div>


	);
	};
	
	export default About;

