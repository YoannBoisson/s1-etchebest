const { urlencoded } = require("express");
const express = require("express");

const app = express();
const port = 3000;
const mongoose = require("mongoose");

app.use(express.json());
app.use(urlencoded({ extended: true }));

const wilderController = require("./controller/Wilder");

mongoose
  .connect("mongodb://127.0.0.1:27017/wilder", {
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wilderController.findAll);
app.get("/api/wilder/:id", wilderController.findOne)
app.post("/api/wilder/create", wilderController.create);
app.delete("/api/wilder/:id", wilderController.deleteById)
app.put("/api/wilder/:id", wilderController.update);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});
//Start Server
app.listen(port, () => console.log(`Server started on ${port}`));
