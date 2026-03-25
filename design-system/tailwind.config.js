/**
 * Kansofy Design System - Tailwind Config
 * Generated from Figma Brand Book
 *
 * Usage: Import in your tailwind.config.js
 * const kansofy = require('./design-system/tailwind.config.js');
 * module.exports = { presets: [kansofy], ... }
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        // Primitives
        'off-white': '#FCF8ED',
        'light-grey': '#898D8A',
        'graphite': '#111111',
        'baby-blue': '#B5D1DC',
        'royal-blue': '#3D62A0',
        'aquamarine': '#6FAD9D',
        'coral': {
          DEFAULT: '#E3917A',
          light: '#EAA999',
          dark: '#D47F69',
        },
        'mustard': '#DBB35B',

        // Semantic aliases
        'bg': {
          primary: '#FCF8ED',
          secondary: '#FFFFFF',
          accent: '#E3917A',
        },
        'text': {
          primary: '#111111',
          secondary: '#898D8A',
          inverse: '#FCF8ED',
        },
        'border': {
          DEFAULT: 'rgba(17, 17, 17, 0.08)',
          subtle: 'rgba(17, 17, 17, 0.06)',
          strong: 'rgba(17, 17, 17, 0.12)',
          focus: '#E3917A',
        },
        'status': {
          success: '#6FAD9D',
          info: '#3D62A0',
          warning: '#DBB35B',
          error: '#D64545',
        },
      },

      fontFamily: {
        display: ['Louize Display', 'Georgia', 'Times New Roman', 'serif'],
        body: ['Inter Display', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-md': ['1.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-md': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'label': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em', fontWeight: '500' }],
      },

      spacing: {
        '1': '0.25rem',   // 4px
        '2': '0.5rem',    // 8px
        '3': '1rem',      // 16px
        '4': '1.5rem',    // 24px
        '5': '2rem',      // 32px
        '6': '3rem',      // 48px
        '7': '4rem',      // 64px
        '8': '5rem',      // 80px
        '9': '7.5rem',    // 120px
      },

      maxWidth: {
        'container-sm': '720px',
        'container-md': '960px',
        'container-lg': '1200px',
      },

      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
      },

      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.04)',
        'md': '0 1px 3px rgba(0, 0, 0, 0.04)',
        'lg': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },

      transitionDuration: {
        'fast': '100ms',
        'normal': '200ms',
        'slow': '300ms',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },

      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'float': 'float 4s ease-in-out infinite',
      },
    },
  },

  plugins: [],
};
