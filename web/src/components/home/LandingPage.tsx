import type { JSX } from "react";
import { GithubIcon } from "../../icons/social-media/GithubIcon";
import { Link } from "react-router";
import { LinkedinIcon } from "../../icons/social-media/LinkedinIcon";
import ProfilePicutre from "../../assets/profile-picture.webp";
import { InstagramIcon } from "../../icons/social-media/InstagramIcon";

export const LandingPage = (): JSX.Element => {
	return (
		<section className="flex justify-center items-center h-screen" id="home">
			<article className="w-1/2 flex justify-center flex-col items-center text-white">
				<img
					src={ProfilePicutre}
					alt="profile picture"
					className="rounded-full size-60 max-w-60 aspect-square drop-shadow-2xl z-0"
				/>
				<h2 className="text-xl">Nícolas Guedes</h2>
				<section className="mt-2 flex gap-1">
					<Link to="https://github.com/Nicolas121221" target="_blank">
						<GithubIcon className="size-7 hover:fill-gray-50 fill-gray-400 duration-200" />
					</Link>
					<Link
						to="https://www.linkedin.com/in/nicolasguedes1/"
						target="_blank"
					>
						<LinkedinIcon className="size-7 hover:fill-gray-50 fill-gray-400 duration-200" />
					</Link>

					<Link
						to="https://www.instagram.com/nicolas121221/"
						target="_blank"
					>
						<InstagramIcon className="size-7 hover:fill-gray-50 fill-gray-400 duration-200" />
					</Link>
				</section>
			</article>
			<article className="w-1/2 flex justify-start items-start flex-col *:text-shadow-md *:text-shadow-black">
				<h2 className="text-6xl font-bold text-white -mb-7">
					Desenvolvedor Web
				</h2>
				<br />
				<p className="font-light text-gray-200">
					Javascript - Typescript - Node.js
				</p>
			</article>
		</section>
	);
};
