import { useState, type JSX } from "react";
import { Link } from "react-router";
import { MenuIcon } from "../icons/MenuIcon";
import { MobileMenu } from "./MobileMenu";

export const Navbar = (): JSX.Element => {
	const [isClicked, setIsClicked] = useState(false);

	return (
		<>
			<header className="bg-slate-900 bg-gradient-to-b flex justify-between items-center border-b border-b-slate-500 px-[10%] text-lg drop-shadow-2xl shadow-md shadow-black/50">
				<h1 className="text-slate-400 hover:text-slate-100 duration-75 font-bold py-1">
					Nícolas121221
				</h1>
				<ul className="gap-4 items-center justify-center *:text-slate-400 *:hover:text-slate-100 *:duration-200 *:border-b-2 *:border-b-white/0 *:border- *:hover:border-b-slate-500 *:py-1 font-medium hidden sm:flex">
					<li>
						<Link to={"/"} title="go to home">
							home
						</Link>
					</li>
					<li>
						<Link to={"/"} title="go to my projects">
							projects
						</Link>
					</li>
					<li>
						<Link
							to={"/"}
							title="go to the about me section"
							className="@min-lg:visible"
						>
							about me
						</Link>
					</li>
				</ul>

				<MenuIcon
					strokeWidth={1.8}
					className="sm:hidden size-6 hover:stroke-slate-100 stroke-slate-400 duration-200 cursor-pointer"
					onClick={() => setIsClicked(!isClicked)}
				/>
			</header>
			{isClicked && (
				<MobileMenu onClickCloseMenu={() => setIsClicked(!isClicked)} />
			)}
		</>
	);
};
