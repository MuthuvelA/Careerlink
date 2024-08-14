const sendMailController = require("../controller/sendMailController");
const router = require("express").Router();

router.post('/sendMail',sendMailController.sendMail);

module.exports = router;