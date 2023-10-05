import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
//! 09 - Components

const root = createRoot(document.getElementById("root"));

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
