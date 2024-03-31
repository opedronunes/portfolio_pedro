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
        // 'header-image': "url('/images/svg.png')",
        'not-found': "url('/images/nt.png')",
      },
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'tertiary': 'var(--color-tertiary)',
        'white': 'var(--color-white)',
        'texto': 'var(--color-gray)'
      },
    },
  },
  plugins: [],
}
export default config
