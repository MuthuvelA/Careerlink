const addJobController = require("../controller/addJobController");
const getJobController = require("../controller/getJobController");
const router = require("express").Router();

router.post("/addJob",addJobController.addJob);
router.post("/getJob",getJobController.getJob);

module.exports = router;