const UserModel = require("../../Models/UserModel");
const bcrypt = require("bcryptjs");


const loginDoctor = async (req,res) => {
	console.log(req.body)
	const { email,password } = req.body
	try {
		const user = await UserModel.findOne({ email })
		if (!user){
			return res.json({
				msg:"No such doctor exists",
				success:false
			})
		}
		const hashpassword = user.password
		if (bcrypt.compareSync(password,hashpassword)){
			return res.json({
				msg:"Login successful",
				success:true,
				user
			})
		}else {
			return res.json({
				msg:"Wrong credentials",
				success:false
			})
		}

	}catch (e){
		console.log(e)
		return res.json({
			msg:"An unexpected error occurred",
			success:false
		})
	}
}
module.exports = { loginDoctor }
