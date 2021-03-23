module.exports = {
  important: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#e00009",
        success: "#00da62",
        gray: "#f6f7f9",
        light: "#eceff5",
        purple: "#5b00dd",
      },
      borderRadius: {
        large: "1.5rem",
      },
      spacing: {
        "card-campaign": "400px",
      },
      backgroundColor: ["active"],
    },
    backgroundImage: (theme) => ({
      profile: "url('/static/images/profile.jpg')",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
