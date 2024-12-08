function medidor(){
    let tvel = window.document.querySelector('#velocidade')
    let res = window.document.querySelector('#res')
    let vel = Number(tvel.value)
    res.innerHTML += `<p>A Velocidade do seu Carro é <strong>${vel} Km/h</strong></p>`
    if (vel > 60)
        res.innerHTML +=`<p> <strong>!!!ULTRAPASSOU A VELOCIDADE PERMITIDA MULTADO!!!!!</strong></p>`
    res.innerHTML +=`<p>DIRIJA SEMPRE USANDO O CINTO DE SEGURAÇA</p>`

}

function verificar (){
    let pais = window.document.querySelector('#tpais')
    let res = window.document.querySelector('#res') 

   
    if (pais.value.toUpperCase() != 'BRASIL'){

            res.innerHTML = `Voçê e estrangeiro`
    } else {

        res.innerHTML = `Voçê e Brasileiro`
    }          
        

}