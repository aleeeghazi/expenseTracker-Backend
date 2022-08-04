const express = require("express");
const auth = require("../controllers/auth");
const router = express.Router();

router.route("/register").post(auth.register);
router.route("/login").post(auth.login);
router.route("/forgotPassword").post(auth.forgotPassword);
router.route("/resetPassword/:resetToken").put(auth.resetPassword);

module.exports = router;
