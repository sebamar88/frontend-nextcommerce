var customTailwind = require("./src/constants/tailwind.cjs");
const CDN_STATIC_ASSETS = process.env.CDN_STATIC_ASSETS;

module.exports = {
    import: true,
    content: [
        "./src/pages/**/*.tsx",
        "./src/components/**/*.tsx",
        "./src/containers/**/*.tsx",
    ],
    safelist: ["bg-orange-800"],
    theme: {
        screens: {
            xs: "360px",
            "2xs": "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1366px",
            "3xl": "1920px",
        },
        stroke: () => ({
            blue: customTailwind.withOpacity("--link"),
            current: "currentColor",
        }),
        extend: {
            backgroundImage: () => ({
                "landing-c2b-bg-2x": `url('${CDN_STATIC_ASSETS}/landing-c2b/happy-girl-buying-a-car-2x.webp')`,
                "landing-c2b-bg-1x": `url('${CDN_STATIC_ASSETS}/landing-c2b/happy-girl-buying-a-car.webp')`,
                "landing-c2b-horizontal":
                    "linear-gradient(87.04deg, rgba(242, 243, 248, 0.98) 53.07%, rgba(242, 243, 248, 0.49) 61.36%, rgba(255, 255, 255, 0) 68.29%);",
            }),
            backgroundSize: {
                xs: "1200px",
                sm: "2000px",
                xl: "2200px",
                full: "100%",
                hd: "1920px",
                "100-auto": "100% auto",
                "150-auto": "150% auto",
            },
            maxWidth: {
                "4-5xl": "51rem",
            },
            backgroundPosition: {
                "center-top": "center 1rem",
            },
            gridTemplateRows: {
                10: "repeat(10, minmax(0, 1fr))",
            },
            boxShadow: {
                cta: "0 0px 19px 0px rgba(var(--cta), 0.34)",
                containers:
                    "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
                troca: "-5px 0 15px rgba(0, 0, 0, 0.1), 5px 0 15px rgba(0, 0, 0, 0.05)",
                fixed: "0px 20px 25px rgb(0 0 0 / 7%), 0px 1px 10px rgb(0 0 0 / 7%)",
                mapCard: "0px 0px 4px #566DED, 0px 4px 6px rgba(0, 0, 0, 0.08)",
            },
            inset: {
                "1/2": "50%",
            },
            width: {
                88: "22rem",
                100: "25rem",
                120: "30rem",
                33: "33%",
                fit: "fit-content",
            },
            height: {
                88: "22rem",
                100: "25rem",
                120: "30rem",
            },
            lineHeight: {
                13: "3.5rem",
            },
            colors: customTailwind.colors,
            content: {
                locationMarker: 'url("/static/img/catalog/locationMarker.svg")',
            },
            spacing: {
                22: "6.5rem",
                68: "17rem",
                100: "27rem",
            },
            transitionProperty: {
                "max-height": "max-height",
            },
            strokeWidth: {
                3: "3",
            },
            cursor: {
                grab: "grab",
                "not-allowed": "not-allowed",
            },
            animation: {
                show: "show 200ms ease-in forwards",
                "show-slow": "show 400ms ease-in forwards",
                hide: "hide 200ms ease-in forwards",
                skeleton: "skeleton 2s ease-in-out  infinite",
                dash: "dash 1.5s ease-in-out infinite",
                slide: "slide 200ms ease-in-out forwards",
            },
            keyframes: {
                show: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                hide: {
                    "100%": { opacity: 1 },
                    "0%": { opacity: 0 },
                },
                skeleton: {
                    "0%": { opacity: 0 },
                    "50%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
                dash: {
                    "0%": {
                        "stroke-dasharray": "1, 150",
                        "stroke-dashoffset": 0,
                    },
                    "50%": {
                        "stroke-dasharray": "90, 150",
                        "stroke-dashoffset": -35,
                    },
                    "100%": {
                        "stroke-dasharray": "90, 150",
                        "stroke-dashoffset": -124,
                    },
                },
                slide: {
                    "0%": { transform: "translate(-100%)" },
                    "100%": { transform: "translate(0)" },
                },
            },
            fontSize: {
                tiny: ["10px", "14px"],
                xs: ["12px", "18px"],
                sm: ["14px", "21px"],
                base: ["16px", "24px"],
                lg: ["18px", "27px"],
                xl: ["22px", "30px"],
                "2xl": ["26px", "34px"],
                "3xl": ["30px", "42px"],
                "4xl": ["36px", "44px"],
                "5xl": ["48px", "62px"],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        a: {
                            color: theme("colors.cta"),
                            textDecoration: `none`,
                            fontWeight: 700,
                        },
                        strong: {
                            color: theme("colors.cta"),
                            textDecoration: `none`,
                            fontWeight: 500,
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/line-clamp"),
    ],
};
