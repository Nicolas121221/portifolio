import { type JSX } from "react";
import { Link } from "react-router";
import { GithubIcon } from "../icons/social-media/GithubIcon";
import { LinkedinIcon } from "../icons/social-media/LinkedinIcon";
import { InstagramIcon } from "../icons/social-media/InstagramIcon";
import { useTranslation } from "react-i18next";

export const Footer = (): JSX.Element => {
	const [t] = useTranslation("footer");

	return (
		<footer className="bg-ocean-100 text-ocean-900 dark:bg-ocean-900 border-t border-t-ocean-400/50 min-h-[20vh] dark:text-ocean-400 p-5 text-sm">
			<section className="max-w-screen flex md:flex-row flex-col md:justify-around justify-center gap-4 md:items-start">
				<article>
					<h4 className="font-bold mb-1">{t("more")}</h4>
					<ul className="*:hover:underline">
						<li>
							<Link to="/">home</Link>
						</li>
					</ul>
				</article>
				<article>
					<h4 className="font-bold mb-1">{t("social")}</h4>
					<ul className="*:hover:underline">
						<li>
							<a
								href="https://github.com/Nicolas121221"
								target="_blank"
							>
								<GithubIcon className="inline mr-1 mb-1" />
								Github
							</a>
						</li>
						<li>
							<a
								href="https://www.instagram.com/nicolas121221/"
								target="_blank"
							>
								<LinkedinIcon className="inline mr-1 mb-1" />
								Linkedin
							</a>
						</li>
						<li>
							<a
								href="www.linkedin.com/in/nicolasguedes1"
								target="_blank"
							>
								<InstagramIcon className="inline mr-1 mb-1" />
								Instagram
							</a>
						</li>
					</ul>
				</article>
				<article>
					<h4 className="font-bold mb-1">{t("contact")}</h4>
					<ul className="*:hover:underline">
						<li>
							<a href="/">nicolas@email.com</a>
						</li>
						<li>
							<a href="">+55 47 9 ####-####</a>
						</li>
						<li>
							<a href="">{t("cv")}</a>
						</li>
					</ul>
				</article>
			</section>
			<h5 className="text-xs text-center mt-10 ">{t("disclaimer")}</h5>
		</footer>
	);
};
