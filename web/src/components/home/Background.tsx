import type { JSX } from "react";

export const Background = (): JSX.Element => {
	return (
		<section className="inset-0 max-w-screen fixed bg-[url(./background-image.webp)] bg-no-repeat bg-center bg-cover bg-fit -z-10 opacity-30 blur-lg"></section>
	);
};
