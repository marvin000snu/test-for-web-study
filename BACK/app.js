const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require("dotenv").config();

const apiRouter = require("./routes/api-router");
app.use("/api", apiRouter);
app.use("/", (req, res, next) => {
  res.json({ message: "서버켜짐" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.json({ message: err });
});

app.listen(process.env.PORT || 3001, () => {
  console.log("running!!!");
});
app.use(cors());
