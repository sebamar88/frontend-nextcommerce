require("dotenv").config();
const Dotenv = require("dotenv-webpack");
const scssEnvVariables = require("./scss-env-variables.js");

// const getFromEnv = (vars) => {
//     const result = {};
//     vars.forEach((v) => (result[v] = process.env[v]));
//     return result;
// };

const nextConfig = {
    sassOptions: {
        additionalData: scssEnvVariables,
    },
    webpack: (config, { isServer }) => {
        config.plugins = config.plugins || [];
        config.plugins = [...config.plugins, new Dotenv({ systemvars: true })];
        if (!isServer) {
            config.resolve = {
                ...config.resolve,
                fallback: {
                    ...config.resolve.fallback,
                    fs: false,
                    timers: false,
                },
            };
        }
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    // publicRuntimeConfig: getFromEnv([
    // ]),
    trailingSlash: true,
    images: {
        deviceSizes: [640, 768, 1024, 1280, 1536],
        domains: [
        ],
    },
    async headers() {
        return [
            {
                source: "/(.*?)",
                headers: [
                    {
                        key: "Strict-Transport-Security",
                        value: "max-age=63072000; includeSubdomains; preload",
                    },
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "same-origin",
                    },
                    {
                        key: "Referrer-Policy",
                        value: "same-origin",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig
