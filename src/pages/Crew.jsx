import AnimatedLayout from "../components/AnimatedLayout";
import { useState, useEffect } from "react";
import data from "../data.json";
import { AnimatePresence, delay, motion, spring } from "framer-motion";

const images = import.meta.glob("../assets/crew/image-*.png");

// Trigger all image imports at the start
const preloadImages = async () => {
	const loadPromises = Object.values(images).map((importImage) =>
		importImage()
	);
	await Promise.all(loadPromises); // Wait for all images to be loaded
};

// Call preloadImages when the app starts
preloadImages().then(() => {
	console.log("All images have been preloaded.");
});

const Crew = () => {
	const [crew, setCrew] = useState(data.crew[0]);
	const [imageSrc, setImageSrc] = useState(null);

	useEffect(() => {
		const imageKey = `../assets/crew/image-${crew.name
			.toLowerCase()
			.replace(" ", "-")}.png`;

		if (images[imageKey]) {
			images[imageKey]().then((module) => setImageSrc(module.default));
		}
	}, [crew.name]);

	return (
		<AnimatedLayout>
			<main className="w-full h-full pt-spacing-600 flex justify-center gap-spacing-100">
				<div className="gap-spacing-300 w-3/4 h-3/4">
					<div className="flex items-center gap-spacing-300">
						<div className="font-barlowCondensed text-[28px] leading-[33.6px] tracking-[4px] font-bold opacity-25">
							02
						</div>
						<p className="font-barlowCondensed text-[28px] leading-[33.6px] tracking-[4px]">
							MEET YOUR CREW
						</p>
					</div>
					<div className="w-full h-full flex">
						<div className="h-full w-1/2 gap-spacing-500">
							<div className="w-full h-5/6 flex flex-col justify-center">
								<div className="gap-spacing-200">
									<AnimatePresence mode="wait">
										<motion.p
											key={crew.role}
											className="opacity-50 font-bellefair text-[32px] leading-[36.7px]"
											initial={{ opacity: 0, y: -80 }}
											animate={{ opacity: 0.5, y: 0 }}
											transition={
												({
													type: "spring",
													damping: 10,
													stiffness: 100,
												},
												{ delay: 0.2 })
											}
										>
											{crew.role}
										</motion.p>
									</AnimatePresence>
									<AnimatePresence>
										<motion.p
											key={crew.name}
											className="font-bellefair text-[56px] leading-[64.2px]"
											initial={{ opacity: 0, x: -50 }}
											animate={{ opacity: 1, x: 0 }}
										>
											{crew.name}
										</motion.p>
									</AnimatePresence>
								</div>
								<motion.p
									key={crew.bio}
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
									className="text-space-blue-300 font-barlow text-[18px] leading-[32.4px] text-balance"
								>
									{crew.bio}
								</motion.p>
							</div>
							<div className="gap-spacing-500 pb-spacing-600 flex">
								{data.crew.map((member, index) => (
									<div
										key={index}
										className={`bg-white w-4 h-4 rounded-full transition-all duration-500 cursor-pointer 
											${member.name === crew.name ? "opacity-100" : "hover:opacity-50 opacity-20"}`}
										onClick={() => setCrew(member)}
									></div>
								))}
							</div>
						</div>
						<div className="h-full w-1/2 flex justify-center">
							<AnimatePresence mode="wait">
								<motion.img
									key={imageSrc}
									src={imageSrc}
									alt={crew.name}
									className="h-full"
									initial={{ opacity: 0, x: 40 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: 40 }}
									transition={{ duration: 0.5 }}
								/>
							</AnimatePresence>
						</div>
					</div>
				</div>
			</main>
		</AnimatedLayout>
	);
};

export default Crew;
