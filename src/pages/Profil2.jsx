import React from "react";
import thib from "../assets/thib.png";
import CV from "../assets/CV.pdf";

import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div
			name="profil"
			className="bg-[#0e1111] text-gray-300 flex flex-col items-center"
		>
			<h1 className="text-4xl font-bold inline border-b-4 mb-20 mt-10 border-[#07ed66]">
				Profil
			</h1>

			<div className="flex items-center shadow-md shadow-[#040c16]">
				<div className="profil-left-container flex flex-col items-center mr-2">
					<img src={thib} alt="Picture" className="thib" />
					<button
						className="bg-green-500 text-white active:bg-green-600 font-bold text-xs py-4 w-48
						rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mt-6 ease-linear transition-all duration-300 hover:text-lg hover:w-64"
						type="button"
					>
						<a href={CV} download>
							Télécharger mon CV
						</a>
					</button>
				</div>

				<div className="profil-textSection">
					<p className="text-xl text-center max-w-lg ">
						Enchanté je m'appelle Thibaut et j'ai récemment découvert une
						passion pour le développement web. J'ai donc choisi de suivre la
						formation FullStack JavaScript chez{" "}
						<a
							className="hover:text-[#07ed66]"
							href="https://oclock.io/"
							target="_blank"
							rel="noreferrer"
						>
							O'Clock
						</a>
						. Cette formation m'a permis d'acquérir de nombreuses compétences de
						développeur ainsi que de faire part à un projet d'équipe en
						utilisant les méthodes AGILE et SCRUM pour la conception web.
					</p>
					<p className="py-4 text-xl text-center max-w-lg">
						Suite à cela j'ai pu obtenir mon diplôme de Développeur FullStack
						Web & Mobile de niveau RNCP 5 (BAC +2).
					</p>

					<p className="py-4 text-xl text-center max-w-lg mt-3">
						Désormais je souhaite consolider et approfondir mes connaissances en
						travaillant avec une équipe professionnelle au sein d'une
						entreprise.
					</p>
				</div>
			</div>

			<div className="flex justify-center align-center">
				<button className="mt-10 profil-bot-button">
					<Link
						to="/portfolio-tailwind-react"
						mooth={true}
						duration={500}
						className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
					>
						<HiArrowNarrowLeft className="mr-3" />
						{" "} Retour à l'accueil
					</Link>
				</button>

				<button className="mt-10 profil-bot-button">
					<Link
						to="/portfolio-tailwind-react/skills"
						mooth={true}
						duration={500}
						className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
					>
						Mes compétences <HiArrowNarrowRight className="ml-3" />{" "}
					</Link>
				</button>
			</div>
		</div>
	);
};
export default About;
