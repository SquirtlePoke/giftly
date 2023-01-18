const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

const userRouter = require("./routers/userRouter.js");

const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://http://localhost:8080/",
    credentials: true,
  })
);
app.use(cookieParser());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../../dist")));
}

app.get("/", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "../../dist/index.html"));
});

app.use("/users", userRouter);

app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error caught in unknown middleware error",
    status: 400,
    message: { err: "an error occured" },
  };
  const errorObj = Object.assign(defaultErr, err);
  return res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
