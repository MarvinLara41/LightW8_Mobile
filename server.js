const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const config = require("./config");

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

/**Routes */
const workoutRoute = require("./routes/workoutRoute");
const userRoute = require("./routes/userRoute");

/**MongoDB connection */
const MONGODB_URI = config.MONGODB_URI;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

/**using routes */
app.use("/workout", workoutRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server now listening on port ${PORT}`);
});

module.exports = app;
