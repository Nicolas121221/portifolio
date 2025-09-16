import type { JSX } from "react";

export const LandingPage = (): JSX.Element => {
	return (
		<section
			className="flex justify-center items-center h-screen gap-4"
			id="home"
		>
			<h1 className="text-slate-800 text-end font-sans">Nícolas<br />Guedes</h1>
			<div className="bg-slate-950 h-52 w-px animate-pulse"></div>
			<article>
				<h2 className="text-6xl font-bold text-slate-800">
					Desenvolvedor Web
				</h2>
				<p className="text-gray-800">
					Javascript &bull; Typescript &bull; React &bull; Node.js
					&bull; Express
				</p>
			</article>
		</section>
	);
};
