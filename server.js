const Express = require("express")
const BodyParser = require("body-parser")
const dotenv = require("dotenv")

dotenv.config()
const app = Express()

app.use(BodyParser.json())
app.get("/",(req,res) => {
	return res.send("<h1>iDOC API</h1>")
})

app.listen(process.env.PORT,() => {
	console.log(`Server started on PORT ${process.env.PORT}`)
})


