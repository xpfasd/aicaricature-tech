/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        secondary: 'var(--secondary)',
        surface: 'var(--surface)',
        ink: 'var(--text)',
        muted: 'var(--text-muted)',
        border: 'var(--border)'
      },
      borderRadius: {
        card: '12px',
        action: '8px'
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(17, 24, 39, 0.18)'
      }
    }
  },
  plugins: []
};
