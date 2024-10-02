import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import data from "../data.json";

const Navbar = () => {
	return (
		<nav className="h-[136px] w-screen pt-spacing-500 flex items-center justify-between">
			<div className="flex flex-row w-1/2 h-[48px] gap-spacing-800 items-center">
				<img src={Logo} alt="logo" className="pl-spacing-800" />
				<div className="w-5/6 flex-shrink-0 h-[1px] bg-white opacity-25 z-10"></div>
			</div>
			<div className="w-1/2">
				<ul className="flex px-spacing-800 gap-spacing-600 mr-auto bg-white bg-opacity-5 w-full min-w-[664px] h-[96px] items-center justify-end backdrop-blur-2xl">
					<NavLink
						to="home"
						className="h-full flex items-center box-border border-y-4 border-y-transparent hover:border-opacity-50 hover:border-b-white transition-all duration-500 cursor-pointer"
					>
						00 HOME
					</NavLink>
					{Object.keys(data).map((key, index) => {
						return (
							<NavLink
								to={key}
								key={key}
								className="h-full flex items-center cursor-pointer box-border border-y-4 border-y-transparent hover:border-opacity-50 hover:border-b-white transition-all duration-500"
							>
								0{index + 1} {key.toUpperCase()}
							</NavLink>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
