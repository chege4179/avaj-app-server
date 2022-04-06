const Express = require("express")
const {loginUser} = require("../controllers/UserControllers/loginUser");
const {signUpUser} = require("../controllers/UserControllers/signUpUser");
const {getAllUsers} = require("../controllers/UserControllers/getAllUsers");
const router = Express.Router()


router.post("/login",loginUser)
router.post("/signup",signUpUser)
router.get("/all",getAllUsers)
module.exports = router
