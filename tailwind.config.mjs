/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:'#666666',
        secondary:'#000000',
        primaryLight:'#b2b2b2',
        primaryExtraLight:'#efefef',
      },
      fontSize:{
        'xxs':"8px"
      ,
     },
     animation: {
      'spin-fast': 'spin 0.8s linear infinite',
      pulse: 'pulse 1.5s ease-in-out infinite',
    },
    },
  },
  plugins: [],
};
