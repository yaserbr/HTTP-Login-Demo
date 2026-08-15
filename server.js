const path = require("path");
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(publicDir, { index: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.post("/login", (req, res) => {
  res.status(200).type("text/plain").send("OK");
  console.log("POST /login");
  console.log("Status: 200");
});

app.listen(PORT, () => {
  console.log(`Educational HTTP Login Server running at http://localhost:${PORT}`);
});

