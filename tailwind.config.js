module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Rich leather brown
        primary: {
          DEFAULT: "#8B4513", // saddle-brown
          50: "#FDF8F4", // Very light brown
          100: "#F5E6D3", // Light brown
          200: "#E8C5A0", // Medium light brown
          300: "#D4A574", // Medium brown
          400: "#B8824A", // Medium dark brown
          500: "#8B4513", // Base leather brown
          600: "#7A3C11", // Dark brown
          700: "#68330F", // Darker brown
          800: "#562A0D", // Very dark brown
          900: "#44210A", // Deepest brown
        },
        // Secondary Colors - Warm tan
        secondary: {
          DEFAULT: "#D2B48C", // tan
          50: "#FDFBF8", // Very light tan
          100: "#F8F2E8", // Light tan
          200: "#F0E4D1", // Medium light tan
          300: "#E6D4B8", // Medium tan
          400: "#DCC49F", // Medium dark tan
          500: "#D2B48C", // Base warm tan
          600: "#C5A373", // Dark tan
          700: "#B8925A", // Darker tan
          800: "#AB8141", // Very dark tan
          900: "#9E7028", // Deepest tan
        },
        // Accent Colors - Refined gold
        accent: {
          DEFAULT: "#DAA520", // goldenrod
          50: "#FEFCF7", // Very light gold
          100: "#FDF6E3", // Light gold
          200: "#FAECC0", // Medium light gold
          300: "#F6E19D", // Medium gold
          400: "#F2D67A", // Medium dark gold
          500: "#DAA520", // Base refined gold
          600: "#C4941D", // Dark gold
          700: "#AE831A", // Darker gold
          800: "#987217", // Very dark gold
          900: "#826114", // Deepest gold
        },
        // Background Colors
        background: "#FEFEFE", // white
        surface: "#F8F6F3", // warm-gray-50
        // Text Colors
        text: {
          primary: "#2C1810", // warm-gray-900
          secondary: "#6B4E3D", // warm-gray-600
        },
        // Status Colors
        success: {
          DEFAULT: "#228B22", // forest-green
          50: "#F0FDF0", // Very light green
          100: "#DCFCE7", // Light green
          200: "#BBF7D0", // Medium light green
          300: "#86EFAC", // Medium green
          400: "#4ADE80", // Medium dark green
          500: "#228B22", // Base forest green
          600: "#1F7A1F", // Dark green
          700: "#1C691C", // Darker green
          800: "#195819", // Very dark green
          900: "#164716", // Deepest green
        },
        warning: {
          DEFAULT: "#FF8C00", // dark-orange
          50: "#FFF7ED", // Very light orange
          100: "#FFEDD5", // Light orange
          200: "#FED7AA", // Medium light orange
          300: "#FDBA74", // Medium orange
          400: "#FB923C", // Medium dark orange
          500: "#FF8C00", // Base warm orange
          600: "#E67E00", // Dark orange
          700: "#CC7000", // Darker orange
          800: "#B36200", // Very dark orange
          900: "#995400", // Deepest orange
        },
        error: {
          DEFAULT: "#B22222", // fire-brick
          50: "#FEF2F2", // Very light red
          100: "#FEE2E2", // Light red
          200: "#FECACA", // Medium light red
          300: "#FCA5A5", // Medium red
          400: "#F87171", // Medium dark red
          500: "#B22222", // Base deep red
          600: "#A01F1F", // Dark red
          700: "#8E1C1C", // Darker red
          800: "#7C1919", // Very dark red
          900: "#6A1616", // Deepest red
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'craft': '0 4px 12px rgba(139, 69, 19, 0.1)',
        'craft-lg': '0 8px 24px rgba(139, 69, 19, 0.15)',
        'craft-xl': '0 12px 32px rgba(139, 69, 19, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
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
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}