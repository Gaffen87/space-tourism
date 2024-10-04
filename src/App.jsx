import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { useLocation } from "react-router-dom";
import AnimatedOutlet from "./components/AnimatedOutlet";

const images = import.meta.glob("./assets/*/background-*-desktop.jpg");

function App() {
	const location = useLocation();
	const [backgroundImage, setBackgroundImage] = useState(null);

	let path = location.pathname.slice(1);
	console.log(path);
	if (path === "destinations") path = "destination";
	if (!path) path = "home";

	const imageKey = `./assets/${path}/background-${path}-desktop.jpg`;

	useEffect(() => {
		// Resolve the image promise
		if (images[imageKey]) {
			images[imageKey]().then((module) => {
				setBackgroundImage(module.default);
			});
		}
	}, [location.pathname, imageKey]);

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
