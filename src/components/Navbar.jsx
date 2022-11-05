import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineProfile } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="relative w-full h-[80px] flex justify-between items-center px-4 bg-[#0e1111cb] text-gray-300 shadow-md shadow-[#040c16]">
			<div>
				<Link to="/">
					<img
						src={Logo}
						className="cursor-pointer"
						alt="Logo Image"
						style={{ width: "50px" }}
					/>
				</Link>
			</div>

			{/* menu */}
			<div>
				<ul className="hidden md:flex">
					<Link to="/" mooth={true} duration={500}>
						<li> Accueil </li>
					</Link>
					<Link to="/profil" mooth={true} duration={500}>
						<li> Profil </li>
					</Link>
					<Link to="/skills" mooth={true} duration={500}>
						<li> Compétences </li>
					</Link>
					<Link to="/work" mooth={true} duration={500}>
						<li> Projets </li>
					</Link>
					<Link to="/contact" mooth={true} duration={500}>
						<li> Contact </li>
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
					<Link onClick={handleClick} to="/" mooth={true} duration={500}>
						{" "}
						Accueil{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="/profil" mooth={true} duration={500}>
						{" "}
						Profil{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="/skills" mooth={true} duration={500}>
						{" "}
						Compétences{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="/work" mooth={true} duration={500}>
						{" "}
						Projets{" "}
					</Link>{" "}
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="/contact" mooth={true} duration={500}>
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
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] ">
						<a
							className="flex justify-between items-center w-full text-gray-300"
							href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/"
							target="_blank"
							rel="noreferrer"
						>
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
						<Link to="contact" mooth={true} duration={500}>
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
