import type {Config} from "tailwindcss";
import {COLORS} from "./src/constants/colors.const";

const config: Config = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: COLORS
        },
    },
    plugins: [],
};
export default config;
