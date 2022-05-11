
 let llaves={
    e:"enter",
    i:"imes",
    a:"ai",
    o:"ober",
    u:"ufat"
}

function filtrarCaracteresEspeciales(cadena){
    let splitCadena=cadena.split('');
    let validar=true
    let validarTexto=new RegExp("[A-Za-z ]")
    for(let i=0; i<splitCadena.length;i++){

        if(!(validarTexto.test(splitCadena[i]))){
            console.log(splitCadena[i])
            validar=false
        }
        
    }
    
    return validar;

}

function convertir(caracter){
    let char='';
    switch(caracter){

        case 'e':
            char="enter";
        break;
        case 'i':
            char="imes";
        break;     
        case 'a':
            char="ai";
        break;
        case 'o':
            char="ober"; 
            break;  
        case 'u':
            char="ufat";
        break;    
    }
    return char;
}
function encryptar(){


    let texto=document.getElementById("txt_input").value //Texto A Descencryptar
    let validarTexto=new RegExp("[A-Z]")
    let txt_input=document.getElementById("txt_input");
    let error=document.querySelector(".mensaje");   
    if(!(filtrarCaracteresEspeciales(texto))){
        error.style.display="block";
        error.textContent="⚠️El texto no acepta caracteres especiales";
        alert("El texto no acepta caracteres especiales");
    }else{
        if((validarTexto.test(texto))){
            error.style.display="block";
            error.style.color="darkorange";
            error.textContent="⚠️El texto no acepta Mayusculas";
            alert("El texto no acepta letras en mayusculas");
            txt_input.style.border="2.5px solid red";
            
        }else{
            error.style.display="none";
            let texto1=texto.split('');
            let textoEncryptado="";
            let resultado=document.getElementById("pResultado");
            txt_input.style.border="2.5px solid purple";
        
            for(let i=0; i<texto1.length;i++){
                if((texto1[i]!='e') && (texto1[i]!='i')&& (texto1[i]!='a') && (texto1[i]!='o') && (texto1[i]!='u')){
                    textoEncryptado+=texto1[i];
                }else{
                    textoEncryptado+=convertir(texto1[i]);
                }
        
            }
        
           
        
            //console.log(texto);
            //console.log(texto1);
          
            resultado.textContent=textoEncryptado;
            resultado.style.border=" 4px dashed purple";
            console.log(textoEncryptado);
            console.log(convertirDesencryptar("ai"));
           
        }
    
    
    }

    

   
    
   
}



function convertirDesencryptar(char){
    let charN="";
    //let cadenaN=cadena.split('');
    for(const k in llaves){
        
        if(char==(llaves[k])){
            charN=k;
        }

    }
    return charN;
}


function desencryptar(){

    let frase=document.getElementById("txt_input").value.split(' ');
    let palabras=[];
    let texto="";
    let textoDesencryptado="";
    let resultado=document.getElementById("pResultado");


    for(let p=0; p<frase.length; p++){
        palabras.push(frase[p]);
    }
    

    for(let i=0; i<palabras.length; i++){
        let palabra=palabras[i];
        for(let x=0; x<palabra.split("").length; x++){
            texto=palabra.replace('enter','e').replace('ai','a').replace('ober','o').replace('ufat','u').replace('imes','i');
            texto=texto.replace('enter','e').replace('ai','a').replace('ober','o').replace('ufat','u').replace('imes','i');;
        }

       textoDesencryptado+=" " +texto;
    }

   
    resultado.textContent=textoDesencryptado;
    resultado.style.border=" 4px dashed blue"
    console.log(textoDesencryptado);




}


function input(){

    let input=document.getElementById("txt_input").value;
    let result=document.getElementById("pResultado");


    result.textContent=input;


}

function copiar(){
    let texto=document.getElementById("pResultado");
    var seleccion = document.createRange();
    seleccion.selectNodeContents(texto);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(seleccion);
    var res = document.execCommand('copy');
    window.getSelection().removeRange(seleccion);



}