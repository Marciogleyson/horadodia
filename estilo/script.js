function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 4
    msg.innerHTML = `Agora São ${hora} do Dia`
    if (hora >= 6 && hora < 12){
        //BOM DIA
        img.src ='imagem/dia.png'
        window.document.body.style.background = '#e2cd9f'
    
    }else if ( hora >= 12 && hora < 18){
        //BOA TARDE
        img.src = 'imagem/tarde.png'
        window.document.body.style.background = '#b9846f'
    }else if (hora >= 0 && hora < 5){
        //BOA NOITE
        img.src = 'imagem/noite.png'
        window.document.body.style.background = '#515154'

    }else {
        
        //BONS SONHOS
        img.src = 'imagem/madrugada.png'
        window.document.body.style.background = 'black'
    }
     
        
    
}
