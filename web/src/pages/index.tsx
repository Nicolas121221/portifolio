import { AboutMe } from "../components/home/AboutMe";
import { Background } from "../components/Background";
import { LandingPage } from "../components/home/LandingPage";
import { Navbar } from "../components/Navbar";
import { Skills } from "../components/home/Skills";

export const Index = () => {
	document.title = "home";

	return (
		<>
			<Background />
			<Navbar />
			<LandingPage />
			<Skills />
			<AboutMe />
		</>
	);
};
