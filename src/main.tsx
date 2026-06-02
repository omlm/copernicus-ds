/*
 * Vite-entry brukes kun til lokal sandbox utenfor Storybook.
 * Storybook er hovedflaten — kjør `npm run storybook`.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { Button } from "./components/Button";

function Playground() {
  return (
    <div style={{ padding: 32, display: "flex", gap: 12 }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Playground />
  </StrictMode>
);
