/* import model Schema -------------------------- */
const users = require("../model/userModelschema")
/* ---------------------------------- user Registration Starts here------------------------------------------------------------------------------- */

exports.ophiztaskRegister = async (req, res) => {
    console.log("registered function");

    /* extract the data from the requrest body i- in index.js json data in to javascript objects */
    const { username, email, password } = req.body
    try {
        const existinguser = await users.findOne({ email: email })
        if (existinguser) {

            res.status(406).json("Already existing User....Login")

        }
        else {
            const newUsers = new users({
                username: username,
                email: email,
                password: password,
            })
            /* save function in mongoosse - to permennnantly store the data in mongodb */
            await newUsers.save()
            res.status(200).json(newUsers)
        }
    }
    catch (err) {
        res.status(401).json(err)

    }
}




/* ---------------------------------- user Registration ends here------------------------------------------------------------------------------- */


/* ---------------------------------- user login starts here------------------------------------------------------------------------------- */

/* install npm i jsonwebtoken for Authorization */
/* import  jsonwebtoken for Authorization */
/* to generate  The token  use jwt.sign */
const jwt = require("jsonwebtoken")
exports.ophiztaskLogin = async (req, res) => {
    console.log("loginFunction");

    const { email, password } = req.body
    try {
        existedUser = await users.findOne({ email: email, password: password })
        if (!existedUser) {
            res.status(406).json("User Not registerd...register")

        } else {
            // a )first argument in jwt is data send inside the token & second is based on which token is generaated

            const token = jwt.sign({ userid: existedUser._id }, "superUserToken")
            res.status(200).json({
                existedUser: existedUser,
                token: token
            })

        }

    }
    catch (err) {
        res.status(401).json(err)
    }
}
/* ---------------------------------- user login ends here------------------------------------------------------------------------------- */
