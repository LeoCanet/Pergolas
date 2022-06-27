const router = require("express").Router();
const pergolasController = require("../pergolas/pergolas.controller");

router.get("/", pergolasController.findAll);

router.delete("/delete/:id", pergolasController.delete);

router.patch("/update/:id", pergolasController.update);

router.get("/:id", pergolasController.findOne);

router.post("/pergolas-add", pergolasController.addPergolas);

module.exports = router;