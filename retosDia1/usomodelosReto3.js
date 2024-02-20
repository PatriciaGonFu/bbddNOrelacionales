let mongoose = require("mongoose");

let User = require("./modelosReto3");
let Profile = require("./modelosReto3");
let Credentials = require("./modelosReto3");

mongoose.connect('mongodb+srv://PatriciaGonFu:14deJulio!@cluster0.j6yavxj.mongodb.net/');



let userDocument = new User({
    login: "djsisiaia",
    password: "123456"
});

userDocument.save()
    .then((data) => {
        console.log(data);
    })
    
    .catch((err) => {
        console.log(err);
    })

let profileDocument = new Profile({
    name: "fulano",
    surname: "mengano",
    dateOfBirth: "14deJulio",
    Comments: "dergergergvrwe, fvroengfvoergvf",
    Rol: "administrator"
});

profileDocument.save()
    .then((data) => {
        console.log(data);
    })
    
    .catch((err) => {
        console.log(err);
    })

let credentialsDocument = new Credentials({
    address: "Jacinto, 5",
    phone: 900123478,
    email: "hrftn@gmail.com"
});

credentialsDocument.save()
    .then((data) => {
        console.log(data);
    })
    
    .catch((err) => {
        console.log(err);
    })

