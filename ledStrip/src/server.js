const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 80;

const CONFIG_PATH = path.join(__dirname, "data.json");
const PASS_PATH = path.join(__dirname, "pass.txt");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// =======================
// LOAD PASSWORD AT START
// =======================
let SERVER_PASSWORD = "";

function loadPassword() {
    try {
        SERVER_PASSWORD = fs.readFileSync(PASS_PATH, "utf8").trim();
        console.log("Password loaded");
    } catch (err) {
        console.error("Cannot load password file:", err);
        SERVER_PASSWORD = "";
    }
}

loadPassword();

// =======================
// AUTH ONLY FOR POST
// =======================
function checkPassword(req, res, next) {
    const password = req.headers["x-password"];

    if (!SERVER_PASSWORD) {
        return res.status(500).json({ error: "Server password not set" });
    }

    if (password !== SERVER_PASSWORD) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    next();
}

// =======================
// GET CONFIG (NO AUTH)
// =======================
app.get("/data.json", (req, res) => {
    fs.readFile(CONFIG_PATH, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Cannot read config" });
        }

        res.json(JSON.parse(data));
    });
});

// =======================
// POST CONFIG (PROTECTED)
// =======================
app.post("/data.json", checkPassword, (req, res) => {
    const newConfig = req.body;

    fs.writeFile(
        CONFIG_PATH,
        JSON.stringify(newConfig, null, 2),
        (err) => {
            if (err) {
                return res.status(500).json({ error: "Cannot write config" });
            }

            res.json({ ok: true });
        }
    );
});

// =======================
// START SERVER
// =======================
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});