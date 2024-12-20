const express = require("express")
const router = express.Router()
const atheletes = require("../controller/pageController")
const authMiddleware = require("../middleware/authMiddleware")
// const signupSchema = require("../validator/authValidator")
// const validator = require("../middleware/validateMiddleware")

// router.route("/").get(auth.home);


router.route('/getAthletes').get(atheletes.getAtheletes);
router.route('/getMedallists').get(atheletes.getMedallists);
router.route('/getMedals').get(atheletes.getMedals);
router.route('/getSchedules').get(atheletes.getSchedules);


module.exports = router;