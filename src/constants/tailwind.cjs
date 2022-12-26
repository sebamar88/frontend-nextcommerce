function withOpacity(variableName) {
    return ({ opacityValue }) => {
        if (opacityValue !== undefined) {
            return `rgba(var(${variableName}), ${opacityValue})`;
        }

        return `rgb(var(${variableName}))`;
    };
}

/**
 * keeping colors of tailwind inside src as constants allows components who use fill attribute
 * to access the pallete of colors programatically
 */
module.exports = {
    withOpacity: withOpacity,
    colors: {
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
        gray: {
            100: "#f9f9fd",
            200: withOpacity("--gray-200"),
            300: "#e2e8f0",
            400: "#cbd5e0",
            // 500: "#a0aec0", old gray-500 is not equal to Figma gray-500
            500: "#CACCD9",
            600: "#718096",
            // 700: "#4c5462", old gray-700 is not equal to Figma gray-700
            700: "#87899C",
            800: withOpacity("--gray-800"),
            900: "#1a202c",
            1000: "#1b2141",
        },
        green: {
            100: "#dafaee",
            200: "#c6f6d5",
            400: "#68d391",
        },
        blue: {
            100: "#F0F6FF",
            150: "#EDEEFF",
            300: "#90cdf4",
            400: "#8891BC",
            500: "#4299e1",
            600: "#3486FA",
            700: "#2b6cb0",
            800: "#566DED",
            900: "#0E3A7A",
            1000: "#1B2141",
        },
        orange: {
            800: "#FF7042",
        },
        "teal-600": "#319795",
        "pink-700": "#b83280",
        "info-banner": "#FFEDBE",
        bluewood: "#29364A",
        riptide: "#89EEC8",
        onahau: "#D1E4FF",
        "red-danger": "#ee1717",
        "skeleton-fallback": "#e9e7e7",
        "blue-majollere": "#7186FA",
        /* New theme colors. */
        cta: withOpacity("--cta"),
        "cta-hover": withOpacity("--cta-hover"),
        "cta-focus": withOpacity("--cta-focus"),
        "cta-disabled": withOpacity("--cta-disabled"),
        //color exclusively for WhatsApp button
        wp: withOpacity("--accent"),
        "wp-hover": "#F56B34",
        error: withOpacity("--error"),
        "primary-text": withOpacity("--primary-text"),
        "secondary-text": withOpacity("--secondary-text"),
        /**
         *  Temporal colors to proper transition to tailwind.
         */
        "disabled-button": "#6c99dc",
    },
};
