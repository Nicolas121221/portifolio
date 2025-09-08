import { SkillCard } from "./SkillCard";

export const SkillSection = () => {
	return (
		<section className="h-screen max-w-screen bg-slate-900 overflow-x-clip" id="skills">
			<article className="w-[25%] h-1 rounded-r-2xl bg-blue-500 top-20 relative ">
				<h3 className="text-gray-300 text-2xl text-right pt-2">
					habilidades
				</h3>

			</article>
				<section className="w-6xl mx-auto grid grid-cols-3 place-content-center-safe items gap-8 mt-40">
					<SkillCard />
					<SkillCard />
					<SkillCard />
				</section>
		</section>
	);
};
