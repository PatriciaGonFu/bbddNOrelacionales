const mongoose = require("mongoose");

const TeachersSchema = new mongoose.Schema({
    teacher_first_name: String,
    teacher_last_name: String
});

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name: String,
    group_name: String,
    subject_name: String,
    teachers: [TeachersSchema] 
});


module.exports = mongoose.model("Marks", MarksSchema)
