const UserModel = require("../../Models/UserModel")
const generateAvatar = require("../../util/generateAvatar")
const generatehashPassword = require("../../util/generatehashPassword")

const signUpUser = async (req,res) => {
	const { email,phoneNumber,name,gender,password } = req.body
	const existingUser = await UserModel.findOne({ email })
	if (existingUser){
		return res.json({
			msg:"An account with a similar email address was already created",
			success:false
		})
	}else {
		const newUser = new UserModel({
			...req.body,
			password:generatehashPassword(password),
			imageUrl:generateAvatar(name)

		})
		newUser.save()
			.then((user) => {
				return res.json({
					msg:"Account created successfully",
					success:true
				})

			})
			.catch((err) => {
				console.log(err)
				return res.json({
					msg:"An unexpected error occurred",
					success:false
				})
			})

	}



}


module.exports = { signUpUser }
