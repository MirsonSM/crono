var temp = document.querySelector('.temporizador')

temp.addEventListener ('click', function() {
    window.location.href='temporizador.html'
} )

var crono = document.querySelector('.cronometro') 


crono.addEventListener ('click', function() {
    window.location.href='cronometro.html'
} )

var relog = document.querySelector('.relogio')


relog.addEventListener ('click', function() {
    window.location.href='relogio.html'
} )

var data = document.querySelector('#data')

function time() {
    var disp = document.querySelector('.display')
    var hora = new Date()
        disp.innerText =`${hora.getHours()}:${ hora.getMinutes()}:${hora.getSeconds()}`
        setTimeout('time()', 500)
        data.innerText = `${hora.getDate()} de ${hora.toLocaleString('pt-BR',{month: 'long'})} de ${hora.getFullYear()}`
}

var tempo = new Date()

console.log(tempo.getFullYear)

var inicio = document.querySelector('#iniciar')

var redefin = document.querySelector('#redefinir')


inicio.addEventListener ('click', function() {
    if (this.innerText=="Iniciar") {
        this.innerText = "Parar"
        this.style.background = "red"
        redefin.innerText = "Voltar"
        redefin.style.background = "blue"
    } else {
        this.innerText = "Iniciar"
        this.style.background = "#47c061"
        redefin.innerText = "Redefinir"
        redefin.style.background = "#c09647"
        
    }
} )

var dispcrono = document.querySelector('.crono')

var segundo = 0
var minuto = 0
var hora = 0


    function crononometro() {
        if (inicio.innerText=="Parar") {
            for (var i = 0; i<1; i++) {
                segundo = segundo+1
                dispcrono.innerText = `${hora}:${minuto}:${segundo}`
                if (segundo==59) {
                    segundo=-1
                    minuto = minuto + 1
                }
                if (minuto==60) {
                    minuto=0
                    hora = hora+1
                }
            }
        }  
        setTimeout('crononometro()', 1000)
    }

  

    redefin.addEventListener ('click', function () {
        this.innerText = 'Redefinir'
        this.style.background="#c09647"
        inicio.innerHTML='Iniciar'
        dispcrono.innerText = '0:0:0'
        segundo = 0
        minuto = 0
        hora = 0

    })






    
    






