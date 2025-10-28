const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());

// create
app.get("/set", (req, res) => {
  res.cookie("user", "Alice", { maxAge: 900000 });
  res.send("Cookie set");
});

// read
app.get("/read", (req, res) => res.send(req.cookies));

// delete
app.get("/delete", (req, res) => {
  res.clearCookie("user");
  res.send("Cookie deleted");
});

app.listen(3000);
