let mongoose = require("mongoose");

let User = require("./modelosReto2");
let Profile = require("./modelosReto2");
let Credentials = require("./modelosReto2");

mongoose.connect('mongodb+srv://PatriciaGonFu:14deJulio!@cluster0.j6yavxj.mongodb.net/');



let userDocument = new User({
    login: "djsisiaia",
    password: "123456abc"
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
    Rol: "User"
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
    email: "fulmen@gmail.com"
});

credentialsDocument.save()
    .then((data) => {
        console.log(data);
    })
    
    .catch((err) => {
        console.log(err);
    })

