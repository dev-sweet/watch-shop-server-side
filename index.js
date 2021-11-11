const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

// middle ware
app.get("/", (req, res) => {
  res.send("Watch shop server is running...");
});

app.listen(port, () => {
  console.log(`watch shop server running at port : ${port}`);
});
