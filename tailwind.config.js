/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0b0f19',
          card: '#131b2e',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#94a3b8',
        },
        light: {
          bg: '#f8fafc',
          card: '#ffffff',
          border: '#e2e8f0',
          muted: '#475569',
        },
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          accent: '#8b5cf6',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite ease-in-out',
        'blob-1': 'blobFloat1 22s infinite ease-in-out',
        'blob-2': 'blobFloat2 28s infinite ease-in-out',
        'blob-3': 'blobFloat3 24s infinite ease-in-out',
        'rotate-3d-1': 'rotate3D1 20s infinite linear',
        'rotate-3d-2': 'rotate3D2 26s infinite linear',
        'spin-3d-ring': 'spin3DRing 18s infinite linear',
        'float-3d': 'float3D 8s infinite ease-in-out',
        'cartoon-float-1': 'cartoonFloat1 16s infinite ease-in-out',
        'cartoon-float-2': 'cartoonFloat2 14s infinite ease-in-out',
        'cartoon-float-3': 'cartoonFloat3 20s infinite ease-in-out',
        'cartoon-rocket': 'cartoonRocket 28s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        blobFloat1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.08)' },
          '66%': { transform: 'translate(-30px, 40px) scale(0.95)' },
        },
        blobFloat2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(-50px, 50px) scale(0.92)' },
          '66%': { transform: 'translate(40px, -30px) scale(1.06)' },
        },
        blobFloat3: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, 45px) scale(1.05)' },
        },
        rotate3D1: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg) rotateZ(180deg)' },
        },
        rotate3D2: {
          '0%': { transform: 'rotateX(360deg) rotateY(0deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(360deg) rotateZ(-180deg)' },
        },
        spin3DRing: {
          '0%': { transform: 'rotateX(68deg) rotateZ(0deg)' },
          '100%': { transform: 'rotateX(68deg) rotateZ(360deg)' },
        },
        float3D: {
          '0%, 100%': { transform: 'translateY(0px) rotateX(15deg) rotateY(-15deg)' },
          '50%': { transform: 'translateY(-22px) rotateX(25deg) rotateY(15deg)' },
        },
        cartoonFloat1: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(35px, -30px) rotate(8deg)' },
          '66%': { transform: 'translate(-25px, 20px) rotate(-6deg)' },
        },
        cartoonFloat2: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '33%': { transform: 'translate(-30px, -25px) rotate(-8deg)' },
          '66%': { transform: 'translate(20px, 30px) rotate(5deg)' },
        },
        cartoonFloat3: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(40px, 30px) rotate(12deg)' },
        },
        cartoonRocket: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(45deg)' },
          '50%': { transform: 'translate(70px, -90px) rotate(48deg)' },
        }
      }
    },
  },
  plugins: [],
}
