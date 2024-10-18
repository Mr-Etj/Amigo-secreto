let amigos = []

function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value
    let lista = document.getElementById('lista-amigos')
    for (let i = 0; i < amigos.length; i++) {
        if(nomeAmigo == amigos[i]) {
            alert('Não coloque nomes repetidos!')
            return
        }
    }
    // if(amigos.includes(nomeAmigo)) é uma forma de verificar os repetidos também
    if(nomeAmigo == '') {
        alert('Nome inválido')
    } else {
    amigos.push(nomeAmigo)
    if(lista.innerHTML == ''){
    lista.innerHTML = nomeAmigo
    } else {
        lista.innerHTML = lista.innerHTML + ', ' + nomeAmigo
    }
}
    nomeAmigo = document.getElementById('nome-amigo').value = ''
    
}

function sortear() {
    if(amigos.length < 4) {
        alert('Insira 4 participantes no minimo')
        return
    }
    embaralha(amigos)
    let listaSorteio = document.getElementById('lista-sorteio')
    for(let i = 0; i < amigos.length; i++) {
        if (i == amigos.length-1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
        }   else {
                listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + ' --> ' + amigos[i+1] + '<br>'
        }
    }
}
function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    lista = document.getElementById('lista-amigos')
    amigos = []
    listaSorteio = document.getElementById('lista-sorteio')
    listaSorteio.innerHTML = ''

}

// // var hello = "Olá, ";
// // console.log(hello.concat("Kevin", " tenha um bom dia."));

// // // retorna 'Olá, Kevin tenha um bom dia.'
// //concat serve para concatenar uma string



function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');


    amigos.push(amigo.value);


    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }


    amigo.value = '';


    atualizarLista();
    atualizarSorteio();
}


function sortear() {
    embaralhar(amigos);


    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}


function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}


function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';


    for (let i = 0; i < amigos.length; i++) {
        // Cria um elemento de parágrafo para cada amigo
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];
       
        // Adiciona um evento de clique para excluir o amigo
        paragrafo.addEventListener('click', function() {
            excluirAmigo(i);
        });


        // Adiciona o parágrafo à lista
        lista.appendChild(paragrafo);
    }
}


function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

// let teste = prompt('Digite a palavra para ver se a mesma é palindroma')
// TestarPalindromo(teste)

// function TestarPalindromo(palavra) {
//     let palavraLista = palavra.split('') //separa uma variavel, ela sendo sem parametro ela vira um list
//     let listaInvertida = palavraLista.reverse() //inverte a lista
//     palavraInvertida = listaInvertida.join('') //transforma a lista em palavra
//     if(palavra == palavraInvertida) {
//         alert('Está palavra é Palindroma')
//     } else {
//         alert('Essa palavra não é Palindroma')
//     }
// }
// Função constante le a primeira linha da função (function exprection)
// const NomeFunction = function() {

// }


