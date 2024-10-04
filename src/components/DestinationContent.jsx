import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Dynamically import all destination images
const images = import.meta.glob("../assets/destination/image-*.png");

const DestinationContent = ({ destination, handleNavigation, data }) => {
	const [imageSrc, setImageSrc] = useState(null);

	useEffect(() => {
		const imageKey = `../assets/destination/image-${destination.name.toLowerCase()}.png`;

		if (images[imageKey]) {
			images[imageKey]().then((module) => setImageSrc(module.default));
		}
	}, [destination.name]);

	return (
		<div className="w-full h-full flex">
			<div className="h-full w-1/2 flex items-center justify-center">
				{imageSrc ? (
					<AnimatePresence mode="wait">
						<motion.img
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 1.5 }}
							transition={{ duration: 0.5 }}
							key={imageSrc}
							src={imageSrc}
							alt={destination.name}
							className="h-7/8"
						/>
					</AnimatePresence>
				) : (
					<p>Loading image...</p>
				)}
			</div>

			<div className="w-1/2 h-full flex items-center justify-center">
				<div className="gap-spacing-500 h-5/6 w-5/6 flex flex-col">
					<ul className="flex gap-spacing-400 h-[32px] flex-shrink-0">
						{data.destinations.map((dest, index) => {
							return (
								<li
									key={index}
									className={`font-barlowCondensed text-[16px] leading-[19.2px] tracking-[2px] cursor-pointer box-border border-b-4 border-transparent transition-all duration-500 ${
										dest.name === destination.name
											? "text-white border-b-white"
											: "text-space-blue-300 hover:border-b-white hover:border-opacity-50"
									}`}
									onClick={(e) => handleNavigation(e.target.textContent)}
								>
									{dest.name.toUpperCase()}
								</li>
							);
						})}
					</ul>
					<div className="flex flex-col gap-spacing-200">
						<div className="flex">
							{destination.name
								.toUpperCase()
								.split("")
								.map((letter, index) => (
									<motion.p
										initial={{ opacity: 0, y: -20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 1, delay: index / 10 }}
										key={destination.name + index}
										className="font-bellefair text-[96px] leading-[110px]"
									>
										{letter}
									</motion.p>
								))}
						</div>
						<motion.p
							key={destination.description}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
							className="font-barlow text-[18px] leading-[32.4px] text-space-blue-300"
						>
							{destination.description}
						</motion.p>
						<div className="bg-white opacity-25 w-full h-[1px] my-4"></div>
						<div className="flex gap-spacing-300">
							<motion.div
								key={destination.distance}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.6 }}
								className="gap-[12px]"
							>
								<p className="text-space-blue-300 font-barlowCondensed text-[14px] leading-[16.8px] tracking-[2px]">
									AVG. DISTANCE
								</p>
								<p className="font-bellefair text-[28px] leading-[32.1px]">
									{destination.distance}
								</p>
							</motion.div>
							<motion.div
								key={destination.travel}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.7 }}
								className="gap-[12px]"
							>
								<p className="text-space-blue-300 font-barlowCondensed text-[14px] leading-[16.8px] tracking-[2px]">
									AVG. TRAVEL TIME
								</p>
								<p className="font-bellefair text-[28px] leading-[32.1px]">
									{destination.travel}
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinationContent;
