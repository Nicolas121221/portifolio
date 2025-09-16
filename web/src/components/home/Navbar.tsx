import { useState, type JSX } from "react";
import { MenuIcon } from "../../icons/utils/MenuIcon";
import { MobileMenu } from "./MobileMenu";
import { ThemeIcon } from "../../icons/utils/ThemeIcon";

export const Navbar = (): JSX.Element => {
	const [isOpened, setIsOpened] = useState(false);

	return (
		<>
			<header className="scroll-m-10 flex justify-between items-center px-[10%] text-lg fixed top-0 right-0 left-0 z-50 text-slate-800">
				<h1 className="font-bold py-1">
					<a href="#home">Nicolas121221</a>
				</h1>
				<section className="flex justify-center items-center">
					<ul className="gap-4 items-center justify-center  *:duration-200 *:border-b-2 *:border-b-white/0 *:hover:border-b-blue-900 py-2 font-medium hidden sm:flex">
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
						<ThemeIcon className="size-5 cursor-pointer ml-6 ext-slate-600 duration-400  hidden sm:block" />
				</section>

				<MenuIcon
					className="sm:hidden size-6 hover:stroke-slate-900 stroke-slate-800 duration-200 cursor-pointer"
					onClick={() => setIsOpened(!isOpened)}
				/>
			</header>
			{isOpened && (
				<MobileMenu onClickCloseMenu={() => setIsOpened(!isOpened)} />
			)}
		</>
	);
};
