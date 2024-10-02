const DestinationContent = ({ destination, handleNavigation, data }) => {
	return (
		<div className="w-full h-full flex">
			<div className="h-full w-1/2 flex items-center justify-center">
				<img
					src={`src/assets/destination/image-${destination.name}.png`}
					className="h-7/8"
				/>
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
						<p className="font-bellefair text-[96px] leading-[110px]">
							{destination.name.toUpperCase()}
						</p>
						<p className="font-barlow text-[18px] leading-[32.4px] text-space-blue-300">
							{destination.description}
						</p>
						<div className="bg-white opacity-25 w-full h-[1px] my-4"></div>
						<div className="flex gap-spacing-300">
							<div className="gap-[12px]">
								<p className="text-space-blue-300 font-barlowCondensed text-[14px] leading-[16.8px] tracking-[2px]">
									AVG. DISTANCE
								</p>
								<p className="font-bellefair text-[28px] leading-[32.1px]">
									{destination.distance}
								</p>
							</div>
							<div className="gap-[12px]">
								<p className="text-space-blue-300 font-barlowCondensed text-[14px] leading-[16.8px] tracking-[2px]">
									AVG. TRAVEL TIME
								</p>
								<p className="font-bellefair text-[28px] leading-[32.1px]">
									{destination.travel}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DestinationContent;
