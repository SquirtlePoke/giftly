const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());

app.use(
  cors({
    origin: "http://http://localhost:8080/",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../src/index.html"));
});

app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;