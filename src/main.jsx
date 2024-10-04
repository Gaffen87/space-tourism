import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	createBrowserRouter,
	RouterProvider,
	Navigate,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import App from "./App.jsx";
import "./index.css";
import Crew from "./pages/Crew.jsx";
import Technology from "./pages/Technology.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Navigate to="home" replace />,
			},
			{
				path: "home",
				element: <Home />,
			},
			{
				path: "destinations",
				element: <Destinations />,
			},
			{
				path: "crew",
				element: <Crew />,
			},
			{
				path: "technology",
				element: <Technology />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
