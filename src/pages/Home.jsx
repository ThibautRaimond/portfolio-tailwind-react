import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<motion.div
			name="home"
			className="flex justify-center items-center bg-gradient-to-r from[#0e1111] to-transparentbg z-0 w-full h-screen"
			initial={{ scaleX: 0.5 }}
			animate={{ scaleX: 1 }}
			exit={{ scaleX: 0 }}
			transition={{ duration: 0.5 }}
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center w-full h-full z-0 relative">
				<p className="text-3xl text-[#07ed66] title">
					Bonjours je suis
					</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] title2">
				Thibaut Raimond
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#656a79] py-4 title3">
					<Typewriter
					options={{
						autoStart:true,
						loop: true,
						delay: 50,
						strings:[
							"Dev Web & Mobile",
							"Dev full stack JS",
							"AGILE team work"
						],
					}}/>
				</h2>
				<div>
					<button>
						<Link
							to="/portfolio-tailwind-react/profil"
							mooth={true}
							duration={500}
							className="text-white group items-center hover:text-black hover:bg-[#07ed66] hover:border-[#07ed66] hover:text-#0e1111] flex border-2 px-6 py-3 my-2"
						>
							Voir mon profil <HiArrowNarrowRight className="ml-3" />{" "}
						</Link>
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default Home;
