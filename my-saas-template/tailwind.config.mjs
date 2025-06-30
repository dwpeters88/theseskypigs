// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'light-gray': 'var(--light-gray)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        'background-light': 'var(--background-light)',
        'background-frosted': 'var(--background-frosted)',
        // Dark theme colors
        'dark-primary-blue': 'var(--primary-blue)', // Example, if you want to specifically reference dark theme colors in Tailwind classes
        'dark-light-gray': 'var(--light-gray)',
        'dark-text-dark': 'var(--text-dark)',
        'dark-text-light': 'var(--text-light)',
        'dark-background-light': 'var(--background-light)',
        'dark-background-frosted': 'var(--background-frosted)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"'],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
      }
    },
  },
  plugins: [],
}
