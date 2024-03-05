/** @type {import('tailwindcss').Config}*/
import colors from 'tailwindcss/colors';


export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          black: colors.black,
          white: colors.white,
          gray: colors.slate,
          green: colors.emerald,
          purple: colors.violet,
          yellow: colors.amber,
          pink: colors.fuchsia,
        },
      
    },

    plugins: []
};
