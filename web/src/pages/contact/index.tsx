import type { JSX } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { MessageForm } from "../../components/contact/MessageForm";

export const Contact = (): JSX.Element => {
	return (
		<>
			<Navbar />
			<MessageForm />
			<Footer />
		</>
	);
};
