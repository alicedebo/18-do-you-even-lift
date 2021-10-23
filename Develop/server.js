const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 3000;
//const db = require('./app/models');

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitness", { useNewUrlParser: true });

//require("./app/routes/apiRoutes.js")(app);
//require("./app/routes/htmlRoutes.js")(app);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}!`);
});