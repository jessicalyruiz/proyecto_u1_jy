let operacion=new Array();

function dividir(num1,num2){
    return num1/num2
}

function sumar(num1, num2){
    return num1+num2
}

function restar(n1,n2){
    return n1-n2
}

function multiplicar(n1,n2){
    return n1*n2
}

function agregar(elemento){
    if(operacion.length<3){
        operacion.push(elemento)
        print(elemento)
        return operacion
        
    }else{
        if(operacion[1]==="+"){
            return new Array(sumar(operacion[0],operacion[2]))
        }else if(operacion[1]==="-"){
            return new Array(restar(operacion[0],operacion[2]))
        }else if(operacion[1]==="*"){
            return new Array(multiplicar(operacion[0],operacion[2]))
        }else if(operacion[1]==="/"){
            return new Array(dividir(parseInt( operacion[0]),parseInt( operacion[2])))
        }
    }
    return operacion.toString
}