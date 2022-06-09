function tocaSom (idElemntoAudio) {
    document.querySelector(idElemntoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

// enquanto 
for (let contador = 0; contador <  listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    
}