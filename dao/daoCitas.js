const Cita = require('../models/Cita')
const fs = require('fs')

const daoCitas={}

//funcion para guardar citas
daoCitas.guardar=function guardar(cita){
    return new Promise((resolved,reject)=>{
        let citas=[]
        fs.readFile('./dao/citas.json', (err, data) => {
            if(err) reject(err)
            citas=JSON.parse(data)
            citas.push(cita)
            fs.writeFile('./dao/citas.json',JSON.stringify(citas),(err)=>{
                if(err)reject(err)
                resolved(cita)   
            })
        })
    })
}
//función para modificar citas

//buscar citas por id
daoCitas.findById=function findById(id){
    return new Promise((resolved,reject)=>{
        let citas=[]
        fs.readFile('./dao/citas.json', (err, data) => {
            if(err) reject(err)
            citas=JSON.parse(data)
        })
        resolved(citas.find(cita=>cita.id=id))
    })
}
//buscar citas por email

//función para eliminar citas

module.exports=daoCitas
