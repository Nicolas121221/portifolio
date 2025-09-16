import { Background } from "../components/home/Background";
import { LandingPage } from "../components/home/LandingPage";
import { Navbar } from "../components/home/Navbar";

export const Index = () => {
	document.title = "home";

	return (
		<>
			<Navbar />
			<Background />
			<LandingPage />
		</>
	);
};
