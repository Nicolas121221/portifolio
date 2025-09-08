import { CloseIcon } from "../../icons/utils/CloseIcon";

interface props {
	onClickCloseMenu: () => void;
}

export const MobileMenu = ({ onClickCloseMenu }: props) => {
	return (
		<section className="inset-0 flex justify-center items-center fixed bg-slate-900 sm:hidden z-50">
			<CloseIcon
				strokeWidth={1.8}
				className="stroke-white size-8 absolute top-5 right-5 hover:stroke-red-500 duration-300 cursor-pointer"
				onClick={onClickCloseMenu}
			/>
			<div>
				<ul className="gap-4 items-center justify-center *:text-slate-400 *:hover:text-slate-100 *:duration-200 *:border-b-2 *:border-b-white/0 *:border- *:hover:border-b-slate-500 *:py-1 font-medium hidden sm:flex">
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
			</div>
		</section>
	);
};
