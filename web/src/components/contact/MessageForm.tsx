import type { JSX } from "react";
import "./MessageForm.css";

export const MessageForm = (): JSX.Element => {
	return (
		<article className="h-screen pt-20 text-ocean-900 dark:text-ocean-200">
			<h2>Get in contact</h2>
			<form action="GET" className="mx-auto w-6xl *:block pl-10 pt-10">
				<label htmlFor="name">
					your name <span>(opticonal)</span>
				</label>
				<input type="text" name="name" id="name" />

				<label htmlFor="email">your email</label>
				<input
					type="email"
					name="user-email"
					id="email"
					placeholder="myemail@email.com"
					required
				/>

				<label htmlFor="phone">
					phone number <span>(optional)</span>
				</label>
				<input type="tel" name="phone-number" id="phone" />

				<label htmlFor="message">message</label>
				<textarea name="message" id="message" rows={4}></textarea>

				<button
					type="submit"
					className="p-2 bg-ocean-800 rounded-full text-ocean-100"
				>
					Send Email
				</button>
			</form>
		</article>
	);
};
