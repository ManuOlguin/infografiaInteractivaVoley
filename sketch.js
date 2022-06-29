let intervalo;
let myTimeout;
function doIt(){
    intervalo = setInterval(cambiarFoto, 700)
    myTimeout = setTimeout(alerta, 3000);
}
let aux = 0;
let aux2 = true

function alerta(){
    document.getElementById("alerta").style.opacity = 1;
}
function sacarAlerta(){
    clearTimeout(myTimeout);
    document.getElementById("alerta").style.transition = "0.5s";
    document.getElementById("alerta").style.opacity = 0;
}

function cambiarFoto(){
    if(aux2){
        aux +=1;
        if(aux > 5){
            aux = 1;
        }
        document.getElementById("animacion1").src = "assets/foto" + aux + ".jpg"
        document.getElementById("animacion1").style.opacity = 100
        aux2 = false
    }
    else{
        document.getElementById("animacion1").style.opacity = 0
        aux2 = true
    }
}
function doIt2(){
    aux = 0;
    aux2 = true
    intervalo = setInterval(cambiarFoto2, 700)
}
function cambiarFoto2(){
    if(aux2){
        aux +=1;
        if(aux > 3){
            aux = 1;
        }
        document.getElementById("animacion2").src = "assets/foto2" + aux + ".jpg"
        document.getElementById("animacion2").style.opacity = 100
        aux2 = false
    }
    else{
        document.getElementById("animacion2").style.opacity = 0
        aux2 = true
    }


}

let paso = 0;

function pasarPaso(num){
    if(num>paso){
        document.getElementById("paso" + num).style.visibility = "visible"

    switch(num){
        case 1:
            sacarAlerta()
            document.getElementById("animacion1").src= "assets/foto1.jpg"
            clearInterval(intervalo)
            document.getElementById("animacion1").style.opacity = 100
        break;
        case 2:
            document.getElementById("animacion1").src = "assets/vuno (1).gif"
        break;
        case 3:
            document.getElementById("animacion1").src = "assets/vtres (1).gif"
        break;
        case 4:
            document.getElementById("animacion1").src = "assets/animf.gif"
        break;
        case 5:
            window.scrollBy(0, 500);
            doIt2()
            document.getElementById("animacion2").style.visibility = "visible"
        break;
        case 6:
            clearInterval(intervalo)
            document.getElementById("animacion2").style.opacity = 100
            document.getElementById("animacion2").src = "assets/v2uno.gif"
            break;
        case 7:
            document.getElementById("animacion2").src = "assets/v2dos.gif"
            break;
        case 8:
            document.getElementById("animacion2").src = "assets/anim2.gif"
            break;

    }
    }
    

}