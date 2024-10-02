import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnimatedLayout from "../components/AnimatedLayout";

const Home = () => {
	return (
		<AnimatedLayout>
			<main className="pt-spacing-1600 gap-spacing-100 h-full w-full flex justify-center">
				<div className="flex gap-spacing-600 h-3/4 w-3/4 items-center justify-center">
					<div className="w-1/2">
						<p className="font-barlow leading-[33.6px] tracking-[4px]">
							SO, YOU WANT TO TRAVEL TO
						</p>
						<p className="font-bellefair text-[144px] leading-[165px]">SPACE</p>
						<p className="font-barlow text-[18px] leading-[32.4px]">
							Let’s face it; if you want to go to space, you might as well
							genuinely go to outer space and not hover kind of on the edge of
							it. Well sit back, and relax because we’ll give you a truly out of
							this world experience!
						</p>
					</div>
					<div className="w-1/2 flex gap-spacing-300 justify-center">
						<Link
							to="/destinations"
							className="relative w-60 h-60 bg-white text-space-blue-900 rounded-full font-bellefair text-[32px] leading-[36.67px] flex items-center justify-center"
						>
							EXPLORE
						</Link>
					</div>
				</div>
			</main>
		</AnimatedLayout>
	);
};

export default Home;
