const express = require('express')
const routes = express.Router()
const students = require('./app/controllers/students')

routes.get('/', function(req, res){
    return res.redirect('/students')
})

routes.get('/students', students.index)

module.exports = routes