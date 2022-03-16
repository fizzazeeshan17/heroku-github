const express = require("express");
const app = express();
const PORT = process.env.PORT || 5417;

//serve frontend
app.use(express.static("client"));


app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
