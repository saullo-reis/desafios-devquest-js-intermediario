
const main = document.getElementsByClassName('main');
let contagem = 0;
let maxContagem = main.length;

const arrows = document.getElementsByClassName('arrows')

console.log(arrows)

document.getElementById('arrow-right').addEventListener('click', function() {
    irParaDireita();
});

document.getElementById('arrow-left').addEventListener('click', function() {
    irParaEsquerda();
});



function avancarPhoto() {

    if ( contagem === 0){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        arrows[0].classList.add('opacity')
    }

    else if ( contagem === 1){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        main[contagem - 1].classList.remove('active')
        main[contagem - 1].classList.add('inactive')
        arrows[0].classList.remove('opacity')
    }

    else if ( contagem === 2){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        main[contagem - 1].classList.remove('active')
        main[contagem - 1].classList.add('inactive')
        arrows[1].classList.remove('opacity')
    }

    else if ( contagem === 3){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        main[contagem - 1].classList.remove('active')
        main[contagem - 1].classList.add('inactive')
        arrows[1].classList.add('opacity')
    }
    
}


function retroscederPhoto(){

    if ( contagem === 0){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        main[contagem + 1].classList.remove('active')
        main[contagem + 1].classList.add('inactive')
        arrows[0].classList.add('opacity')
    }

    else if ( contagem === 1){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        main[contagem + 1].classList.remove('active')
        main[contagem + 1].classList.add('inactive')
        arrows[0].classList.remove('opacity')
    }

    else if ( contagem === 2){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        main[contagem + 1].classList.remove('active')
        main[contagem + 1].classList.add('inactive')
        arrows[1].classList.remove('opacity')
    }

    else if ( contagem === 3){
        main[contagem].classList.add('active')
        main[contagem].classList.remove('inactive')
        arrows[1].classList.add('opacity')
    }

}


function irParaDireita() {
    if (contagem === maxContagem ) {
        return
            
    }

    contagem++

    avancarPhoto()        
    }

function irParaEsquerda() {
    if(contagem === 0){
        return
    }

    contagem--

    retroscederPhoto()
}
