import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'animate-ping': 'pulse 1600ms infinite' 
      },
      backgroundImage: {
        'header-image': "url('/images/wave-top.png')",
        'not-found': "url('/images/nt.png')",
      },
      colors: {
        'gray-950': '#121214',
        'gray-600': '#29292e',
        'green-600': '#00B37E',
      },
    },
  },
  plugins: [],
}
export default config
