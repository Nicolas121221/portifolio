import { useState, type JSX } from "react";
import { changeLanguage } from "../../i18n/i18n";
import { useTranslation } from "react-i18next";

export const LanguageSelect = (): JSX.Element => {
	const [t] = useTranslation("navbar");
	const [language, setLanguage] = useState("pt");

	const handleLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value);
		changeLanguage(e.target.value);
		document.documentElement.setAttribute("lang", e.target.value);
	};

	return (
		<select
			className="ml-5 border-ocean-400/50 border px-2 py-1 rounded text-sm bg-ocean-100 dark:bg-ocean-900 hidden md:block cursor-pointer"
			value={language}
			onChange={handleLanguage}
		>
			<option value="pt">português - {t("pt")}</option>
			<option value="en">english - {t("en")}</option>
			<option value="es">español - {t("es")}</option>
		</select>
	);
};
