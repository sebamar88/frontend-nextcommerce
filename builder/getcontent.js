const fs = require("fs");
const path = require("path");
require("dotenv").config();

const { createClient } = require("contentful");

const SPACE = process.env.CONTENTFUL_SPACE || "";
const TOKEN = process.env.CONTENTFUL_TOKEN;
const LOCALE = process.env.LOCALE === "ar" ? "es-AR" : "pt-BR";
const environment = process.env.CONTENTFUL_ENV || "master";

const client = createClient({
    space: SPACE,
    accessToken: TOKEN || "",
    environment: `${environment}`,
});

const types = ["nav", "pageAlternate", "siteSections"];

const getcontent = async () => {
    for (const type of types) {
        console.log("> Getting content for", type);
        try {
            const entries = await client.getEntries({
                content_type: type,
                locale: LOCALE,
            });
            if (entries.total === 1) {
                const { fields } = entries.items[0];
                fs.writeFileSync(
                    path.join(__dirname, "..", "src/data", `${type}.json`),
                    JSON.stringify(fields)
                );
                console.log("> Content gotten and written for", type);
            }
        } catch (err) {
            console.log(err);
        }
    }
    return true;
};

if (process.argv[2] === "install") {
    getcontent();
}

module.exports = getcontent;
