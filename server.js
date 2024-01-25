const path = require("path");
//Install express server

const express = require("express");
const app = express();

app.use(express.static(__dirname + "/dist/browser"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/browser/index.html"));
});

app.listen(process.env.PORT || 4200);
