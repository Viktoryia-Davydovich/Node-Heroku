const express = require("express");
const bodyParser = require("body-parser");

const vd = require("./validation");

const app = new express();

app
  .use(express.static("public"))
  .use(bodyParser.urlencoded({ extended: true }))
  .post("/submit", (req, res) => {
    const userName = req.body.user;
    const password = req.body.password;

    if (
      vd.validation.email.test(userName) &&
      vd.validation.password.test(password)
    ) {
      res.send("Success!");
    } else {
      res.send("Wrong data!");
    }
  })
  .listen(process.env.PORT || 3000, () => console.log("Started"));
