const fs = require('fs')
const data = require('./data.json')
const {age} = require('./utils')
const graduation = require('./utils')

exports.show = function (req, res){
    const { id } = req.params

    const foundTeachers = data.teachers.find(function(teacher){

        return teacher.id == id

    })

if (!foundTeachers) return res.send("Teacher not found!")

        const teacher = {
        ...foundTeachers,
            age: age(foundTeachers.birth),
            services:foundTeachers.services.split(","),
            created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeachers.created_at),
        }

return res.render("teachers/show", { teacher: foundTeachers })
}

exports.post = function (req, res){

//validação
const keys = Object.keys(req.body) 
    
    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }    

//tratamento

let {avatar_url, birth, name, services, classes, graduation} = req.body

birth = Date.parse(birth)
const created_at = Date.now()
const id = Number(data.teachers.length +1)

//organizando

data.teachers.push({
    id,
    avatar_url,
    name,
    birth,
    graduation,
    classes,
    services,
    created_at,
})

fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err){
    if (err) return res.send("Write file error!")

        return res.redirect('/teachers')
})

}