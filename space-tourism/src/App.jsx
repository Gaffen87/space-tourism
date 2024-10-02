import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="h-dvh w-screen overflow-hidden bg-[url('.\assets\destination\background-destination-desktop.jpg')] bg-no-repeat bg-cover bg-black bg-center">
			<Navbar />
			<Outlet />
		</div>
	);
}

export default App;
