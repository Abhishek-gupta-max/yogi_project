/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── VeltrixSecure Brand Palette ──────────────────────────────
        cyber: {
          black:    '#050810',   // Ultra deep black
          dark:     '#06121F',   // Veltrix Navy Main background
          darker:   '#050E18',   // Darker navy
          card:     '#0E2138',   // Card background
          surface:  '#0A1A2E',   // Elevated surface
          border:   '#1B3A5C',   // Subtle border
          muted:    '#1B3A5C',   // Muted border
        },
        electric: {
          DEFAULT:  '#15498A',   // Primary Veltrix Blue (matching logo main blue)
          light:    '#3A7BFF',   // Light variant
          dim:      '#0D2847',   // Dark Veltrix Blue (matching logo dark blue)
          glow:     'rgba(21, 73, 138, 0.4)', // Glow alpha
        },
        neon: {
          cyan:     '#00D4FF',   // Bright Cyan (matching logo bright cyan)
          blue:     '#7FE9FF',   // Soft Cyan (matching logo light cyan)
          purple:   '#7B61FF',   // Purple accent
          green:    '#00FFB3',   // Success green
        },
        text: {
          primary:  '#F0F6FF',   // Main white text
          secondary: '#C8D6F0',  // Secondary text
          muted:    '#8A9BB8',   // Muted text
          dim:      '#4A5A78',   // Very dim text
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        'neon-blue':   '0 0 20px rgba(0, 87, 255, 0.4), 0 0 60px rgba(0, 87, 255, 0.15)',
        'neon-cyan':   '0 0 20px rgba(0, 229, 255, 0.4), 0 0 60px rgba(0, 229, 255, 0.15)',
        'neon-sm':     '0 0 10px rgba(0, 87, 255, 0.3)',
        'glass':       '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-lg':    '0 20px 60px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        'card-hover':  '0 20px 60px rgba(0, 87, 255, 0.15)',
      },
      animation: {
        'fade-in':       'fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in-up':    'fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in-down':  'fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'float':         'float 6s ease-in-out infinite',
        'float-slow':    'float 10s ease-in-out infinite',
        'float-fast':    'float 4s ease-in-out infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow':    'pulseGlow 3s ease-in-out infinite',
        'shield-pulse':  'shieldPulse 4s ease-in-out infinite',
        'cyber-scan':    'cyberScan 3s linear infinite',
        'border-glow':   'borderGlow 2s ease-in-out infinite alternate',
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
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 87, 255, 0.3)' },
          '50%':      { boxShadow: '0 0 50px rgba(0, 87, 255, 0.6), 0 0 80px rgba(0, 229, 255, 0.2)' },
        },
        shieldPulse: {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 15px rgba(0,87,255,0.5))' },
          '50%':      { transform: 'scale(1.03)', filter: 'drop-shadow(0 0 30px rgba(0,87,255,0.8)) drop-shadow(0 0 60px rgba(0,229,255,0.4))' },
        },
        cyberScan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        borderGlow: {
          '0%':   { borderColor: 'rgba(0, 87, 255, 0.3)' },
          '100%': { borderColor: 'rgba(0, 229, 255, 0.7)' },
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
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
}
