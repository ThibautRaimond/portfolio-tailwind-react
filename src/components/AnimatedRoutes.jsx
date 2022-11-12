import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Work from "../pages/Work";
import Profil2 from "../pages/Profil2";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence>
			<Routes location={location.pathname} key={location.pathname}>
				<Route path="/portfolio-tailwind-react" element={<Home />} />
				<Route path="/portfolio-tailwind-react/profil" element={<Profil2 />} />
				<Route path="/portfolio-tailwind-react/skills" element={<Skills />} />
				<Route path="/portfolio-tailwind-react/work" element={<Work />} />
				<Route path="/portfolio-tailwind-react/contact" element={<Contact />} />
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
