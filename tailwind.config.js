/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
        backgroundImage: {
            "hero-mobile": "url(../images/mobile/image-hero.jpg)",
            "hero-desktop": "url(../images/desktop/image-hero.jpg)",
        },
        colors: {
            white: "hsl(0, 0%, 100%)",
            black: "hsl(0, 0%, 0%)",
            gray: {
                dark: "hsl(0, 0%, 55%)",
                "very-dark": "hsl(0, 0%, 41%)"
            }
        },
        fontFamily: {
            "alata": ['Alata', "sans-serif"],
            "josefin-sans": ["Josefin Sans", "sans-serif"]
        }
    },
    plugins: [],
}