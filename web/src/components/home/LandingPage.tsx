import type { JSX } from "react";

export const LandingPage = (): JSX.Element => {
	return (
		<>
			<section className="inset-0 absolute bg-[url(./background-image.webp)] bg-no-repeat bg-cover -z-10 bg-center opacity-50 blur-lg flex justify-center items-center">
				<article className="w-1/2">

					<h2>Nícolas Guedes</h2>
					<h3>Desenvolvedor web | typescript | Javascript | Node</h3>
				</article>
			</section>
		</>
	);
};
