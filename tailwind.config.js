// tailwind.config.js
module.exports = {
  future: {},
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
