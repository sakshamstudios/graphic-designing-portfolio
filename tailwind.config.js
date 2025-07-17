/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        luxury: ['"Playfair Display"', 'serif'],
        classy: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        primary: '#D60000', // Royal Bold Red
        white: '#ffffff',
        black: '#000000',
        dark: {
          900: '#000000',  // Background base
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        },
        glow: {
          red: '#ff4d4d',  // Glow accent
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'glow-red': 'glowRed 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        typewriter: 'typewriter 3s steps(20) forwards',
        particle: 'particle 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(214, 0, 0, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(255, 77, 77, 0.7)' },
        },
        glowRed: {
          '0%': { textShadow: '0 0 5px #D60000, 0 0 10px #D60000' },
          '100%': { textShadow: '0 0 15px #ff4d4d, 0 0 30px #ff4d4d' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
  
};
