/**
 * Allows using env variables in scss modules
 */
const variables = [
    `$cdnImages: '${process.env.CDN_IMAGE_URL}';`,
    `$cdnURL: '${process.env.CDN_STATIC_ASSETS}';`,
    `$localeCountry: '${process.env.LOCALE}';`,
]

module.exports = variables.join("");



