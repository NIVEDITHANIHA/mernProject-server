/* import mongoose -------------------------- */
const mongoose = require("mongoose")
const userModelschema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }




})
const users = mongoose.model("users", userModelschema)
module.exports = users
