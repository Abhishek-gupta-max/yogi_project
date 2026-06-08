/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Design Tokens
        bg: {
          primary: '#0A0A0F',
          secondary: '#111118',
          tertiary: '#1A1A24',
          hover: '#222230',
        },
        border: {
          primary: '#2A2A3A',
          hover: '#3A3A4E',
          active: '#5B6EF5',
        },
        text: {
          primary: '#F5F5F7',
          secondary: '#A1A1AA',
          tertiary: '#63636E',
        },
        accent: {
          primary: '#5B6EF5',
          secondary: '#818CF8',
        },
        success: '#34D399',
        warning: '#FBBF24',
        error: '#F87171',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
        'h2': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['1.25rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        'overline': ['0.6875rem', { lineHeight: '1.3', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      boxShadow: {
        'premium': '0 8px 30px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'premium-hover': '0 20px 50px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'accent-glow': '0 0 40px rgba(91, 110, 245, 0.15)',
        'focus-ring': '0 0 0 2px #0A0A0F, 0 0 0 4px #5B6EF5',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-down': 'fadeInDown 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
