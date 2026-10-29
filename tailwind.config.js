/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ── VeltrixSecure design tokens (defined in src/styles/index.css) ──
      // Every colour reads a CSS variable, so .theme-dark sections flip automatically.
      colors: {
        page: { DEFAULT: "rgb(var(--bg) / <alpha-value>)", alt: "rgb(var(--bg-alt) / <alpha-value>)" },
        surface: { DEFAULT: "rgb(var(--surface) / <alpha-value>)", 2: "rgb(var(--surface-2) / <alpha-value>)" },
        line: { DEFAULT: "rgb(var(--line) / <alpha-value>)", strong: "rgb(var(--line-strong) / <alpha-value>)" },
        fg: {
          DEFAULT: "rgb(var(--fg) / <alpha-value>)",
          2: "rgb(var(--fg-2) / <alpha-value>)",
          muted: "rgb(var(--fg-muted) / <alpha-value>)",
          dim: "rgb(var(--fg-dim) / <alpha-value>)",
        },
        brand: {
          DEFAULT: "rgb(var(--brand) / <alpha-value>)",
          hover: "rgb(var(--brand-hover) / <alpha-value>)",
          light: "rgb(var(--brand-light) / <alpha-value>)",
        },
        "on-brand": "rgb(var(--on-brand) / <alpha-value>)",
        accent: { DEFAULT: "rgb(var(--accent) / <alpha-value>)", soft: "rgb(var(--accent-soft) / <alpha-value>)" },
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        card:        "var(--shadow-sm)",
        "card-hover": "var(--shadow-md)",
        elevated:    "var(--shadow-lg)",
      },
      animation: {
        'fade-in':       'fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in-up':    'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in-down':  'fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'float-fast':    'float 4s ease-in-out infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'cyber-scan':    'cyberScan 3s linear infinite',
        'shimmer':       'shimmer 2.5s linear infinite',
        'spin-slow':     'spin 8s linear infinite',
        'marquee':       'marquee 30s linear infinite',
        'slide-up':      'slideUp 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        cyberScan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
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
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'snappy': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Radius scale: xl = controls/buttons, 2xl = tiles, 3xl = cards
      borderRadius: {
        '3xl': '1.25rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [
    // Touch screens have no hover: a tapped card gets .is-tapped (see useTapToHover),
    // and every hover:/group-hover: style applies to it too.
    function ({ addVariant }) {
      addVariant('hover', '&:is(:hover, .is-tapped)');
      addVariant('group-hover', ':merge(.group):is(:hover, .is-tapped) &');
    },
  ],
}
