const express = require("express");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("config-secrets demo\n"));

app.get("/env", (req, res) => {
    res.json({
        APP_NAME: process.env.APP_NAME,
        ENVIRONMENT: process.env.ENVIRONMENT,
        FEATURE_FLAG: process.env.FEATURE_FLAG,
        API_KEY_PRESENT: Boolean(process.env.API_KEY)
    });
});

app.get("/secret", (req, res) => {
    const path = "/var/run/secret/api_key";
    try {
        const data = fs.readFileSync(path, "utf8").trim();
        res.json({ fileMountedSecretPresent: true, length: data.length });
    } catch (e) {
        res.status(404).json({ fileMountedSecretPresent: false, error: e.message });
    }
});

app.listen(port, () => console.log(`listening on ${port}`));