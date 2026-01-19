const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

// public klasörünü site olarak sun
app.use(express.static(path.join(__dirname, "public")));

// test endpointleri
app.get("/health", (req, res) => res.send("ok"));
app.get("/api/ping", (req, res) => res.json({ ok: true }));

// Render PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on", PORT);
});
