const Student = require('../models/Student')

module.exports = {
    index(req, res){
        Student.all(function(students){
            if(!students) return res.send("Student not found!")

            return res.render("students/index", { students })
        })
    }
}