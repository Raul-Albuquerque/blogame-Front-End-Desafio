import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito'],
        logo: ['Caesar Dressing'],
      },
      colors: {
        dark10: '#100f0f',
        dark20: '#e2e2e2',
        dark30: '#f9f9f9',
      },
    },
  },
  plugins: [],
}
export default config
