import { useState, type JSX } from "react";
import { MenuIcon } from "../../icons/utils/MenuIcon";
import { MobileMenu } from "./MobileMenu";
import { ThemeIcon } from "../../icons/utils/ThemeIcon";

export const Navbar = (): JSX.Element => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<>
			<header className="bg-slate-900 scroll-m-10 bg-gradient-to-b flex justify-between items-center border-b border-b-slate-500 px-[10%] text-lg drop-shadow-2xl shadow-md shadow-black/50 fixed top-0 right-0 left-0 z-50">
				<h1 className="text-slate-400 hover:text-slate-100 duration-75 font-bold py-1">
					<a href="#home">Nicolas121221</a>
				</h1>
				<section className="flex justify-center items-center">
					<ul className="gap-4 items-center justify-center *:text-slate-400 *:hover:text-slate-100 *:duration-200 *:border-b-2 *:border-b-white/0 *:hover:border-b-slate-500 *:py-2 font-medium hidden sm:flex">
						<li>
							<a href="#home">home</a>
						</li>
						<li>
							<a href="#skills">habilidades</a>
						</li>
						<li>
							<a href="#about-me">sobre mim</a>
						</li>
					</ul>
						<ThemeIcon className="size-5 cursor-pointer ml-6 text-slate-600 duration-400 hover:text-white hidden sm:block" />
				</section>

				<MenuIcon
					className="sm:hidden size-6 hover:stroke-slate-100 stroke-slate-400 duration-200 cursor-pointer"
					onClick={() => setIsOpened(!isOpened)}
				/>
			</header>
			{isOpened && (
				<MobileMenu onClickCloseMenu={() => setIsOpened(!isOpened)} />
			)}
		</>
	);
};
