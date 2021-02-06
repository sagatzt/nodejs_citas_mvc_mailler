const express = require('express')
const rtCitas = express.Router()
const daoCitas = require('../dao/daoCitas')
const Cita = require('../models/Cita')
const mailer = require('../modules/mailer')

rtCitas.get('/nueva', (req,res)=>{
    res.render('nueva')
})

rtCitas.post('/procesar', (req, res) => {
    let nuevaCita = new Cita(req.body)
    let errores= nuevaCita.validar()
    if(errores.length==0){
        daoCitas.guardar(nuevaCita)
            .then(cita=>{
                //enviarle un email
                mailer.send(cita.cEmail,'cita')
                res.render('respuesta', { cita: cita})
            })
    }else{
        res.render('nueva',{
            errores:errores,
            cita:nuevaCita
        })
    }
})

rtCitas.get('/consulta',(req,res)=>{
    fs.readFile('citas.json','utf-8', (err,data)=>{
        res.json(data)
    })
})

rtCitas.get('/modificarcita/:id',(req,res)=>{
    let id=req.params.id
    res.send("Has seleccionado modificar la cita: " + id)
})


module.exports=rtCitas
