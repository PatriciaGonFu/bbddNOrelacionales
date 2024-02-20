const mongoose = require("mongoose");

const PhotosSchema = new mongoose.Schema({
    usuario: String,
    url: String,
    titulo: String,
    descripcion: String
});



module.exports = mongoose.model("Photos", PhotosSchema)

