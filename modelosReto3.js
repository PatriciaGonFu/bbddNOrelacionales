const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    login: String,
    password: {
        type: String,
        validate: [
            function(password){
                return password.length >=8;
            },
            'Password mínimo 8 caracteres'
        ],
        select: false
    }
});

const ProfileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: String,
    Comments: String,
    Rol: {
        type: String,
        enum: ["user", "administrator", "collaborator"]
    }
});

const CredentialsSchema = new mongoose.Schema({
    address: String,
    phone: Number,
    email: String
});

CredentialsSchema.pre('save', async function(next) {
    try {
        const existingCredentials = await this.constructor.findOne({ email: this.email });
        if (existingCredentials) {
            const error = new Error('Este email ya está registrado');
            return next(error);
        }
        next();
    } catch (error) {
        next(error);
    }
});



module.exports = mongoose.model("User", UserSchema)
module.exports = mongoose.model("Profile", ProfileSchema)
module.exports = mongoose.model("Credentials", CredentialsSchema)

