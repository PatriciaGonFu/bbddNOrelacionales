let mongoose = require("mongoose");
let Students = require("./modeloStudents");

mongoose.connect('mongodb+srv://PatriciaGonFu:14deJulio!@cluster0.j6yavxj.mongodb.net/students');

// Controlador de eventos para la conexión
mongoose.connection.on('connected', function () {
    console.log('Conexión establecida con MongoDB');
});

// Controlador de eventos para el error
mongoose.connection.on('error', function (err) {
    console.log('Error en la conexión a MongoDB: ' + err);
});

// Creación de la colección y base de datos "students"

// let data1 = {
//     firstName: "Francisco",
//     lastName: "Ramírez",
//     marks: [
//         {date: new Date("2023-12-12"), mark: 7},
//         {date: new Date("2023-12-17"), mark: 6}
//     ],
//     subjects:[
//         {title: "Francés", teachers: [{firstName: "Rodolfo", lastName: "Françoise", groups: ["A"]}]},
//         {title: "Valores", teachers: [{firstName: "Amparo", lastName: "Lunares", groups: ["B"]}]}
//     ]
// };

// let document1 = new Students(data1);

// document1.save()
//     .then(function () {
//         console.log("Documento guardado correctamente");
//         mongoose.disconnect();
//     })
//     .catch(function (err) {
//         console.log("Error al guardar el documento: " + err);
// });

// const estudiantesNuevos = [
//     {
//         firstName: "Juan",
//         lastName: "Pérez",
//         marks: [
//             { date: new Date("2024-02-20"), mark: 6 },
//             { date: new Date("2024-02-21"), mark: 8.5 }
//         ],
//         subjects: [
//             { title: "Matemáticas", teachers: [{ firstName: "María", lastName: "González", groups: ["A"] }] },
//             { title: "Ciencias", teachers: [{ firstName: "Carlos", lastName: "Martínez", groups: ["B"] }] }
//         ]
//     },
//     {
//         firstName: "Laura",
//         lastName: "Gómez",
//         marks: [
//             { date: new Date("2024-02-20"), mark: 9 },
//             { date: new Date("2024-02-21"), mark: 9.5 }
//         ],
//         subjects: [
//             { title: "Matemáticas", teachers: [{ firstName: "María", lastName: "González", groups: ["A"] }] },
//             { title: "Ciencias", teachers: [{ firstName: "Carlos", lastName: "Martínez", groups: ["B"] }] }
//         ]
//     },
//     {
//         firstName: "Ana",
//         lastName: "Martínez",
//         marks: [
//             { date: new Date("2024-02-20"), mark: 7.5 },
//             { date: new Date("2024-02-21"), mark: 7 }
//         ],
//         subjects: [
//             { title: "Matemáticas", teachers: [{ firstName: "María", lastName: "González", groups: ["A"] }] },
//             { title: "Ciencias", teachers: [{ firstName: "Carlos", lastName: "Martínez", groups: ["B"] }] }
//         ]
//     },
//     {
//         firstName: "David",
//         lastName: "López",
//         marks: [
//             { date: new Date("2024-02-20"), mark: 8.5 },
//             { date: new Date("2024-02-21"), mark: 8 }
//         ],
//         subjects: [
//             { title: "Matemáticas", teachers: [{ firstName: "María", lastName: "González", groups: ["A"] }] },
//             { title: "Ciencias", teachers: [{ firstName: "Carlos", lastName: "Martínez", groups: ["B"] }] }
//         ]
//     }
// ];

// Insertar los nuevos estudiantes en la base de datos
// Students.insertMany(estudiantesNuevos)
//     .then(() => {
//         console.log("Estudiantes añadidos");
//         mongoose.disconnect(); 
//     })
//     .catch(error => {
//         console.error("Error al añadir estudiantes:", error);
//         mongoose.disconnect(); 
//     });

// mostrar todas las notas de un alumno
Students.findOne({ firstName: "Laura", lastName: "Gómez" })
    .then(estudiante => {
        if (!estudiante) {
            console.log("No se encontró al estudiante");
            mongoose.disconnect();
            return;
        }
        estudiante.marks.forEach(nota => {
            console.log(`Fecha: ${nota.date}, Nota: ${nota.mark}`);
        });
        mongoose.disconnect(); 
    })
    .catch(error => {
        console.error(error);
        mongoose.disconnect(); 
    });

// mostrar las asignaturas de un alumno
// Students.findOne({ firstName: "Laura", lastName: "Gómez" })
//     .then(estudiante => {
//         if (!estudiante) {
//             console.log("No se encontró al estudiante");
//             mongoose.disconnect();
//             return;
//         }
//         estudiante.subjects.forEach(asignatura => {
//             console.log(`Asignatura: ${asignatura.title}`);
//         });
//         mongoose.disconnect(); 
//     })
//     .catch(error => {
//         console.error(error);
//         mongoose.disconnect(); 
//     });

    // Mostrar los profesores por alumno
    // Students.findOne({ firstName: "Laura", lastName: "Gómez" })
    // .then(estudiante => {
    //     if (!estudiante) {
    //         console.log("No se encontró al estudiante");
    //         mongoose.disconnect();
    //         return;
    //     }
    //     estudiante.subjects.forEach(asignatura => {
    //         asignatura.teachers.forEach(profesor => {
    //             console.log(`Profesor: ${profesor.firstName} ${profesor.lastName}`);
    //         });
    //     });
    //     mongoose.disconnect(); 
    // })
    // .catch(error => {
    //     console.error(error);
    //     mongoose.disconnect(); 
    // });