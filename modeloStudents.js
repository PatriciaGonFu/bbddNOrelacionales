const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number
});

const TeachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String] 
});

const SubjectsSchema = new mongoose.Schema({
    title: String,
    teachers: [TeachersSchema] 
});

const StudentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarksSchema], 
    subjects: [SubjectsSchema] 
});


module.exports = mongoose.model("Students", StudentsSchema)
