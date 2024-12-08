function somar(){
    var tn1 = window.document.querySelector('input#valor1')
    var tn2 = window.document.querySelector('input#valor2')
    var res = window.document.querySelector('div#res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma ${n1} + ${n2} é igual a ${s}`

}

var c = window.document.querySelector('div#cor')

c.addEventListener('click', clicar)
c.addEventListener('mouseout', sair)
c.addEventListener('mousemove', mover)



function clicar(){
    
    c.innerHTML = 'Clicar'
    c.style.background = 'black'
}

function sair(){
    
    c.innerHTML = 'Deus e Maravilhoso'
    c.style.background = 'green'
    c.style.color = 'Blue'
}

function mover(){
    c.style.background ='blue'
    c.style.color = 'white'
}