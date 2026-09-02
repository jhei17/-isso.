const checkbox = document.querySelectorAll('.checkbox');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
for (i=0; i < checkbox.length;i++){
 for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = geraSenha;
}
}
console.log(checkbox[0].checked);

const letrasMinusculas = 'abcdefghijklmnopqrstuvxywz';
const numeros = '0123456789';
const simbolos = '!@%*?';

let alfabeto = '';
let alfabeto = '';
if (checkbox[0].checked){
}
let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
let alfabeto = '';
if (checkbox[0].checked){
    alfabeto = alfabeto + letrasMaiusculas;
}
console.log(alfabeto);

if (checkbox[1].checked){
    alfabeto = alfabeto + letrasMinusculas;
}
if (checkbox[2].checked){
    alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
    alfabeto = alfabeto + simbolos;
}

function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas;
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas;
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros;
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
    }
    console.log(alfabeto);
    let senha = '';
    for (let i = 0; i < tamanhoSenha;i++){
        let numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio);
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha;
}