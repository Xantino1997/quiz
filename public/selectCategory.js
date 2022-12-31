const btnHistory = document.getElementById('history');
btnHistory.addEventListener('click', historyGame);

const btnsport = document.getElementById('sport');
btnsport.addEventListener('click', sportGame)

const btnenterteniment = document.getElementById('enterteniment');
btnenterteniment.addEventListener('click', entertenimentGame);

const btnscience = document.getElementById('science');
btnscience.addEventListener('click', scienceGame);

const btnshows = document.getElementById('art');
btnshows.addEventListener('click', artGame);

const btnmusic = document.getElementById('music');
btnmusic.addEventListener('click', musicGame);

const btnAll = document.getElementById('all');
btnAll.addEventListener('click', allGame);





function historyGame() {
    const history = document.getElementById('history').name;
    console.log(history);
    localStorage.setItem('history', history)
    Swal.fire({
        title: `
        “Cualquiera puede hacer historia; pero sólo un gran hombre puede escribirla.” 
        Oscar Wilde`,
        
    });
    setTimeout(function () {
        window.location.href = 'playHistory'
    }, 4000)
    let contador = 0;
    localStorage.setItem('contador',contador)
    let incorrect=0;
    localStorage.setItem('incorrect',incorrect)
}

function sportGame() {
    const sport = document.getElementById('sport').name;
    console.log(sport);
    localStorage.setItem('sport', sport);
    Swal.fire({
        title: `“El ejercicio debería ser entendido como atributo al corazón.” Gene Tunney`,
        
    });
    setTimeout(function () {
        window.location.href = 'playSport'
    }, 4000)
    let contador = 0;
    localStorage.setItem('contador',contador)
    let incorrect=0;
    localStorage.setItem('incorrect',incorrect)
}

function entertenimentGame() {

    Swal.fire({
        title: `“Dime cómo te diviertes y te diré quién eres.” — José Ortega y Gasset`,
      
    });
    setTimeout(function () {
        window.location.href = 'playEntre'
    }, 4000)
    let contador = 0;
    localStorage.setItem('contador',contador)
    let incorrect=0;
    localStorage.setItem('incorrect',incorrect)
}

function scienceGame() {

    Swal.fire({
        title: `“Cada día sabemos más y entendemos menos” .
         Albert Einstein`,
    });
    setTimeout(function () {
        window.location.href = 'playCiencia'
    }, 4000)
}

function artGame() {
    Swal.fire({
        title: `“Bienvenido al arte.....bienvenido a la vida -Gali 2022” `,
       
    });
    setTimeout(function () {
        window.location.href = 'playtheArt'

    }, 4000)
}

function musicGame() {

    Swal.fire({
        title: `“Normalmente, cuando una persona tiene un problema serio en la vida, se refleja en su música”. Kurt Cobain`,
    });
    setTimeout(function () {
        window.location.href = 'playMusic'
    }, 4000)
}


function allGame() {

    Swal.fire({
        title: `“El conocimiento habla pero la sabiduría escucha.”-JIMI HENDRIX`,
        
    });
    setTimeout(function () {
        window.location.href = 'playthegame'
    }, 4000)
}
