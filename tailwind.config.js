/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: { extend: {
    colors: {
        mavi: "#1a366b",
        sarı: "#d8c283",
        acikgri: "#9d9e94",
        matmavi: "#505b6c",
        koyu: "#061E29",
        beyaz: "#F3F4F4",
        turkuaz: "#088395",
        grimsi: "#abc9d4",
        koyumavi: "#19183B"
      },
  },},
  plugins: [],
}