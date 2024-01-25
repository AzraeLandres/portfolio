//Install express server
const express = require("express");
const app = express();

app.use(express.static("./dist/"));

app.get("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist/portfolio/" });
});

app.listen(process.env.PORT || 8080);
