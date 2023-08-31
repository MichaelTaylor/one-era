const express = require("express");
const app = express();

const { connectDB } = require("./connectDB");

const chapterRoutes = require("./routes/chapterRoutes");
const birthdayRoutes = require("./routes/birthdayRoutes");
const weekRoutes = require("./routes/weekRoutes");

const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();

const port = process.env.PORT || 5000;
app.use(helmet());

connectDB();

app.use(
  cors({
    origin: `${process.env.ORIGIN}`,
  })
);
app.use("/static", express.static(__dirname + "/images"));

app.use(chapterRoutes);
app.use(birthdayRoutes);
app.use(weekRoutes);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
