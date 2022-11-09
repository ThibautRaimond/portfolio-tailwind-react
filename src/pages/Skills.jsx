import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Sequelize from "../assets/sequelize.png";
import PSQL from "../assets/psql.png";
import GitHub from "../assets/github.png";

import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Skills = () => {
	return (
		<div name="skills" className="bg-[#0e1111] text-gray-300 ">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-[#07ed66] competences">
						Compétences
					</p>
					<p className="py-4">Voici les technologies que j'ai déjà utlisées</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-8">
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
						<p className="my-4">HTML</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={JavaScript}
							alt="JavaScript icon"
						/>
						<p className="my-4">JavaScript</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
						<p className="my-4">React</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={Node} alt="Node icon" />
						<p className="my-4">Node JS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img
							className="w-20 mx-auto"
							src={Sequelize}
							alt="Sequelize icon"
						/>
						<p className="my-4">Sequelize</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={PSQL} alt="PSQL icon" />
						<p className="my-4">PSQL</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
						<p className="my-4">Github</p>
					</div>
				</div>
				<div className="flex justify-center">
				<button className="mt-10 profil-bot-button">
					<Link
						to="/portfolio-tailwind-react/profil"
						mooth={true}
						duration={500}
						className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
					>
						<HiArrowNarrowLeft className="mr-3" />
						{" "} Retour au profil
					</Link>
				</button>

				<button className="mt-10 profil-bot-button">
					<Link
						to="/portfolio-tailwind-react/work"
						mooth={true}
						duration={500}
						className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
					>
						Voir mes projets <HiArrowNarrowRight className="ml-3" />{" "}
					</Link>
				</button>
			</div>
			</div>
		</div>
	);
};

export default Skills;
