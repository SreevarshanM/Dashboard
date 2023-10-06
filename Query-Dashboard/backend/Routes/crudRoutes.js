const express = require("express");
const crudController = require("../Controllers/crudController");

const router = express.Router();

router.route("/createQuery").post(crudController.createQuery);
router.route("/getQuery").get(crudController.getQueries);
router.route("/getQueryDetails").get(crudController.getQueryDetails);
router.route("/deleteQuery").delete(crudController.deleteQuery);
router.route("/updateQuery").patch(crudController.updateQuery);

module.exports = router;
