import { Routes, Route } from "react-router-dom";
import ResetScroll from "./components/ResetScoll";

import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Profil2 from "./pages/Profil2";

function App() {
	return (
		<Layout>
			<ResetScroll />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path='/profil' element={<Profil2/>} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/work" element={<Work />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Layout>
	);
}

export default App;
