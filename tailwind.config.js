/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // breakpoints
    screens: {
      sm: '600px',
      md: '700px',
      lg: '900px',
      xlg: '1024px',
      xxlg: '1554px',
    },

    extend: {
      height: {
        header: 'var(--header-height)',
        'header-ss': 'var(--header-height-ss)'
      },
      minHeight: {
        footer: 'var(--footer-height)',
      },
      width: {
        "sidebar-extend": 'var(--sidebar-extend)',
        "sidebar-extend-ss": 'var(--sidebar-extend-ss)',
        "sidebar-shrink": 'var(--sidebar-shrink)'
      },
      colors: {
        'color-blue-1': 'var(--color-blue-1)',
        'color-blue-2': 'var(--color-blue-2)',
        'color-blue-3': 'var(--color-blue-3)',
        'color-blue-4': 'var(--color-blue-4)',

        'color-dark-0': 'var(--color-dark-0)',
        'color-dark-1': 'var(--color-dark-1)',
        'color-dark-2': 'var(--color-dark-2)',
        'color-dark-3': 'var(--color-dark-3)',
        'color-dark-4': 'var(--color-dark-4)',
        'color-dark-5': 'var(--color-dark-5)',
        "danger-bg": "var(--color-danger-bg)",
        "danger-text": "var(--color-danger-text)",
      },
      opacity: {
        pale: '.7'
      },

      keyframes: {
        'skeleton': {
          '0%, 100%': { background: 'hsl(200,20%,60%)' },
          '50%': { background: 'hsl(200,20%,85%)' }
        }
      },
      animation: {
        'skeleton': 'skeleton 1.5s linear infinite alternate'
      }

    },
  },
  plugins: [],
}