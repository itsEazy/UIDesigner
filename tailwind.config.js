/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foundation-sage': '#4A5D4F',
        'sacred-white': '#FDFCF8',
        'grounded-charcoal': '#2C2C2C',
        'prayer-blue': '#5B8FA8',
        'testimony-gold': '#D4A574',
        'growth-green': '#6B8E23',
        'fellowship-purple': '#8B7D8B',
        'encourage-amber': '#E6B85C',
        'active-orange': '#D17A3A',
        'gentle-rose': '#B85C7A',
        'wisdom-teal': '#4A8B8B',
        'neutral-stone': '#8B8B8B',
        'soft-pearl': '#F8F6F3',
      },
      fontFamily: {
        'sans': ['Inter', 'SF Pro Text', 'Roboto', 'system-ui', 'sans-serif'],
        'serif': ['Source Serif Pro', 'serif'],
      },
    },
  },
  plugins: [],
}