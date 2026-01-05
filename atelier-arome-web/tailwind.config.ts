import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#2A2D26',
          light: '#4A4D46',
          muted: '#545752',
        },
        gold: {
          DEFAULT: '#C9A769',
          light: '#E8D8B6',
          dark: '#A98750',
          muted: 'rgba(201, 167, 105, 0.3)',
          text: '#8B7355',
        },
        parchment: {
          DEFAULT: '#FAF8F5',
          dark: '#F5F1EB',
          darker: '#E8E4D9',
        },
        bronze: '#9A8C6D',
        rose: '#B87D7D',
        sage: '#7C6354',
        slate: '#7A8C9D',
        lavender: '#B8A9C9',
        eucalyptus: '#7CB9A0',
        bergamot: '#F5D489',
        rosehip: '#E8B4B8',
      },
      
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['Crimson Pro', 'Georgia', 'serif'],
        accent: ['Great Vibes', 'cursive'],
        ornament: ['Playfair Display', 'serif'],
      },
      
      fontSize: {
        xs: ['clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)', { lineHeight: '1.5' }],
        sm: ['clamp(0.875rem, 0.8rem + 0.35vw, 1rem)', { lineHeight: '1.5' }],
        base: ['clamp(1rem, 0.95rem + 0.25vw, 1.125rem)', { lineHeight: '1.6' }],
        lg: ['clamp(1.125rem, 1.1rem + 0.5vw, 1.25rem)', { lineHeight: '1.4' }],
        xl: ['clamp(1.25rem, 1.2rem + 0.75vw, 1.5rem)', { lineHeight: '1.3' }],
        '2xl': ['clamp(1.5rem, 1.4rem + 2.5vw, 2rem)', { lineHeight: '1.1' }],
        '3xl': ['clamp(2rem, 1.8rem + 2.5vw, 3rem)', { lineHeight: '0.9' }],
        '4xl': ['clamp(2.5rem, 2.25rem + 2.5vw, 4rem)', { lineHeight: '0.95' }],
        '5xl': ['clamp(3rem, 2.75rem + 2.5vw, 5rem)', { lineHeight: '1' }],
      },
      
      spacing: {
        '3xs': '0.125rem',
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
        '6xl': '12rem',
      },
      
      borderRadius: {
        sm: '0.125rem',
        md: '0.25rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '2rem',
        '3xl': '4rem',
      },
      
      boxShadow: {
        sm: '0 1px 2px rgba(42, 45, 38, 0.05)',
        md: '0 4px 12px rgba(42, 45, 38, 0.08)',
        lg: '0 8px 24px rgba(42, 45, 38, 0.1)',
        xl: '0 16px 48px rgba(42, 45, 38, 0.12)',
        gold: '0 40px rgba(201, 167, 105, 0.2)',
      },
      
      transitionDuration: {
        micro: '150ms',
        fast: '300ms',
        base: '500ms',
        slow: '800ms',
      },
      
      zIndex: {
        base: '1',
        elevated: '10',
        sticky: '100',
        overlay: '1000',
        modal: '2000',
        toast: '3000',
      },
      
      keyframes: {
        'liquid-wave': {
          '0%, 100%': { transform: 'translateY(0) scaleY(1)' },
          '50%': { transform: 'translateY(-10px) scaleY(1.05)' },
        },
        'float-botanical': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        'rotate-seal': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'write-scroll': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        'pulse': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
};

export default config;
