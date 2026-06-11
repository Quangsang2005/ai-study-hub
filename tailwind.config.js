/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      colors: {
        // ── Primary Purple (từ Figma) ──────────────────
        primary: {
          DEFAULT: '#7C3AED',
          dark:    '#6026D9',
          light:   '#9B6DFF',
          soft:    '#EFE7FF',
          faint:   '#F6F2FF',
        },
        // ── Accent / Gradient end ─────────────────────
        accent: '#A78BFA',

        // ── Nền ──────────────────────────────────────
        background: {
          DEFAULT: '#F7F5FC',   // nền tím nhạt (toàn trang) — khớp V2
          surface: '#FFFFFF',   // card, modal, sidebar
          alt:     '#F1EDFB',   // hover states, alt surface — khớp V2
        },

        // ── Chữ ──────────────────────────────────────
        text: {
          primary:   '#1F1637',   // heading, body
          secondary: '#655B7A',   // subtext, labels
          disabled:  '#9CA3AF',
          inverse:   '#FFFFFF',
        },

        // ── Viền ─────────────────────────────────────
        border: {
          DEFAULT: '#E7DEF8',
          light:   '#F3F0FF',
        },

        // ── Trạng thái ───────────────────────────────
        success: '#16A34A',
        warning: '#D97706',
        error:   '#DC2626',
        info:    '#2563EB',
      },

      borderRadius: {
        'xl':  '12px',
        '2xl': '16px',
        '3xl': '20px',
        '4xl': '28px',
      },

      boxShadow: {
        'card':  '0 10px 30px rgba(100, 76, 155, 0.08)',
        'card-md': '0 18px 50px rgba(71, 46, 123, 0.12)',
        'glow':  '0 0 0 4px rgba(124, 58, 237, 0.15)',
      },

      backgroundImage: {
        // Gradient chính cho nút Sign In, brand marks
        'primary-gradient': 'linear-gradient(135deg, #7C3AED, #9B6DFF)',
        // Gradient nhẹ cho nền trang auth
        'auth-bg': 'radial-gradient(circle at 20% 20%, rgba(167,139,250,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(124,58,237,0.12) 0%, transparent 50%), linear-gradient(180deg, #F5F3FF 0%, #EDE9FE 100%)',
        // Gradient cho toàn trang public
        'page-bg': 'radial-gradient(circle at top left, rgba(167, 139, 250, 0.12), transparent 30%), linear-gradient(180deg, #FDFCFF 0%, #F0EEFF 100%)',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-8px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        // Spring bounce — dùng cho modal card (khớp V2 loginCardIn)
        cardIn: {
          from: { opacity: '0', transform: 'translateY(24px) scale(0.97)' },
          to:   { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        // Shimmer chạy trên accent bar đầu modal
        shimmer: {
          '0%':   { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.5' },
        },
      },
      animation: {
        'fade-in':    'fadeIn 0.4s ease forwards',
        'slide-down': 'slideDown 0.3s ease forwards',
        'card-in':    'cardIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'shimmer':    'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
}