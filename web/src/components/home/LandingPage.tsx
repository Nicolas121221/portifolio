import type { JSX } from "react";

export const LandingPage = (): JSX.Element => {
	return (
		<section
			className="flex justify-center items-center h-screen w-full gap-4 z-0 "
			id="home"
		>
			<h1 className="text-ocean-200 text-end font-sans text-lg/5 sm:text-2xl/7">
				Nícolas
				<br />
				Guedes
			</h1>
			<div className="bg-ocean-400 h-30 sm:h-52 w-px"></div>
			<article>
				<h2 className="text-2xl sm:text-6xl font-bold text-ocean-200">
					Desenvolvedor Web
				</h2>
				<p className="text-ocean-200 *:text-ocean-400 *:px-2 *:inline-block sm:text-base text-xs sm:w-fit w-60">
					Javascript <span>&bull;</span>
					Typescript<span>&bull;</span>
					React<span>&bull;</span>
					Node.js<span>&bull;</span>
					Express<br />
				</p>
					<a href="#about" className="mt-4 font-semibold border-ocean-500 border text-ocean-500 text-base px-3 rounded-2xl inline-block">entre em contato <span>+</span></a>
			</article>
		</section>
	);
};
