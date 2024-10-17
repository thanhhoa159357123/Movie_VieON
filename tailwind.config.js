/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url(/banner.png)",
        bglogin: "url(/bg_login_vieon.png)",
        bgmobifone: "url(/bg_vieon_mobiefone.jpg)",
      },
    },
  },
  plugins: [],
};
