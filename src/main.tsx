import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setupGitHubPagesRouter } from "./utils/githubPagesRouter";

// Setup GitHub Pages router fix before rendering
setupGitHubPagesRouter();

createRoot(document.getElementById("root")!).render(<App />);
