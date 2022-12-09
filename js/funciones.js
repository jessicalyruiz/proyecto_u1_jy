function dividir(num1, num2) {
    return num1 / num2
}

function sumar2(num1, num2) {
    return num1 + num2
}

function restar2(n1, n2) {
    return n1 - n2
}

function multiplicar(n1, n2) {
    return n1 * n2
}

function switchFoco() {
    var src=document.getElementById('imgfoco').src;
    if (  src.contains('../image/off.png')) {
        document.getElementById('imgfoco').src = '../image/on.png';
    } else if (document.getElementById('imgfoco').src === 'file:///C:/Users/fing.labcom/Documents/jess/Taller10/proyecto_u1_jy/image/on.png') {
        document.getElementById('imgfoco').src = '../image/off.png';
    }
}