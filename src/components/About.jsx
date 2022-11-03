import React from 'react';
import thib from '../assets/thib.png'
import CV from '../assets/CV.pdf'

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-[#0e1111] text-gray-300">
			<div className="flex flex-col items-center w-full h-full">
				<p className="text-4xl font-bold inline border-b-4 mb-5 border-[#07ed66]">
					Profil
				</p>
				<div className="thib_container">
					<img src={thib} alt="thib" className='thib'/>
				</div>
				
				<div>
				<p className='py-4 text-xl text-center'>
					Enchanté je m'appelle Thibaut, j'ai récemment découvert une passion pour le développement web. <br />
					J'ai donc choisi de suivre la formation FullStack JavaScript chez O'Clock. Cette formation m'a permis d'acquérir de nombreuses compétences de 
					développeur et de travailler sur un projet en équipe sur un projet en utilisant les méthodes AGILE et SCRUM. <br />
					Suite à cela j'ai pu obtenir mon diplôme de Développeur FullStack Web & Mobile de niveau RNCP 5 (BAC +2). <br />
					Désormais je souhaite consolider et approfondir mes connaissances en travaillant avec une équipe professionnelle au sein d'une entreprise.
					</p>
				</div>

					<button className='bg-green-500 text-white active:bg-green-600 font-bold uppercase text-xs px-4 py-2 
					rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-15' type='button'>
						<a href={CV} download>Télécharger mon CV</a>
						</button>

			</div>
		</div>
	);
	};
	
	export default About;

