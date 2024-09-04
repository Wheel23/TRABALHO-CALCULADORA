
function addNumero(numero){
    document.getElementById('display').value += caracter 
}

function limparDisplay(){
    document.getElementById('display').value = ''
}

function apagar(){
    let display = document.getElementById('display').value
    document.getElementById('display').value = display.slice(0, -1)

}

function operadores(op){
    if(numero !== ''){
        operadorAtual = op
        document.getElementById('display').value = ''
    }
}