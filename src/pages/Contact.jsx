import React from "react";

import { motion } from "framer-motion";

const Contact = () => {
	return (
		<motion.div
			name="contact"
			className="bg-[#0e1111] flex justify-center items-center p-4"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<form
				method="POST"
				action="https://getform.io/f/7169b0b6-03d1-4a1f-befd-83105a82ffd2"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 border-[#07ed66] text-gray-300">
						Me contacter
					</p>
					<p className="text-gray-300 py-4">
						Afin de me contacter, remplissez le formulaire ci-dessous ou envoyez
						moi directement un e-mail à l'adresse suivante:
						raimond.thibaut@gmail.com
					</p>
				</div>
				<input
					className="bg-[#ccd6f6]"
					type="text"
					placeholder="Nom"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					name="message"
					className="bg-[#ccd6f6]"
					rows="10"
					placeholder="Message"
				></textarea>
				<div className="flex justify-center">
					<button
						className="bg-green-500 text-white active:bg-green-600 font-bold text-xs py-4 w-64
					rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mt-14 ease-linear transition-all duration-300 hover:text-lg hover:w-80"
						type="button"
					>
						Collaborons ensemble
					</button>
				</div>
			</form>
		</motion.div>
	);
};

export default Contact;
