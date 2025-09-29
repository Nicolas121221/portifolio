import { useTranslation } from "react-i18next";
import { CloseIcon } from "../icons/utils/CloseIcon";
import { ThemeButtton } from "./utils/ThemeButton";

interface props {
	onClickCloseMenu: () => void;
}

export const MobileMenu = ({ onClickCloseMenu }: props) => {
	const [t] = useTranslation("navbar");

	return (
		<section className="inset-0 flex justify-center items-center fixed bg-ocean-900/10 z-50 backdrop-blur-xl sm:hidden">
			<CloseIcon
				strokeWidth={1.8}
				className="dark:stroke-white size-8 absolute top-5 right-5 stroke-red-500 duration-300 cursor-pointer"
				onClick={onClickCloseMenu}
			/>
			<ThemeButtton className="absolute right-15 top-6 size-6" />
			<div className="w-1/2">
				<ul className="*:w-fit text-2xl text-ocean-800 dark:text-ocean-400 *:my-4">
					<li>
						<a href="#home" onClick={onClickCloseMenu}>
							home
						</a>
					</li>
					<li>
						<a href="#skills" onClick={onClickCloseMenu}>
							{t("skills")}
						</a>
					</li>
					<li>
						<a href="#about" onClick={onClickCloseMenu}>
							{t("about")}
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};
