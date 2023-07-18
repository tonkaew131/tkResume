/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            fontFamily: {
                merri: ['Merriweather', 'serif'],
            },
            colors: {
                text: '#2e3d50'
            }
        },
    },
    plugins: [],
}
