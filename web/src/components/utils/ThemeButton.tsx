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
			document.documentElement.classList.add("dark");
			return;
		}
		document.documentElement.classList.remove("dark");
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
