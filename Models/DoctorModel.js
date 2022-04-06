const mongoose = require("mongoose");

const DoctorModel = new mongoose.Schema({
	name:{
		type:String,
		required:true,
	},
	email:{
		type:String,
		required:true,
	},
	phoneNumber:{
		type:String,
		required:true,
	},
	gender:{
		type:String,
		required:true,
	},
	specialization:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	}
})

module.exports = mongoose.model("Doctor",DoctorModel)
