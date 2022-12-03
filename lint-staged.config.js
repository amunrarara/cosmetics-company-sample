module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
  "**/*.ts?(x)": () => "tsc -p tsconfig.json --noEmit",
  "*.json": ["prettier --write"],
};
