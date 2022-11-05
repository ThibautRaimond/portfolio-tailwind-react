import React from "react";
import CodeDuDev from "../assets/projects/CodeDuDev.jpg";

import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Work = () => {
	return (
		<div
			name="work"
			className="w-full md:h-screen flex  text-gray-300 bg-[#0e1111]"
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8 flex flex-col items-center ">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#07ed66] mt-6">
						Mes projets
					</p>
					<p className="py-6"> Présentation de mes derniers projets</p>
				</div>

				{/* Grid item */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					<div
						style={{ backgroundImage: `url(${CodeDuDev})` }}
						className="shadow-lg shadow-[#0e1111] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* hover effect */}
						<div className="text-center opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								HTML/CSS/JS/SQL Application
							</span>
							<div className="pt-8 text-center">
								<a
									href="https://yannou.philoucorp.fr/"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 ">
										URL
									</button>
								</a>
								<a
									href="https://github.com/O-clock-Atome/projet-4-le-code-du-dev.git"
									target="_blank"
									rel="noreferrer"
								>
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 ">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>

				</div>
				<div className="flex justify-center align-center">
				<button className="mt-10 profil-bot-button">
					<Link
						to="/skills"
						mooth={true}
						duration={500}
						className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
					>
						<HiArrowNarrowLeft className="mr-3" />
						{" "} Retour aux compétences
					</Link>
				</button>

				<button className="mt-10 profil-bot-button ">
					<Link
						to="/contact"
						mooth={true}
						duration={500}
						className="text-[#ffffff] text-opacity-25 group flex items-center border-2 px-6 py-3 my-2 border-[#999b99] border-opacity-25 hover:text-white hover:border-white"
					>
						Échangeons par mail <HiArrowNarrowRight className="ml-3" />{" "}
					</Link>
				</button>
			</div>

			</div>
		</div>
	);
};

export default Work;