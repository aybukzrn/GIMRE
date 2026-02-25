/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: { 
    extend: {
      fontFamily: {
        // İsimlendirme Kuralı: seninVerdiginIsim: ["Google'daki Birebir İsmi", "yedek-font-tipi"]
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"], // Başlıklar için harika bir font
        newsreader: ["Newsreader", "serif"],      // Akademik/Ciddi duran bir serif font
        dancing: ["Dancing Script", "cursive"],   // El yazısı fontun
        markazi: ["Markazi Text", "serif"],            // Başka bir serif fontu, özellikle alıntılar için güzel olabilir
        sansation: ["Sansation", "sans-serif"] // Modern ve temiz bir sans-serif fontu
      },
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
    },
  },
  plugins: [],
}