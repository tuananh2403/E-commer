const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("TRan tuan anh");
});

app.listen(port, () => {
  console.log(port);
});
