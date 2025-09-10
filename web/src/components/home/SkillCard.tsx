import type { CSSProperties, JSX } from "react";

interface Props {
	children: JSX.Element;
	color: string;
}

export const SkillCard = (props: Props) => {
	return (
		<section
			className={
				"w-30 h-10 max-h-30 bg-slate-700/50 scale-105 rounded-md border-slate-200 border duration-100 shrink-0 overflow-hidden px-4"
			}
			style={{ "--border-color": `${props.color}` } as CSSProperties}
		>
			{props.children}
		</section>
	);
};
