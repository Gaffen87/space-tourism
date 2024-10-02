import Logo from "../assets/shared/logo.svg";

const Navbar = () => {
	return (
		<nav className="h-[136px] w-screen pt-spacing-500 flex items-center justify-between">
			<div className="flex flex-row w-1/2 h-[48px] gap-spacing-800 items-center">
				<img src={Logo} alt="logo" className="pl-spacing-800" />
				<div className="w-5/6 flex-shrink-0 h-[1px] bg-white opacity-25 z-10"></div>
			</div>
			<div className="w-1/2">
				<ul className="flex px-spacing-800 gap-spacing-600 mr-auto bg-white bg-opacity-5 w-full min-w-[664px] h-[96px] items-center justify-end backdrop-blur-2xl">
					<li className="h-full flex items-center box-border border-y-4 border-y-transparent border-b-white transition-all duration-500 cursor-pointer">
						00 HOME
					</li>
					<li className="h-full flex items-center cursor-pointer box-border border-y-4 border-y-transparent hover:border-opacity-50 hover:border-b-white transition-all duration-500">
						01 DESTINATION
					</li>
					<li className="h-full flex items-center cursor-pointer box-border border-y-4 border-y-transparent hover:border-opacity-50 hover:border-b-white transition-all duration-500">
						02 CREW
					</li>
					<li className="h-full flex items-center cursor-pointer box-border border-y-4 border-y-transparent hover:border-opacity-50 hover:border-b-white transition-all duration-500">
						03 TECHNOLOGY
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
