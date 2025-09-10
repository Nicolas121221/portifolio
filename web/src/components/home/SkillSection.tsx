import { CssIcon } from "../../icons/languages/CssIcon";
import { HtmlIcon } from "../../icons/languages/HtmlIcon";
import { JavascriptIcon } from "../../icons/languages/JavascriptIcon";
import { ReactIcon } from "../../icons/languages/ReactIcon";
import { SvelteIcon } from "../../icons/languages/SvelteIcon";
import { TypescriptIcon } from "../../icons/languages/TypescriptIcon";
import { SkillCard } from "./SkillCard";

export const SkillSection = () => {
	return (
		<section
			className="min-h-screen max-w-screen bg-slate-900 overflow-x-clip"
			id="skills"
		>
			<article className="w-[25%] h-1 rounded-r-2xl bg-blue-500 top-20 relative ">
				<h3 className="text-gray-300 text-2xl text-right pt-2">
					habilidades
				</h3>
			</article>
			<section className="mx-auto mt-40 flex flex-wrap justify-center items-center max-w-5xl gap-6">
				<SkillCard color="#f0db4f">
					<>
						<h5 className="text-white text-bold mt-2">
							Javascript
						</h5>
						<JavascriptIcon className="size-10 rotate-12 fill-[#F0DB4F] absolute -bottom-1 right-0 -z-10" />
					</>
				</SkillCard>

				<SkillCard color="#3179c6">
					<>
						<h5 className="text-white text-bold mt-2">
							typescript
						</h5>
						<TypescriptIcon className="size-10 rotate-12 text-[#3179c6] absolute -bottom-1 right-0 -z-10" />
					</>
				</SkillCard>

				<SkillCard color="#e34c26">
					<>
						<h5 className="text-white text-bold mt-2">html</h5>
						<HtmlIcon className="size-10 rotate-12 text-[#e34c26] absolute -bottom-1 right-0 -z-10" />
					</>
				</SkillCard>

				<SkillCard color="#663399">
					<>
						<h5 className="text-white text-bold mt-2">css</h5>
						<CssIcon className="size-10 rotate-12 text-[#663399] absolute -bottom-1 right-0 -z-10" />
					</>
				</SkillCard>

				<SkillCard color="#61DBFB">
					<>
						<h5 className="text-white text-bold mt-2">react</h5>
						<ReactIcon className="size-10 rotate-12 text-[#61DBFB]/20 absolute -bottom-1 right-0 -z-10" />
					</>
				</SkillCard>

				<SkillCard color="#FF3E00">
					<>
						<h5 className="text-white text-bold mt-2">svelte</h5>
						<SvelteIcon className="size-10 rotate-12 text-[#FF3E00]/20 absolute -bottom-1 right-0 -z-10" />
					</>
				</SkillCard>
			</section>
		</section>
	);
};
