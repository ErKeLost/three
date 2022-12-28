import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import studio from "@theatre/studio";
// import extension from "@theatre/r3f/dist/extension";
import { Stats } from "@react-three/drei";
import { Leva } from "leva";
// studio.initialize();
// studio.extend(extension);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <App />
      <Stats />
      <Leva collapsed />
    </Suspense>
  </React.StrictMode>
);
