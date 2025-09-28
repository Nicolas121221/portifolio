import { CloseIcon } from "../../icons/utils/CloseIcon";
import { ThemeIcon } from "../../icons/utils/ThemeIcon";

interface props {
	onClickCloseMenu: () => void;
}

export const MobileMenu = ({ onClickCloseMenu }: props) => {
	return (
		<section className="inset-0 flex justify-center items-center fixed bg-ocean-900 z-50 sm:hidden">
			<CloseIcon
				strokeWidth={1.8}
				className="stroke-white size-8 absolute top-5 right-5 hover:stroke-red-500 duration-300 cursor-pointer"
				onClick={onClickCloseMenu}
			/>
			<ThemeIcon className="size-6 cursor-pointer ml-6 text-ocean-400 duration-200 hover:text-ocean-200 top-6 right-15 absolute" />
			<div className="w-1/2">
				<ul className="*:w-fit text-2xl text-ocean-400 *:hover:text-ocean-100 *:my-4 *:duration-200 *:border-b-2 *:border-transparent *:hover:border-ocean-400">
					<li>
						<a href="#home" onClick={onClickCloseMenu}>
							home
						</a>
					</li>
					<li>
						<a href="#skills" onClick={onClickCloseMenu}>
							habilidades
						</a>
					</li>
					<li>
						<a href="#about" onClick={onClickCloseMenu}>
							sobre mim
						</a>
					</li>
				</ul>
			</div>
		</section>
	);
};
