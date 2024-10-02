import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedOutlet from "./components/AnimatedOutlet";

function App() {
	const location = useLocation();

	let path = location.pathname.slice(1);
	path === "destinations" ? (path = "destination") : "home";
	console.log(path);
	return (
		<div
			className={`h-dvh w-screen overflow-hidden bg-[url('./assets/${path}/background-${path}-desktop.jpg')] bg-no-repeat bg-cover bg-black bg-center transition-all duration-1000`}
		>
			<Navbar />
			<AnimatedOutlet />
		</div>
	);
}

export default App;
