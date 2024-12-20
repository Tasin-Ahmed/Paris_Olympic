const express = require("express")
const router = express.Router()
const auth = require("../controller/authController")
const authMiddleware = require("../middleware/authMiddleware")
// const signupSchema = require("../validator/authValidator")
// const validator = require("../middleware/validateMiddleware")

// router.route("/").get(auth.home);
router.route("/register").post(auth.register);

// router.route("/register").post( validator(signupSchema), auth.register);

router.route("/login").post(auth.login)
router.route("/logout").get(auth.logout)
router.route("/profile").get(authMiddleware, auth.profile)



module.exports = router;