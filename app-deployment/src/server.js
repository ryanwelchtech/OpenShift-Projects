const express = require("express");
const os = require("os");

const app = express();
app.use(express.json());

const port = process.env.PORT || 8080;
const appName = process.env.APP_NAME || "app-deployment";
const environment = process.env.ENVIRONMENT || "sandbox";

app.get("/", (req, res) => {
    res.status(200).send(`OK - ${appName} (${environment}) on ${os.hostname()}\n`);
});

// Liveness-ish endpoint
app.get("/healthz", (req, res) => {
    res.status(200).json({ status: "ok", app: appName, host: os.hostname() });
});

// Readiness-ish endpoint
app.get("/readyz", (req, res) => {
    // In real apps you might check downstream deps (DB, queues, etc.)
    res.status(200).json({ ready: true, app: appName });
});

app.get("/env", (req, res) => {
    res.status(200).json({
        APP_NAME: appName,
        ENVIRONMENT: environment,
        PORT: port
    });
});

app.listen(port, () => {
    console.log(`[${appName}] listening on port ${port}`);
});