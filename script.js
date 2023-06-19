var overlay = null
function showOverlay1() {
    overlay = document.getElementById('overlay1');
    overlay.classList.add('active');
    console.log('Clicou no botao1')
  }

function showOverlay2() {
    overlay = document.getElementById('overlay2');
    overlay.classList.add('active');
    console.log('Clicou no botao2')
  }

function showOverlay3() {
    overlay = document.getElementById('overlay3');
    overlay.classList.add('active');
    console.log('Clicou no botao3')
  }
let saiumesmo = false


function entrou(){
    saiumesmo = false
    console.log('Mouse dentro do overlay')
}
function saiu(){
    saiumesmo = true 
    console.log('Mouse fora do overlay')
}

function clicou(){
    if(saiumesmo === true){
        console.log('Fechou o overlay')
        saiumesmo = false
        overlay.classList.remove('active')
    }
}
let fundodiv = null


function feito(id) {
    fundodiv = document.getElementById(id);
    
    if (fundodiv.style.backgroundColor !== 'rgb(169, 243, 209)') {
      fundodiv.style.backgroundColor = 'rgb(169, 243, 209)'
      fundodiv.style.boxShadow = '0px 0px 15px rgba(169, 243, 209)'
      localStorage.setItem('estaFeito_' + id, 'rgb(169, 243, 209)')
    } else {
      fundodiv.style.backgroundColor = 'rgb(240, 240, 240)'
      fundodiv.style.boxShadow = '0px 0px 15px rgba(255, 255, 255, 0.0)'
      localStorage.removeItem('estaFeito_' + id)
    }
  }
  

  window.onload = function() {
    let itens = document.getElementsByClassName('itens-div')
    
    for (let i = 0; i < itens.length; i++) {
      let id = itens[i].id
      let fundodiv = document.getElementById(id)
      let corArmazenada = localStorage.getItem('estaFeito_' + id)
      
      if (corArmazenada) {
        fundodiv.style.backgroundColor = corArmazenada
        fundodiv.style.boxShadow = '0px 0px 15px rgba(169, 243, 209)'
      }
    }
  };
  