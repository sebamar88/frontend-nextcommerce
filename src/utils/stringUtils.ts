export const capitalize = (text: string): string =>
    text && `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`;

export const capitalizeAllWords = (str: string, lower = false) =>
    (lower ? str.toLowerCase() : str).replace(
        /(?:^|\s|["'([{-])+\S/g,
        (match) => match.toUpperCase()
    );

export const invertColor = (hex: string): string => {
    if (hex.indexOf("#") === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error("Invalid HEX color.");
    }
    return hex > "888888" ? "black" : "white";
};

export const containsWord = (phrase: string, word: string) =>
    phrase.toLowerCase().includes(word.toLowerCase());

export const getBrandParsedName = (brand: string) =>
    `${brand.toLocaleLowerCase().replace(/ /, "-").toLowerCase()}`;

export const seriealizeStringsForUrl = (text: string) =>
    text.replace(/ /g, "-").toLowerCase();

export const slugify = (input: string, withDots = false) => {
    if (!input) {
        return "";
    }
    let str = input
        .toString() // The year filter is a number.
        .toLowerCase()
        .trim()
        .replace(/[àáäâã]/g, "a") // remove accents
        .replace(/[èéëê]/g, "e")
        .replace(/[ìíïî]/g, "i")
        .replace(/[òóöôõ]/g, "o")
        .replace(/[ùúüû]/g, "u")
        .replace(/ñ/g, "n") // replace ñ with n
        .replace(/ç/g, "c") // replace ç with c
        .replace(/[·\/_,:;]/g, "-")
        .replace(/[^a-z0-9 -.]/g, "");
    if (!withDots) {
        // replace dots with none
        str = str.replace(/\./g, "");
    }
    return str
        .replace(/\s+/g, "-") // collapse whitespace and replace by -
        .replace(/-+/g, "-");
};

export function cartesianProduct<T>(...allEntries: T[][]): T[][] {
    return allEntries.reduce<T[][]>(
        (results, entries) =>
            results
                .map((result) => entries.map((entry) => result.concat([entry])))
                .reduce((subResults, result) => subResults.concat(result), []),
        [[]]
    );
}

export const containsYear = (phrase: string): boolean => {
    const date_regex = /(20)[0-9]{2}/;
    return date_regex.test(phrase);
};

export const replaceAll = (
    originalWord: string,
    wordToReplace: string,
    replacement: string
): string => {
    const regex = new RegExp(wordToReplace, "gi");
    return originalWord.replace(regex, replacement);
};

export const createBreadcrumbUrls = (baseUrl: string, items?: string[]) => {
    if (!items) return `/${baseUrl}/`;
    const paramsSlug = items.map((p) => slugify(p));
    return `/${[baseUrl, ...paramsSlug].join("/")}/`;
};

export const carrouselSlugs = (slugs?: string[]): string | undefined => {
    if (!slugs) return undefined;

    const mapSlugs = slugs.map((slug) => `${slugify(slug)}/`);
    const isBr = process.env.LOCALE === "br";

    return isBr
        ? `/carros-usados/${mapSlugs.join("")}`
        : `/autos-usados/${mapSlugs.join("")}`;
};
