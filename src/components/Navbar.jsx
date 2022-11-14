import React, { useState } from "react";
import Logo from "../assets/logo.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="w-full h-[85px] flex justify-between items-center mb-4 pr-4 pl-3 bg-[#0e1111d3] text-gray-300 shadow-md shadow-[#040c16]">
			<div className="h-[70px] w-[70px] p-[5px] rounded-md flex justify-center hover:shadow-md hover:shadow-[#040c16]">
				<Link to="/portfolio-tailwind-react">
					<img
						src={Logo}
						className="cursor-pointer"
						alt="Logo Image"
						style={{ width: "65px" }}
					/>
				</Link>
			</div>

			{/* menu */}
			<div>
				<ul className="hidden md:flex">
					<Link to="/portfolio-tailwind-react" mooth={true} duration={500}>
						<li className="hover:font-bold"> Accueil </li>
					</Link>
					<Link
						to="/portfolio-tailwind-react/profil"
						mooth={true}
						duration={500}
					>
						<li className="hover:font-bold"> Profil </li>
					</Link>
					<Link
						to="/portfolio-tailwind-react/skills"
						mooth={true}
						duration={500}
					>
						<li className="hover:font-bold"> Compétences </li>
					</Link>
					<Link to="/portfolio-tailwind-react/work" mooth={true} duration={500}>
						<li className="hover:font-bold"> Projets </li>
					</Link>
					<Link
						to="/portfolio-tailwind-react/contact"
						mooth={true}
						duration={500}
					>
						<li className="hover:font-bold"> Contact </li>
					</Link>
				</ul>
			</div>

			{/* {Hamburger} */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#0e1111] flex flex-col justify-center items-center"
				}
			>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio-tailwind-react"
						mooth={true}
						duration={500}
					>
						{" "}
						Accueil{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio-tailwind-react/profil"
						mooth={true}
						duration={500}
					>
						{" "}
						Profil{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio-tailwind-react/skills"
						mooth={true}
						duration={500}
					>
						{" "}
						Compétences{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio-tailwind-react/work"
						mooth={true}
						duration={500}
					>
						{" "}
						Projets{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="/portfolio-tailwind-react/contact"
						mooth={true}
						duration={500}
					>
						{" "}
						Contact{" "}
					</Link>{" "}
				</li>

				{/* -- Réseau mobile menu -- */}

				<div className=" flex justify-between mt-6">
					<li className="w-[60px] h-[60px] flex justify-between bg-[#0A66C2]  ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[60px] flex justify-between bg-[#2d333b]">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/ThibautRaimond"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={30} />
						</a>
					</li>
					<li className="w-[60px] h-[60px] flex justify-between bg-[#347d39] ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://cvthibautraimond.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<AiOutlineProfile size={30} />
						</a>
					</li>
				</div>
			</ul>

			{/* ----------------------- Social icons ----------------------- */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li
						className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] "
					>
						<a className="flex justify-between items-center w-full text-gray-300" href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
						target="_blank"
						rel="noreferrer">
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d333b] ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://github.com/ThibautRaimond"
							target="_blank"
							rel="noreferrer"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#347d39] ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://cvthibautraimond.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							CV <AiOutlineProfile size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea4335]">
						<Link
							to="/portfolio-tailwind-react/contact"
							mooth={true}
							duration={500}
						>
							{" "}
							Email{" "}
						</Link>{" "}
						<HiOutlineMail size={30} />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
