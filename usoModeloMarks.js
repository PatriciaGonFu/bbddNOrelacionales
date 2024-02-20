let mongoose = require("mongoose");
const Marks = require("./modeloMarks");

mongoose.connect('mongodb+srv://PatriciaGonFu:14deJulio!@cluster0.j6yavxj.mongodb.net/marks');

mongoose.connection.on('connected', function () {
    console.log('Conexión establecida con MongoDB');
});

mongoose.connection.on('error', function (err) {
    console.log('Error en la conexión a MongoDB: ' + err);
});

// let data1 = {
//     date: "2022-05-13",
//     mark: 6,
//     student_first_name: "Elena",
//     student_last_name: "Alcaide",
//     group_name: "Primero A",
//     subject_name: "Geografía",
//     teachers: [
//         {teacher_first_name: "David", teacher_last_name: "Ruiz"},
//         {teacher_first_name: "Raúl", teacher_last_name: "Amor"},
//         {teacher_first_name: "María", teacher_last_name: "Pérez Pérez"}
//     ]
// };

// let document1 = new Marks(data1);

// document1.save()
//     .then(function (){
//         console.log("Documento guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function(err){
//         console.log("Error al guardar el documento:" + err);
//     });

// const notasNuevas = [
//     {
//         date: new Date("2024-02-20"),
//         mark: 8,
//         student_first_name: "Juan",
//         student_last_name: "Pérez",
//         group_name: " Primero A",
//         subject_name: "Matemáticas",
//         teachers: [
//             { teacher_first_name: "María", teacher_last_name: "González" }
//         ]
//     },
//     {
//         date: new Date("2024-02-21"),
//         mark: 4,
//         student_first_name: "Juan",
//         student_last_name: "Pérez",
//         group_name: "Segundo A",
//         subject_name: "Ciencias",
//         teachers: [
//             { teacher_first_name: "Carlos", teacher_last_name: "Martínez" }
//         ]
//     },
//     {
//         date: new Date("2024-02-22"),
//         mark: 9,
//         student_first_name: "Laura",
//         student_last_name: "Gómez",
//         group_name: "Primero B",
//         subject_name: "Matemáticas",
//         teachers: [
//             { teacher_first_name: "María", teacher_last_name: "González" }
//         ]
//     },
//     {
//         date: new Date("2024-02-23"),
//         mark: 9.5,
//         student_first_name: "Laura",
//         student_last_name: "Gómez",
//         group_name: "Primero B",
//         subject_name: "Ciencias",
//         teachers: [
//             { teacher_first_name: "Carlos", teacher_last_name: "Martínez" }
//         ]
//     },
//     {
//         date: new Date("2024-02-24"),
//         mark: 7,
//         student_first_name: "Ana",
//         student_last_name: "Martínez",
//         group_name: "Segundo C",
//         subject_name: "Matemáticas",
//         teachers: [
//             { teacher_first_name: "María", teacher_last_name: "González" }
//         ]
//     },
//     {
//         date: new Date("2024-02-25"),
//         mark: 6,
//         student_first_name: "Ana",
//         student_last_name: "Martínez",
//         group_name: "Cuarto C",
//         subject_name: "Ciencias",
//         teachers: [
//             { teacher_first_name: "Carlos", teacher_last_name: "Martínez" }
//         ]
//     },
//     {
//         date: new Date("2024-02-26"),
//         mark: 8.5,
//         student_first_name: "David",
//         student_last_name: "López",
//         group_name: "Cuarto C",
//         subject_name: "Matemáticas",
//         teachers: [
//             { teacher_first_name: "María", teacher_last_name: "González" }
//         ]
//     },
//     {
//         date: new Date("2024-02-27"),
//         mark: 8,
//         student_first_name: "David",
//         student_last_name: "López",
//         group_name: "Primero A",
//         subject_name: "Ciencias",
//         teachers: [
//             { teacher_first_name: "Carlos", teacher_last_name: "Martínez" }
//         ]
//     },
//     {
//         date: new Date("2024-02-28"),
//         mark: 4,
//         student_first_name: "Elena",
//         student_last_name: "Sánchez",
//         group_name: "Primero A",
//         subject_name: "Matemáticas",
//         teachers: [
//             { teacher_first_name: "María", teacher_last_name: "González" }
//         ]
//     },
//     {
//         date: new Date("2024-02-29"),
//         mark: 5,
//         student_first_name: "Elena",
//         student_last_name: "Sánchez",
//         group_name: "Primero A",
//         subject_name: "Ciencias",
//         teachers: [
//             { teacher_first_name: "Carlos", teacher_last_name: "Martínez" }
//         ]
//     }

