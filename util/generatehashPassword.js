const bcrypt = require("bcryptjs")

function generatehashPassword(password){
	const salt = bcrypt.genSaltSync(10)
	return bcrypt.hashSync(password, salt)
}

module.exports = generatehashPassword
