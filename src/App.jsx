import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { useLocation, Navigate } from "react-router-dom";
import AnimatedOutlet from "./components/AnimatedOutlet";

const images = import.meta.glob("./assets/*/background-*-desktop.jpg");

function App() {
	const location = useLocation();
	const [backgroundImage, setBackgroundImage] = useState(null);

	// Get the path based on the current route
	let path = location.pathname.slice(15);
	console.log(path);
	if (path === "destinations") path = "destination";
	if (!path) path = "home";

	const imageKey = `./assets/${path}/background-${path}-desktop.jpg`;

	useEffect(() => {
		// Resolve the image promise
		if (images[imageKey]) {
			images[imageKey]().then((module) => {
				setBackgroundImage(module.default); // Set the resolved image URL
			});
		}
	}, [location.pathname]); // Runs every time the route changes

	return (
		<div
			className="h-dvh w-screen overflow-hidden bg-no-repeat bg-cover bg-black bg-center transition-all duration-1000"
			style={{
				backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
			}}
		>
			<Navbar />
			<AnimatedOutlet />
		</div>
	);
}

export default App;
