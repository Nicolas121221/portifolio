import { useState, type JSX } from "react";
import { ThemeIcon } from "../../icons/utils/ThemeIcon";

interface props {
	className?: string;
}

export const ThemeButtton = (props: props): JSX.Element => {
	const [theme, setTheme] = useState(false);

	const handleTheme = () => {
		setTheme(!theme);
		if (theme) {
			localStorage.theme = "dark";
			document.documentElement.setAttribute("data-theme", "dark")
			return;
		}
		localStorage.theme = "light";
		document.documentElement.setAttribute("data-theme", "light");
		return;
	};

	return (
		<ThemeIcon
			className={
				"size-5 cursor-pointer text-ocean-800 dark:text-ocean-400 duration-100 " +
				props.className
			}
			onClick={handleTheme}
		/>
	);
};
