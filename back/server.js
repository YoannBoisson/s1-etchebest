const express = require("express");
const { urlencoded } = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
const mongoose = require("mongoose");

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cors());

//===Routes
const setupRoutes = require("./routes/index");
setupRoutes(app);

//===Mongoose connection
mongoose
  .connect("mongodb://127.0.0.1:27017/wilder", {
    autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

//Start Server
app.listen(port, () => console.log(`Server started on ${port}`));
