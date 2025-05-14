// tailwind.config.js

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '64': '64px', // 自訂 .rounded-64
      },
    },
  },
  plugins: [],
}