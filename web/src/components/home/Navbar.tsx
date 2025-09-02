import type { JSX } from "react";
import { Link } from "react-router";

export const Navbar = (): JSX.Element => {
	return (
		<header className="bg-slate-900 bg-gradient-to-b py-2 flex justify-between items-center border-b border-b-slate-500 px-[10%] text-lg">
			<h1 className="text-slate-400 hover:text-slate-100 duration-75 font-bold">Nícolas121221</h1>
			<ul className="flex gap-3 items-center justify-center **:text-slate-400 **:hover:text-slate-100 **:duration-200 **:hover:border-b-slate-500">
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
					<Link to={"/"} title="go to the about me section">
						about me
					</Link>
				</li>
			</ul>
		</header>
	);
};
