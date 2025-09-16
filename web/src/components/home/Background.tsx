import type { JSX } from "react";

export const Background = (): JSX.Element => {
	return (
		<section className="inset-0 max-w-screen fixed bg-slate-400 -z-10"></section>
	);
};
