import { colors } from './src/Constants';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      minWidth: {
        form: '500px',
      },
    },
  },
  safelist: [
    ...colors.flatMap((color) =>
      [100, 200, 300, 400].map((shade) => `bg-${color}-${shade}`)
    ),
  ],
  plugins: [],
};
