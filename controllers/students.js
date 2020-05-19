const fs = require('fs')
const data = require('../data.json')
const {age, date} = require('../utils')
const graduation = require('../utils')

exports.index = function (req, res){
    return res.render("students/index", {students: data.students})
}

exports.show = function (req, res){
    const { id } = req.params

    const foundStudents = data.students.find(function(student){

        return student.id == id

    })

if (!foundStudents) return res.send("Student not found!")

        const student = {
        ...foundStudents,
            age: age(foundStudents.birth),
            services:foundStudents.services.split(","),
            created_at: new Intl.DateTimeFormat("pt-BR").format(foundStudents.created_at),
        }

return res.render("students/show", { student })
}

exports.post = function (req, res){

const keys = Object.keys(req.body) 
    
    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }    

birth = Date.parse(req.body.birth)

let id = 1


const lastStudent = data.students[data.students.length - 1]

if (lastStudent) {
    id = lastStudent + 1
}

data.students.push({
    id,
    ...req.body,
    birth
})

fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")

        return res.redirect('/students')
})

}

exports.form = function (req, res){
    return res.render('students/form')
}

exports.edit = function (req, res){

    const { id } = req.params

    const foundStudents = data.students.find(function(student){
        return student.id == id
    })

    if (!foundStudents) return res.send("Student not found!")

        const student = {
            ...foundStudents,
            birth: date(foundStudents.birth).iso
            }

    return res.render('students/edit', {student})
}

exports.put = function(req, res){
    const { id } = req.body
       
        let index = 0
    const foundStudents = data.students.find(function(student, foundIndex){
        if (id == student.id){
            index = foundIndex
            return true
        }
    })

    if (!foundStudents) return res.send("Student not found!")

    const student = {
        ...foundStudents,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student
      

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write error!")

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = function(req, res){
    const { id } = req.body

    const filteredStudents = data.students.filter(function(student){
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
        if (err) return res.send("Write file error!")

        return res.redirect("/students")
    })
}