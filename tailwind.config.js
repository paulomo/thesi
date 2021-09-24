module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryOne: "#F18900",
        secondaryTwo: "#055A83",
        mainblue: "#0FA5F9",
        secondaryblue: "#376BF0",
        mainorange: "#F9A93B",
        minororange: "#FF9759",
        secondaryorange: "#F4A641",
        babywhite: "#FDFFFC",
        background: "#E9EDF1",
        darkbluelight: "#2A336C",
        darkbluedark: "#232A55",
        textPrimaryColor: "#242A55",
        textSecondaryColor: "#242A55",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
