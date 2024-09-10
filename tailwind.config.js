import {nextui} from '@nextui-org/theme'
const CustomBlack = "#1C1C1C"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      black: "#252525"
    },
  },
  darkMode: "class",
  darkMode: "class",
 plugins: [nextui({
  themes: {
    dark: {
      colors: {
        background: CustomBlack,
        black: CustomBlack
      }
    }
  }
 })],
}
