import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       mytheme: {
  //         primary: "#ccd5ae",
  //         secondary: "#e9edc9",
  //         accent: "#d4a373",
  //         neutral: "#faedcd",
  //         "base-100": "#f5f7ef",
  //         info: "#aac6c3",
  //         success: "#cee3b7",
  //         warning: "#ffffe0",
  //         error: "#cc958e",
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   green_tea: {
    //     DEFAULT: "#ccd5ae",
    //     100: "#2d331a",
    //     200: "#5b6635",
    //     300: "#88994f",
    //     400: "#acbb7b",
    //     500: "#ccd5ae",
    //     600: "#d6debe",
    //     700: "#e1e6cf",
    //     800: "#ebeedf",
    //     900: "#f5f7ef",
    //   },
    //   green_2: {
    //     DEFAULT: "#e9edc9",
    //     100: "#3d4216",
    //     200: "#79842c",
    //     300: "#b3c146",
    //     400: "#ced788",
    //     500: "#e9edc9",
    //     600: "#edf1d4",
    //     700: "#f2f4df",
    //     800: "#f6f8ea",
    //     900: "#fbfbf4",
    //   },
    //   warning: {
    //     DEFAULT: "#fefae0",
    //     100: "#5d5103",
    //     200: "#baa206",
    //     300: "#f8dc27",
    //     400: "#fbeb84",
    //     500: "#fefae0",
    //     600: "#fefbe7",
    //     700: "#fefced",
    //     800: "#fffdf3",
    //     900: "#fffef9",
    //   },
    //   papaya_whip: {
    //     DEFAULT: "#faedcd",
    //     100: "#533e08",
    //     200: "#a57b10",
    //     300: "#eab227",
    //     400: "#f2d079",
    //     500: "#faedcd",
    //     600: "#fbf1d6",
    //     700: "#fcf4e0",
    //     800: "#fdf8eb",
    //     900: "#fefbf5",
    //   },
    //   accent: {
    //     DEFAULT: "#d4a373",
    //     100: "#32210f",
    //     200: "#64411f",
    //     300: "#96622e",
    //     400: "#c58341",
    //     500: "#d4a373",
    //     600: "#dcb68f",
    //     700: "#e5c8ab",
    //     800: "#eedac7",
    //     900: "#f6ede3",
    //   },
    // },
  },
  // plugins: [require("daisyui")],
});

export default config;
