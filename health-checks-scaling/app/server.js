const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 8080;

// Optional: simulate CPU-ish work for scaling demos (very lightweight)
app.get("/work", (req, res) => {
    const start = Date.now();
    let x = 0;
    for (let i = 0; i < 5e6; i++) x += i;
    res.json({ host: os.hostname(), ms: Date.now() - start, x });
});

app.get("/", (req, res) => res.send(`hello from ${os.hostname()}\n`));
app.get("/healthz", (req, res) => res.status(200).json({ status: "ok" }));
app.get("/readyz", (req, res) => res.status(200).json({ ready: true }));

app.listen(port, () => console.log(`listening on ${port}`));