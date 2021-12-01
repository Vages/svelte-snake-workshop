export default {
  "*.{svelte,js}": ["npx eslint --fix", "npx prettier --write"],
  "*.{json,md,html,css}": "npx prettier --write",
};
