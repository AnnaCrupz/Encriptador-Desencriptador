const mensaje=document.getElementById('mensaje');
const btnEncriptar=document.getElementById('encriptar');
const btnDesencriptar=document.getElementById('desencriptar');
const muestraResultadoVacio=document.getElementById('muestraResultadoVacio');
const mostrarCalc=document.getElementById('resultadoMostrado');
const parrafoResultado=document.getElementById('mostrarResultadoCalc');
const mostrarAlertaErrorMayusAc=document.getElementById('mostrarAlertaErrorMayusAc');
const mostrarAlertaErrorVac=document.getElementById('mostrarAlertaErrorVac');
const btnCopiar=document.getElementById('copiar');
const copiaPortapapelesId=document.getElementById('copiaPortapapeles');


mensaje.addEventListener("keyup",()=>{
  if (mensaje.value=="") {
    muestraResultadoVacio.classList.remove('resultado-vacio-desactivo');
    muestraResultadoVacio.classList.add('resultado-vacio');
    mostrarCalc.classList.remove('resultadoEncriptDesencript-activo');
    //mostrarCalc.classList.add('resultadoEncriptDesencript-activo');
  }
})

btnEncriptar.addEventListener("click",()=>{
  
  if (mensaje.value!="") {
    const textoEncript=mensaje.value;
    let validacion=checarTexto(textoEncript);
    if (validacion) {
      muestraResultadoVacio.classList.add('resultado-vacio-desactivo');
      mostrarCalc.classList.add('resultadoEncriptDesencript-activo');
      parrafoResultado.innerHTML=encriptar(textoEncript);
      
    } else{
      //Alerta de contiene mayusculas o acentos
      mostrarAlertaErrorMayusAc.classList.remove('alertaErroresMayAc');
      mostrarAlertaErrorMayusAc.classList.add('alertaErroresMayAc-activo');
      setTimeout(()=>{
        mostrarAlertaErrorMayusAc.classList.remove('alertaErroresMayAc-activo');
        mostrarAlertaErrorMayusAc.classList.add('alertaErroresMayAc');
      },3000)
    }
  } else{
    //Lanzar alerta porque el campo esta vacio
      mostrarAlertaErrorVac.classList.remove('alertaEnvioVacio');
      mostrarAlertaErrorVac.classList.add('alertaEnvioVacio-activo');
      setTimeout(()=>{
        mostrarAlertaErrorVac.classList.remove('alertaEnvioVacio-activo');
        mostrarAlertaErrorVac.classList.add('alertaEnvioVacio');
      },3000)
  }
});
btnDesencriptar.addEventListener("click",()=>{
  if (mensaje.value!="") {
    const textoDesencript=mensaje.value;
    let validacion=checarTexto(textoDesencript);
    if (validacion) {
      muestraResultadoVacio.classList.add('resultado-vacio-desactivo');
      mostrarCalc.classList.add('resultadoEncriptDesencript-activo');
      parrafoResultado.innerHTML=desencriptar(textoDesencript);
    } else{
      //Alerta de contiene mayusculas o acentos
      mostrarAlertaErrorMayusAc.classList.remove('alertaErroresMayAc');
      mostrarAlertaErrorMayusAc.classList.add('alertaErroresMayAc-activo');
      setTimeout(()=>{
        mostrarAlertaErrorMayusAc.classList.remove('alertaErroresMayAc-activo');
        mostrarAlertaErrorMayusAc.classList.add('alertaErroresMayAc');
      },3000)
    }
  } else{
    //Lanzar alerta porque el campo esta vacio
    mostrarAlertaErrorVac.classList.remove('alertaEnvioVacio');
    mostrarAlertaErrorVac.classList.add('alertaEnvioVacio-activo');
    setTimeout(()=>{
      mostrarAlertaErrorVac.classList.remove('alertaEnvioVacio-activo');
      mostrarAlertaErrorVac.classList.add('alertaEnvioVacio');
    },3000)
  }
})

    btnCopiar.addEventListener("click",() =>{
      //Copiar texto de cuadro encriptado o desencriptado
       let $parrafoResultado=parrafoResultado.innerHTML;
        console.log($parrafoResultado);
        navigator.clipboard.writeText($parrafoResultado)
        .then(()=>{
          copiaPortapapelesId.classList.remove('copiaPortapapeles'),
          copiaPortapapelesId.classList.add('copiaPortapapeles-activo'), 
        
          setTimeout(()=>{
            copiaPortapapelesId.classList.add('copiaPortapapeles');
            copiaPortapapelesId.classList.remove('copiaPortapapeles-activo');  
          },3000)
        })
        .catch(err=>{
          console.log("error al copiar",err);
        })
          
        
         
        }
       
       
      
     
    )


/*Inicio checarTexto(texto):Función para checar si el texto contiene acentos o mayusculas
retorna true si no contiene mayusculas o acentos*/
function checarTexto(texto){
  if (/^[a-z\s]+$/.test(texto)) {
    return true;
  } else{
    return false;
  }
}

/*Fin checarTexto*/



function encriptar(textoEncript) {
    let texto = "";
    let activo = true; //evalua si se debe de seguir buscando
    for (let index = 0; index < textoEncript.length; index++) {
      if (textoEncript[index] == "a") {
        texto += "ai";
      } else if (textoEncript[index] == "e") {
        texto += "enter";
      } else if (textoEncript[index] == "i") {
        texto += "imes";
      } else if (textoEncript[index] == "o") {
        texto += "ober";
      } else if (textoEncript[index] == "u") {
        texto += "ufat";
      } else {
        texto += textoEncript[index];
      }
    }
     //texto trae el mensaje encriptado
    return texto;
}
function desencriptar(textoDesencript) {
  let texto = "";
  let activo = true; //evalua si se debe de seguir buscando
  let letInicio = 0,
    letFinal = 0;

  while (activo == true) {
    if (textoDesencript.substring(letInicio, letFinal + 2) == "ai") {
      texto += "a";
      letInicio += 2;
      letFinal += 2;
      continue;
    } else if (textoDesencript.substring(letInicio, letFinal + 5) == "enter") {
      texto += "e";
      letInicio += 5;
      letFinal += 5;
      continue;
    } else if (textoDesencript.substring(letInicio, letFinal + 4) == "imes") {
      texto += "i";
      letInicio += 4;
      letFinal += 4;
      continue;
    } else if (textoDesencript.substring(letInicio, letFinal + 4) == "ober") {
      texto += "o";
      letInicio += 4;
      letFinal += 4;
      continue;
    } else if (textoDesencript.substring(letInicio, letFinal + 4) == "ufat") {
      texto += "u";
      letInicio += 4;
      letFinal += 4;
      continue;
    } else {
      texto += textoDesencript.substring(letInicio, letFinal + 1);
      letInicio += 1;
      letFinal += 1;
    }
    if (letFinal >= textoDesencript.length) {
      activo = false;
    }
  }
  return texto;
}

