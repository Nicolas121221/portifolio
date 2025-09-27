import type { JSX } from "react";

export const LandingPage = (): JSX.Element => {
	return (
		<section
			className="flex justify-center items-center h-screen gap-4 "
			id="home"
		>
			<h1 className="text-ocean-200 text-end font-sans text-2xl/tight clamp">
				Nícolas
				<br />
				Guedes
			</h1>
			<div className="bg-ocean-400 h-52 w-px"></div>
			<article>
				<h2 className="text-6xl font-bold text-ocean-200">
					Desenvolvedor Web
				</h2>
				<p className="text-ocean-200 *:text-ocean-400 *:px-2 *:inline-block">
					Javascript <span>&bull;</span>
					Typescript<span>&bull;</span>
					React<span>&bull;</span>
					Node.js<span>&bull;</span>
					Express
				</p>
			</article>
		</section>
	);
};
