import React from "react";

import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div name="home" className="w-full h-screen bg-[#0e1111]"
		initial={{ opacity: 0, x: 100 }}
		animate={{ opacity: 1, x: 0 }}
		exit={{ opacity: 0, x:-10 }}
		transition={{ type: "spring", stiffness: 50 }}
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-3xl text-[#07ed66]">Bonjour je suis</p>
				<h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
					Thibaut Raimond
				</h1>
				<h2 className="text-4xl sm:text-7xl font-bold text-[#656a79] py-4">
					Développer web & mobile
				</h2>
				<div>
					<button>
						<Link
							to="/portfolio-tailwind-react/profil"
							mooth={true}
							duration={500}
							className="text-white group flex items-center hover:text-black hover:bg-[#07ed66] hover:border-[#07ed66] hover:text-#0e1111] flex border-2 px-6 py-3 my-2"
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
