const Express = require("express")
const {loginDoctor} = require("../controllers/DoctorControllers/loginDoctor");
const {signUpDoctor} = require("../controllers/DoctorControllers/signUpDoctor");
const router = Express.Router()


router.get("/login",loginDoctor)
router.post("/signup",signUpDoctor)
module.exports = router

