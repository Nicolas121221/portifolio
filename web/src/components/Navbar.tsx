import { useState, type JSX } from "react";
import { MenuIcon } from "../icons/utils/MenuIcon";
import { MobileMenu } from "./MobileMenu";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "./utils/LanguageSelect";
import { ThemeButtton } from "./utils/ThemeButton";

export const Navbar = (): JSX.Element => {
	const [t] = useTranslation("navbar");
	const [isOpened, setIsOpened] = useState(false);

	return (
		<>
			<header className="scroll-m-10 flex justify-between items-center px-[10%] text-lg fixed top-0 right-0 left-0 z-50 text-ocean-800 dark:text-ocean-400 border-b-ocean-400 border-b backdrop-blur-md">
				<h1 className="font-bold py-1 hover:text-ocean-600 dark:hover:text-ocean-100">
					<a href="#home">nicolas121221</a>
				</h1>
				<section className="flex justify-center items-center">
					<ul className="gap-4 items-center justify-center *:hover:text-ocean-600 dark:*:hover:text-ocean-100 *:duration-100 py-2 font-medium hidden sm:flex">
						<li>
							<a href="#home">home</a>
						</li>
						<li>
							<a href="#skills">{t("skills")}</a>
						</li>
						<li>
							<a href="#about">{t("about")}</a>
						</li>
					</ul>
					<ThemeButtton className="ml-5 hidden sm:block" />
					<LanguageSelect />
				</section>

				<MenuIcon
					className="sm:hidden size-6 hover:stroke-ocean-800 stroke-ocean-900 dark:hover:stroke-ocean-100 dark:stroke-ocean-400 duration-200 cursor-pointer"
					onClick={() => setIsOpened(!isOpened)}
				/>
			</header>
			{isOpened && (
				<MobileMenu onClickCloseMenu={() => setIsOpened(!isOpened)} />
			)}
		</>
	);
};
