import { SkillCard } from "./SkillCard";

export const SkillSection = () => {
	return (
		<section className="min-h-screen max-w-screen bg-slate-900 overflow-x-clip" id="skills">
			<article className="w-[25%] h-1 rounded-r-2xl bg-blue-500 top-20 relative ">
				<h3 className="text-gray-300 text-2xl text-right pt-2">
					habilidades
				</h3>

			</article>
				<section className="mx-auto mt-40 flex flex-wrap justify-center items-center max-w-5xl gap-6">
					<SkillCard />
					<SkillCard />
					<SkillCard />
					<SkillCard />
					<SkillCard />
					<SkillCard />
					<SkillCard />
					<SkillCard />
					<SkillCard />
					<SkillCard />
				</section>
		</section>
	);
};