// ]

// Marks.insertMany(notasNuevas)
//     .then(() =>{
//         console.log("Notas añadidas");
//         mongoose.disconnect();
//     })
//     .catch(error =>{
//         console.error("Error al añadir notas:", error);
//         mongoose.disconnect();
//     })


// Calcular la nota media de los alumnos de una asignatura concreta
// Calcular la nota media de los alumnos de una asignatura concreta
async function calcularNotaMediaAsignatura(nombreAsignatura) {
    try {
        const alumnos = await Marks.find({ "subject_name": nombreAsignatura });
        let sumaNotas = 0;
        let totalAlumnos = 0;
        for (const alumno of alumnos) {
            sumaNotas += alumno.mark;
            totalAlumnos++;
        }
        const notaMedia = sumaNotas / totalAlumnos;
        return notaMedia;
    } catch (error) {
        console.error("Error al calcular la nota media de la asignatura:", error);
        return null;
    }
}


// Calcular el número total de alumnos incluyendo repetidos
async function calcularTotalAlumnos() {
    try {
        const totalAlumnos = await Marks.countDocuments();
        return totalAlumnos;
    } catch (error) {
        console.error("Error al calcular el número total de alumnos:", error);
        return null;
    }
}


// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos
async function listarAlumnos() {
    try {
        const alumnos = await Marks.find({}, { _id: 0, student_first_name: 1, student_last_name: 1 });
        return alumnos;
    } catch (error) {
        console.error("Error al listar los alumnos:", error);
        return null;
    }
}


// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto
async function calcularTotalAlumnosPorGrupo() {
    try {
        const totalAlumnosPorGrupo = await Marks.aggregate([
            { $group: { _id: "$group_name", total: { $sum: 1 } } },
            { $sort: { _id: -1 } }
        ]);
        return totalAlumnosPorGrupo;
    } catch (error) {
        console.error("Error al calcular el número total de alumnos por grupo:", error);
        return null;
    }
}



// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5
async function obtenerTopAsignaturas() {
    try {
        const topAsignaturas = await Marks.aggregate([
            { $group: { _id: "$subject_name", media: { $avg: "$mark" } } },
            { $match: { media: { $gt: 5 } } },
            { $sort: { media: -1 } },
            { $limit: 5 }
        ]);
        return topAsignaturas;
    } catch (error) {
        console.error("Error al obtener el top de asignaturas:", error);
        return null;
    }
}


// Calcular el número de profesores que hay por cada asignatura incluyendo repetidos
async function calcularNumeroProfesoresPorAsignatura() {
    try {
        const profesoresPorAsignatura = await Marks.aggregate([
            { $unwind: "$teachers" },
            { $group: { _id: "$subject_name", totalProfesores: { $sum: 1 } } }
        ]);
        return profesoresPorAsignatura;
    } catch (error) {
        console.error("Error al calcular el número de profesores por asignatura:", error);
        return null;
    }
}


// Uso de las funciones
calcularNotaMediaAsignatura("Matemáticas").then(notaMedia => console.log("Nota media de Matemáticas:", notaMedia));
// calcularTotalAlumnos().then(total => console.log("Total de alumnos:", total));
// listarAlumnos().then(alumnos => console.log("Listado de alumnos:", alumnos));
// calcularTotalAlumnosPorGrupo().then(totalPorGrupo => console.log("Total de alumnos por grupo:", totalPorGrupo));
// obtenerTopAsignaturas().then(topAsignaturas => console.log("Top 5 de asignaturas:", topAsignaturas));
// calcularNumeroProfesoresPorAsignatura().then(profesoresPorAsignatura => console.log("Profesores por asignatura:", profesoresPorAsignatura));
