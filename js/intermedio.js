function prueba(){
    /*variables*/
    var a='jessi' //ya no se usaporq ocupa mucho espacio de memoria
    let b;//es igual q el var pero mas eficiente
    const c=12;//constantes
    console.log(a);

    let valorSrc=document.getElementById('img1').src
    console.log(valorSrc)
    let arreglo=['lunes', 'martes', 'mier']
    arreglo.push('jueves')
    console.log(arreglo)

    /*desestructuracion*/ //tomar un objeto y partirle
    const dias= ['lunes', 'martes', 'mier','jueves', 'viernes', 'sabado', 'dom']
    const[dia1, d2, d3, d4, d5, d6, d7]=dias
    console.log(d4)

    const [d1,dj2]= ['lunes', 'martes', 'mier','jueves', 'viernes', 'sabado', 'dom']
    console.log(d1)
    console.log(dj2)

    /*manejo de objetos*/
    const jessi={
        cedula:"2300115078",
        nombre:"Jessica",
        apellido:"yanez",
        edad:30,
        ciudad:"santo",
    }
    console.log(jessi)

    //compuesto
    const persona={
        cedula:"2300115078",
        nombre:"Jessica",
        apellido:"yanez",
        edad:30,
        ciudad:"santo",
        direccion:{
            calle: "av america",
            numero:"OE2-56",
            referencia:"Frente al cci"
        },
        materia:{
            nombre:"p web",
            creditos:50
        }
    }
    console.log(persona)


    //desestructuracion de objetos
    const{cedula, edad, materia}=persona
    console.log(cedula)
    console.log(materia)

    const{ nombre}=materia
    console.log(nombre)

    let val=this.fun2()
    console.log(val)
}

function fun2(){
    console.log("Segunda Func")
    return 'valor'
}