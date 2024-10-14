function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var mm = data.getMinutes()
    var ms = data.getSeconds()
    
    //var hora = 8
    msg.innerHTML = `Agora São ${hora} Horas ${mm} Minuto ${ms} Segundos`
    if (hora >= 0 && hora < 12) {
       // print("BOM DIA")
        img.src = 'manha.jpg'
        document.body.style.background = '#7CFC00'
        
    } else if (hora >= 12 && hora < 18){
       // print("BOA TARDE")
        img.src = 'tarde.jpg'
        document.body.style.background = `#f5ba82`
    } else {
         // print("BOA NOITE")
         img.src = 'noite.jpg'
         document.body.style.background = `#000000`
    }
      
        
        
}