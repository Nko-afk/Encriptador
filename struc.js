

const textarea = document.querySelector(".text-area");
const resultado = document.querySelector(".resultado-txt");


function btnEncriptar(){
    const textoEncriptado = Encriptar(textarea.value);
    resultado.value = textoEncriptado;
    textarea.value = "";
    resultado.style.backgroundImage = "none";
}

function btnDesencriptar(){
    const textoDesencriptado = Desencriptar(textarea.value);
    resultado.value = textoDesencriptado;
    textarea.value = "";
    resultado.style.backgroundImage = "none";
}

function Encriptar(stringEncriptado){
    let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase();
    

    for(let i=0; i < matrizCod.length;i++){

        if(stringEncriptado.includes(matrizCod[i][0])){

            stringEncriptado = stringEncriptado.replaceAll(matrizCod[i][0],matrizCod[i][1]);
            
        }

    }

    return stringEncriptado;
}

function Desencriptar(stringDesencriptado){
    let matrizCod = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i=0; i < matrizCod.length;i++){
        if(stringDesencriptado.includes(matrizCod[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCod[i][1],matrizCod[i][0]);
        }
    }
    return stringDesencriptado;
}

function Copiar(){
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    document.execCommand("copy")
    navigator.clipboard.writeText(resultado.value)
        .then(() => {
            alert("Texto copiado al portapapeles: " + resultado.value);
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}