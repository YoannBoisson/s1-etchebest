const wilderRouter = require("express").Router();
const wilderController = require("../controller/wilder.controller");

wilderRouter.get("/api/wilder", wilderController.findAll);
wilderRouter.get("/api/wilder/:id", wilderController.findOne);
wilderRouter.post("/api/wilder", wilderController.create);
wilderRouter.delete("/api/wilder/:id", wilderController.deleteById);
wilderRouter.put("/api/wilder/:id", wilderController.update);

module.exports = wilderRouter
