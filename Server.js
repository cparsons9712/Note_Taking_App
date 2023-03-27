const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("<h1> This is an html script </h1>");
  });

  app.get("/wow/notes", (req, res) => {
    res.json(notes);
  });

  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
