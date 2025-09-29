import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import { Index } from "./pages/index";

import "./utils/i18n";

createRoot(document.getElementById("root")!).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Index />} />
		</Routes>
	</BrowserRouter>,
);
