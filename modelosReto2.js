const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    password: String
});

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: String,
    Comments: String,
    Rol: String
});

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
});


module.exports = mongoose.model("User", UserSchema)
module.exports = mongoose.model("Profile", ProfileSchema)
module.exports = mongoose.model("Credentials", CredentialsSchema)

