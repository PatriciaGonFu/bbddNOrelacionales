let mongoose = require("mongoose");
let Photos = require("./modeloPhotos");

mongoose.connect('mongodb+srv://PatriciaGonFu:14deJulio!@cluster0.j6yavxj.mongodb.net/photos');

// Controlador de eventos para la conexión
mongoose.connection.on('connected', function () {
    console.log('Conexión establecida con MongoDB');
});

// Controlador de eventos para el error
mongoose.connection.on('error', function (err) {
    console.log('Error en la conexión a MongoDB: ' + err);
});

// Creación de la colección y base de datos "photos"

// let data1 = {
//     usuario: "PericoPalotes",
//     url: "https://cdn.pixabay.com/photo/2023/07/22/09/04/european-shorthair-8142967_1280.jpg",
//     titulo: "gatete",
//     descripcion: "gato pensativo"
// };

// let document1 = new Photos(data1);

// document1.save()
//     .then(function () {
//         console.log("Documento guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function (err) {
//         console.log("Error al guardar el documento: " + err);
// });

// añadir nuevos documentos a la base de datos
// let nuevosDocumentos = [
//     {
//         usuario: "Fulano de Tal",
//         url: "grtbiordejgbojredfogb",
//         titulo: "señor",
//         descripcion: "un señor cualquiera"
//     },
//     {
//         usuario: "Juanito Pérez",
//         url: "gbtrhethre",
//         titulo: "gato curioso",
//         descripcion: "gato explorando"
//     },
//     {
//         usuario: "Usuario1",
//         url: "https://example.com/imagen1.jpg",
//         titulo: "Foto de naturaleza",
//         descripcion: "Hermoso paisaje natural"
//     },
//     {
//         usuario: "Usuario2",
//         url: "https://example.com/imagen2.jpg",
//         titulo: "Retrato de una persona",
//         descripcion: "Retrato en blanco y negro"
//     },
//     {
//         usuario: "Usuario3",
//         url: "https://example.com/imagen3.jpg",
//         titulo: "Foto de ciudad",
//         descripcion: "Vista panorámica de la ciudad"
//     },
//     {
//         usuario: "Usuario4",
//         url: "https://example.com/imagen4.jpg",
//         titulo: "Imagen abstracta",
//         descripcion: "Composición abstracta de formas y colores"
//     },
//     {
//         usuario: "Usuario5",
//         url: "https://example.com/imagen5.jpg",
//         titulo: "Fotografía de comida",
//         descripcion: "Plato de comida exquisita"
//     },
//     {
//         usuario: "Usuario6",
//         url: "https://example.com/imagen6.jpg",
//         titulo: "Foto de mascota",
//         descripcion: "Adorable perro jugando en el parque"
//     }
// ]

// Photos.create(nuevosDocumentos)
// .then(function(result)
// {
//     console.log("Documentos guardados correctamente")
//     mongoose.disconnect();
// })
// .catch(function()
// {
//     console.log("Error al guardar los documentos");
// });


let guardarFoto = async(usuario, url, titulo, descripcion) =>{
    try{
        let nuevaFoto = new Photos({
            usuario, 
            url, 
            titulo,
            descripcion
        });
        await nuevaFoto.save();
        return nuevaFoto;
    } catch (error) {
        console.error("Error al guardar la foto:", error);
        return {error: true, mensaje: "Error al guardar la foto"};
    }
};

let obtenerFotosPorUsuario = async (usuario) =>{
    try{
        let fotos = await Photos.find({usuario});
        console.log(fotos);
        return {error: false, fotos};

    } catch (error) {
        console.error("Error al obtener las fotos del usuario:", error);
        return {error: true, mensaje: "Error al obtener las fotos del usuario"};
    }
};

let modificarDescripcionDeFoto = async (titulo, nuevaDescripcion) =>{
    try{
        await Photos.updateOne({titulo}, {descripcion: nuevaDescripcion});
        return {error: false};
    }catch (error){
        console.error("Error al modificar:", error);
        return {error: true, mensaje: "Error al modificar"};
    }
};

let eliminarFotoPorUsuarioYTitulo = async (usuario, titulo) =>{
    try{
        await Photos.deleteOne({usuario, titulo});
        return {error: false};
    } catch (error){
        console.error("Error al eliminar la foto:", error);
        return {error: true, mensaje: "Error al eliminar la foto"}
    }
};

let eliminarTodasLasFotosPorUsuario = async (usuario) =>{
    try{
        await Photos.deleteMany({usuario});
        return {error: false};
    } catch (error){
        console.error("Error al eliminar las fotos:", error);
        return {error: true, mensaje: "Error al eliminar las fotos"}
    }
};

// Prueba de cada una de las funciones
guardarFoto("Pepito Perez", "htrdhjrth", "Foto cualquiera", "Descripcion de una foto cualquiera");
obtenerFotosPorUsuario("PericoPalotes");
modificarDescripcionDeFoto("Foto de naturaleza", "Paisaje verde y florido");
eliminarFotoPorUsuarioYTitulo("PericoPalotes", "gatete");
eliminarTodasLasFotosPorUsuario("Fulano de Tal");
