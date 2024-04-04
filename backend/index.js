const express = require("express");
const app = express();

const { connectDB } = require("./connectDB");

const chapterRoutes = require("./routes/chapterRoutes");
const birthdayRoutes = require("./routes/birthdayRoutes");
const volumeRoutes = require("./routes/volumeRoutes");
const weekRoutes = require("./routes/weekRoutes");

const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();

const port = process.env.HOST_PORT;
app.use(helmet());

connectDB();

app.use(cors());
app.use("/static", express.static(__dirname + "/images"));

app.use(chapterRoutes);
app.use(birthdayRoutes);
app.use(volumeRoutes);
app.use(weekRoutes);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});
