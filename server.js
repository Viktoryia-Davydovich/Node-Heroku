const express = require("express");
const app = new express();

app
  .use(express.static("public"))
  .listen(process.env.PORT || 3000, () => console.log("Started"));
