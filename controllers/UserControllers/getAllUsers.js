const UserModel = require("../../Models/UserModel")

const getAllUsers = async (req,res) => {
	try{
		const users = await UserModel.find({  })
		return res.json({
			msg:"All users created successfully",
			success:true,
			users
		})
	}catch (e){
		console.log(e)
		return res.json({
			msg:e.message || "An unexpected error occurred",
			success:false,

		})
	}
}

module.exports = { getAllUsers }
