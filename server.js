const Express = require("express")
const BodyParser = require("body-parser")
const dotenv = require("dotenv")
const connectDB = require("./util/connectDB")
dotenv.config()

connectDB()
.then(() => {
	console.log("Database connected successfully")
})
.catch((err) => {
	console.log(err)
})
const app = Express()

app.use(BodyParser.json())

const UserRoutes = require("./Routes/UserRoutes")
const AdminRoutes = require("./Routes/AdminRoutes")
const DoctorRoutes = require("./Routes/DoctorRoutes")

app.use("/user",UserRoutes)
app.use("/admin",AdminRoutes)
app.use("/doctor",DoctorRoutes)


app.get("/",(req,res) => {
	return res.send("<h1>iDOC API</h1>")
})

app.listen(process.env.PORT,() => {
	console.log(`Server started on PORT ${process.env.PORT}`)
})


