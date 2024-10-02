import DestinationContent from "../components/DestinationContent";
import Navbar from "../components/Navbar";
import data from "../data.json";
import { useState } from "react";

const Destinations = () => {
	const [destination, setDestination] = useState(data.destinations[0]);

	const handleNavigation = (dest) => {
		const destination = data.destinations.find(
			(d) => d.name.toUpperCase() === dest
		);
		setDestination(destination);
	};

	return (
		<main className="w-full h-full pt-spacing-600 gap-spacing-100 flex justify-center">
			<div className="gap-spacing-300 w-3/4 h-3/4">
				<div className="flex items-center gap-spacing-300">
					<div className="font-barlowCondensed text-[28px] leading-[33.6px] tracking-[4px] font-bold opacity-25">
						01
					</div>
					<p className="font-barlowCondensed text-[28px] leading-[33.6px] tracking-[4px]">
						PICK YOUR DESTINATION
					</p>
				</div>
				<DestinationContent
					destination={destination}
					handleNavigation={handleNavigation}
					data={data}
				/>
			</div>
		</main>
	);
};

export default Destinations;
