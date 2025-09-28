import { useState, type JSX } from "react";
import { MenuIcon } from "../icons/utils/MenuIcon";
import { MobileMenu } from "./home/MobileMenu";
import { ThemeIcon } from "../icons/utils/ThemeIcon";

export const Navbar = (): JSX.Element => {
	const [isOpened, setIsOpened] = useState(false);
	const [theme, setTheme] = useState(false);

	const handleTheme = () => {
		setTheme(!theme);
		if (theme) {
			document.documentElement.classList.add("dark");
			return;
		}
		document.documentElement.classList.remove("dark");
		return;
	};

	return (
		<>
			<header className="scroll-m-10 flex justify-between items-center px-[10%] text-lg fixed top-0 right-0 left-0 z-50 text-ocean-400 border-b-ocean-400 border-b bg-ocean-900">
				<h1 className="font-bold py-1 hover:text-ocean-100">
					<a href="#home">nicolas121221</a>
				</h1>
				<section className="flex justify-center items-center">
					<ul className="gap-4 items-center justify-center *:hover:text-ocean-100 *:duration-100 py-2 font-medium hidden sm:flex">
						<li>
							<a href="#home">home</a>
						</li>
						<li>
							<a href="#skills">habilidades</a>
						</li>
						<li>
							<a href="#about">sobre mim</a>
						</li>
					</ul>
					<ThemeIcon
						className="size-5 cursor-pointer ml-6 text-ocean-400 duration-100 hidden sm:block"
						onClick={() => handleTheme()}
					/>
					<select className="ml-5 border-ocean-400 border px-2 py-1 rounded text-sm bg-ocean-900 hidden md:block cursor-pointer">
						<option value="pt-BR">portuguese</option>
						<option value="en">english</option>
						<option value="sp">spanish</option>
					</select>
				</section>

				<MenuIcon
					className="sm:hidden size-6 hover:stroke-ocean-100 stroke-ocean-400 duration-200 cursor-pointer"
					onClick={() => setIsOpened(!isOpened)}
				/>
			</header>
			{isOpened && (
				<MobileMenu onClickCloseMenu={() => setIsOpened(!isOpened)} />
			)}
		</>
	);
};
