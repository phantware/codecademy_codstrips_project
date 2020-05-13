const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.static("public"));
app.use(cors());

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./db.sqlite");

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
