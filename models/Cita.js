

module.exports=class Cita{

    //constructor
    constructor(cita){
        this.cId=this.genId()
        this.cName=cita.cName
        this.cLastName=cita.cLastName
        this.cPhone=cita.cPhone
        this.cEmail=cita.cEmail
        this.cDate=cita.cDate
        this.cTime=cita.cTime
    }

    //getters y setter

    //metodos privados
    genId(){
        let aux=""
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (let i = 0; i < 6; i++)
          aux += possible.charAt(Math.floor(Math.random() * possible.length))
        return aux
    }

    validar(){
        let errores=[]
        if(this.cName=="") errores.push({error:"El nombre no puede estar vacio."})
        if(this.cLastName=="") errores.push({error:"El apellido no puede estar vacio."})
        //validacion el e-mail:
        let regEmail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if(!regEmail.test(this.cEmail)) errores.push({error:"El formato del e-mail no es válido"})
        //validar el telefono para saber que empieza por 6
        if(this.cPhone[0]!="6") errores.push({error:"El telefono tiene que empezar por 6"})
        return errores
    }

}


