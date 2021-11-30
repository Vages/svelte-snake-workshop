import App from "./App.svelte";
import { makeServer } from "./server";

makeServer();

const app = new App({
  target: document.body,
});

export default app;
