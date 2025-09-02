import { CloseIcon } from "../icons/CloseIcon";

interface props {
	onClickCloseMenu: () => void;
}

export const MobileMenu = ({ onClickCloseMenu }: props) => {
	return (
		<section className="inset-0 flex justify-center items-center fixed bg-slate-900 sm:hidden">
			<CloseIcon
				strokeWidth={1.8}
				className="stroke-white size-8 absolute top-5 right-5 hover:stroke-red-300 duration-300"
				onClick={onClickCloseMenu}
			/>
		</section>
	);
};
