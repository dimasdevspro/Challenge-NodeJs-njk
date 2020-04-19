const express = require('express')
const routes = express.Router()

routes.get('/', function (req, res){
    return res.redirect("/teachers")
})

routes.get('/teachers', function (req, res){
    return res.render("teachers/index")
})

routes.get('/teachers/form', function (req, res){
    return res.render('teachers/form')
})

routes.post("/teachers", function (req, res){
    
    const keys = Object.keys(req.body)
        
        for (key of keys) {
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }    
        }

        return res.send(req.body)
})   

routes.get('/students', function (req, res){
    return res.render("students/students")
})

module.exports = routes
