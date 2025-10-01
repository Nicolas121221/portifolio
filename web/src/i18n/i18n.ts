import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import resourcesToBackend from "i18next-resources-to-backend";

i18n.use(initReactI18next)
	.use(
		resourcesToBackend(
			(language: string, namespace: string) =>
				import(`./locales/${language}/${namespace}.json`),
		),
	)
	.use(LanguageDetector)
	.init({
		ns: ["navbar", "landing-page"],
		lng: "pt",
		fallbackLng: {
			default: ["pt", "en"],
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;

export const changeLanguage = (lng: string):void => {
	i18n.changeLanguage(lng)
}
