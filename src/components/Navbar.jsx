import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0e1111] text-gray-300 shadow-md shadow-[#040c16]'>
    <div>
    <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
    </div>
    
    {/* menu */}
    <div>
    <ul className='hidden md:flex'>
    <li>
    <Link activeClass="active" to="home" mooth={true} duration={500}> Accueil </Link>
    </li>
    <li>
    <Link activeClass="active" to="profil" mooth={true} duration={500}> Profil </Link>
    </li>
    <li>
    <Link activeClass="active" to="skills" mooth={true} duration={500}> Compétences </Link>
    </li>
    <li>
    <Link activeClass="active" to="work" mooth={true} duration={500}> Projets </Link>
    </li>
    <li>
    <Link activeClass="active" to="contact" mooth={true} duration={500}> Contact </Link>
    </li>

    <li>Projets</li>
    <li>Contact</li>
    </ul>
    </div>
    
    {/* {Hamburger} */}
    <div onClick={handleClick} className='md:hidden z-10'>
    {!nav ? <FaBars /> : <FaTimes />}
    </div>
    
    {/* mobile menu */}
    <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0e1111] flex flex-col justify-center items-center'}>
    <li className='py-6 text-4xl'>Accueil</li>
    <li className='py-6 text-4xl'>Profil</li>
    <li className='py-6 text-4xl'>Compétences</li>
    <li className='py-6 text-4xl'>Projets</li>
    <li className='py-6 text-4xl'>Contact</li>
    </ul>
    
    
    {/* Social icons*/}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
    <ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2] '>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="https://www.linkedin.com/in/thibaut-raimond-0a46791ab/">
    Linkedin <FaLinkedin size={30} />
    </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2d333b] '>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="https://github.com/ThibautRaimond">
    Github <FaGithub size={30} />
    </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#ea4335]'>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="/">
    Email <HiOutlineMail size={30} />
    </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#347d39] '>
    <a className='flex justify-between items-center w-full text-gray-300'
    href="/">
     Résumé <BsFillPersonLinesFill size={30} />
    </a>
    </li>
    </ul>
    </div>

    </div>
    )
  }
  
  export default Navbar;