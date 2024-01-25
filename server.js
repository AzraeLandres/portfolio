//Install express server
const express = require("express");
const app = express();

app.use(express.static("./src/"));

app.get("/*", (req, res) => {
  res.sendFile("app.component.html", { root: "src/app/" });
});

app.listen(process.env.PORT || 8080);
