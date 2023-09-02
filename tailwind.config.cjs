const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
        },
        fontFamily: {
            sans: ['var(--aw-font-sans)', ...defaultTheme.fontFamily.sans],
            serif: ['var(--aw-font-serif)', ...defaultTheme.fontFamily.serif],
            heading: ['var(--aw-font-heading)', ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [require('@tailwindcss/typography')],
    darkMode: 'class',
};
