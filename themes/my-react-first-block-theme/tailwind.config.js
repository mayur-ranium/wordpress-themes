module.exports = {
  content: [
    "./*.html",
    "./templates/**/*.html",
    "./parts/**/*.html",
    "./blocks/**/*.js",
    "./blocks/**/*.jsx"
  ],
  safelist: [
    "bg-blue-600",
    "bg-red-500",
    "bg-green-600",
    "text-white",
    "p-10",
    "rounded-lg"
  ],
  theme: { extend: {} },
  plugins: [],
};
