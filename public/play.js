const data = fetch("./src/basePreguntas.json")
const flechaNext = document.getElementById('flechaNext')


var timeSet = true;

function iniciarReloj(timeSet) {
    let fecha = new Date().getTime() + 12 * 1000;

    timeSet = setInterval(function () {
        let ahora = new Date().getTime();

        const tiempoRestante = fecha - ahora;

        // const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24))
        // const horas = Math.floor(tiempoRestante / (1000 * 60 * 60) % 24)
        // const minutos = Math.floor(tiempoRestante / (1000 * 60) % 60)
        const segundos = Math.floor(tiempoRestante / (1000) % 60)
        document.getElementById('reloj').style.pointerEvents = "none";
        document.getElementById('reloj').innerText = `${segundos} segundos `

        if (tiempoRestante >= 6 * 1000) {
            document.getElementById('reloj').classList.remove('relojred')
            document.getElementById('reloj').classList.add('reloj')
        } else {
            document.getElementById('reloj').classList.remove('reloj');
            document.getElementById('reloj').classList.add('relojred');
        }
        if (tiempoRestante < 0) {
            clearInterval(timeSet);
            document.getElementById('reloj').innerText = 'Time Over';
            document.getElementById('apoyo').style.pointerEvents = "none";
            document.getElementById('cincuenta').style.pointerEvents = "none";
            document.getElementById('apoyo').style.border = "red solid 6px";
            document.getElementById('cincuenta').style.border = "red solid 6px";
            document.getElementById('flechaNext').style.pointerEvents = "all";
            document.getElementById("opcion1").style.pointerEvents = "none";
            document.getElementById("opcion2").style.pointerEvents = "none";
            document.getElementById("opcion3").style.pointerEvents = "none";
            document.getElementById("opcion4").style.pointerEvents = "none";
        }
        let opcion1Btn = document.getElementById('opcion1');
        opcion1Btn.addEventListener('click', () => {
            clearInterval(timeSet);
        })

        let opcion2Btn = document.getElementById('opcion2');
        opcion2Btn.addEventListener('click', () => {
            clearInterval(timeSet)
        });

        let opcion3Btn = document.getElementById('opcion3');
        opcion3Btn.addEventListener('click', () => {
            clearInterval(timeSet)
        });

        let opcion4Btn = document.getElementById('opcion4');
        opcion4Btn.addEventListener('click', () => {
            clearInterval(timeSet)
        })

    }, 1000)



    const apoyoManos = document.getElementById('apoyo')
    apoyoManos.addEventListener('click', () => {

        clearInterval(timeSet)
        Swal.fire({
            title: `“Daremos un tiempo extra para que consultes con un amigo, excepto Google 😂” `,
            icon: 'warning',
        });
        document.getElementById('apoyo').classList.remove = 'apoyo';
        document.getElementById('apoyo').classList.add('apoyoGray');
        document.getElementById('apoyo').style.pointerEvents = "none";
        document.getElementById('flechaNext').style.pointerEvents = "none";
        document.getElementById('reloj').classList.remove('relojred');
        document.getElementById('reloj').classList.add('reloj');


        let fecha = new Date().getTime() + 61 * 1000;

        var newTime = setInterval(function () {
            let ahora = new Date().getTime();

            newTiempoRestante = fecha - ahora;

            const segundos = Math.floor(newTiempoRestante / (1000) % 60)

            document.getElementById('reloj').innerText = `${segundos} segundos `
            // document.title = `${segundos} segundos`

            if (newTiempoRestante >= 6 * 1000) {
                document.getElementById('reloj').classList.remove('relojred');
                document.getElementById('reloj').classList.add('reloj');

                // document.getElementById('reloj').style.border = "red solid 6px";
                // document.getElementById('reloj').innerText = 'Time Over';

            } else {
                document.getElementById('reloj').classList.remove('reloj');
                document.getElementById('reloj').classList.add('relojred');
            }
            if (newTiempoRestante < 0) {
                clearInterval(newTime);
                document.getElementById('reloj').innerText = 'Time Over';
                document.getElementById('apoyo').style.pointerEvents = "none";
                document.getElementById('cincuenta').style.pointerEvents = "none";
                document.getElementById('apoyo').style.border = "red solid 6px";
                document.getElementById('apoyo').style.border = "red solid 6px";
                document.getElementById('cincuenta').style.border = "red solid 6px";
                document.getElementById('flechaNext').style.pointerEvents = "all";
                document.getElementById("opcion1").style.pointerEvents = "none";
                document.getElementById("opcion2").style.pointerEvents = "none";
                document.getElementById("opcion3").style.pointerEvents = "none";
                document.getElementById("opcion4").style.pointerEvents = "none";
            }

            let opcion1Btn = document.getElementById('opcion1');
            opcion1Btn.addEventListener('click', () => {
                clearInterval(newTime);
            })

            let opcion2Btn = document.getElementById('opcion2');
            opcion2Btn.addEventListener('click', () => {


                clearInterval(newTime)
            });

            let opcion3Btn = document.getElementById('opcion3');
            opcion3Btn.addEventListener('click', () => {


                clearInterval(newTime)
            });

            let opcion4Btn = document.getElementById('opcion4');
            opcion4Btn.addEventListener('click', () => {

                clearInterval(newTime)
            })


        }, 1000)

    });

    // seleccionarPreguntaYRespuestaAleatoria();

}



// fn de la ayuda50 que permite eliminar 2 opcion incorrectas


// comienzo ocando el timer o reloj con la leyenda toque para empezar

const comienzo = document.getElementById('reloj')

comienzo.addEventListener('click', () => {
    iniciarReloj();
    seleccionarPreguntaYRespuestaAleatoria();
    document.getElementById('flechaNext').style.pointerEvents = "none";

});


flechaNext.addEventListener('click', () => {
    iniciarReloj();
    nextQuestion();
    seleccionarPreguntaYRespuestaAleatoria();
    document.getElementById('flechaNext').style.pointerEvents = "none";
});

let preguntasYRespuestas = [];

//función para seleccionar una pregunta y respuesta aleatorias del array
function seleccionarPreguntaYRespuestaAleatoria(timeSet) {
    console.log(timeSet)
    fetch("./src/basePreguntas.json")
        .then(response => response.json())
        .then(data => {
            data.sort(() => Math.random() - 0.5)
            //obtener un valor aleatorio de data
            let randomValue = data[Math.floor(Math.random() * data.length)];

            //agregar las preguntas y respuestas al array
            let randomIndex = Math.floor(Math.random() * preguntasYRespuestas.length);

            preguntasYRespuestas.push(randomValue);

            let pregunta = preguntasYRespuestas[randomIndex].pregunta;
            let respuesta = preguntasYRespuestas[randomIndex].respuesta;
            let categoria = preguntasYRespuestas[randomIndex].categoria;
            let opcion1 = preguntasYRespuestas[randomIndex].incorrecta1;
            let opcion2 = preguntasYRespuestas[randomIndex].incorrecta2;
            let opcion3 = preguntasYRespuestas[randomIndex].incorrecta3;


            document.getElementById('pregunta').innerHTML = `Pregunta: ${JSON.stringify(pregunta)}`
            console.log(`Pregunta: ${pregunta}`);
            console.log(`Respuesta: ${respuesta}`);

            let options = [
                respuesta, opcion1,
                opcion2, opcion3
            ];

            options.sort(() => Math.random() - 0.5);

            let finalResult = localStorage.getItem('contador')
            document.getElementById('resultado2').innerHTML =
                `
<p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
<p class="resultado" id="puntos"><b id="punto1">Puntos: 0</b></p>
<p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
`;
            document.getElementById('gameConteiner').innerHTML =
                `
    <button class="opcion" id="opcion1"><b>${options[0]}</b></button>
    <button class="opcion" id="opcion2"><b>${options[1]}</b></button>
    <button class="opcion" id="opcion3"><b>${options[2]}</b></button>
    <button class="opcion" id="opcion4"><b>${options[3]}</b></button>

    `

            // 50% de ayuda a terminar esta funcion

            const ayuda50 = document.getElementById('cincuenta')
            ayuda50.addEventListener('click', () => {
                clearInterval(timeSet)
                Swal.fire({
                    title: `“Quitaremos 2 opciones y tendras mas posibilidad de acertar” `,
                    icon: 'warning',
                });
                document.getElementById('cincuenta').classList.remove = 'cincuenta';
                document.getElementById('cincuenta').classList.add('cincuentaGray');
                document.getElementById('cincuenta').style.pointerEvents = "none";
                document.getElementById('flechaNext').style.pointerEvents = "none";
                document.getElementById('reloj').classList.remove('relojred');
                document.getElementById('reloj').classList.add('reloj');



                if (options[0] == respuesta) {
                    console.log(opcion1 + ' Este es el 1')

                    document.getElementById("opcion1").style.background = "violet";
                    document.getElementById("opcion2").style.background = "red";
                    document.getElementById("opcion3").style.background = "violet";
                    document.getElementById("opcion4").style.background = "red";


                } else if (options[1] == respuesta) {
                    console.log(opcion1 + ' Este es el 2')
                    document.getElementById("opcion1").style.background = "red";
                    document.getElementById("opcion2").style.background = "violet";
                    document.getElementById("opcion3").style.background = "red";
                    document.getElementById("opcion4").style.background = "violet";

                }
                else if (options[2] == respuesta) {
                    console.log(opcion1 + ' Este es el 3')
                    document.getElementById("opcion1").style.background = "red";
                    document.getElementById("opcion2").style.background = "red";
                    document.getElementById("opcion3").style.background = "violet";
                    document.getElementById("opcion4").style.background = "violet";

                } else if (options[3] == respuesta) {
                    console.log(opcion1 + ' Este es el 4')
                    document.getElementById("opcion1").style.background = "violet";
                    document.getElementById("opcion2").style.background = "red";
                    document.getElementById("opcion3").style.background = "red";
                    document.getElementById("opcion4").style.background = "violet";

                }



            });






            function respuestaCorrecta() {
                if (options[0] == respuesta) {
                    document.getElementById("opcion1").style.background = "#e922d2fc";
                    document.getElementById("opcion1").style.color = "#fff";
                    document.getElementById("opcion1").style.pointerEvents = "none";
                    document.getElementById("opcion2").style.background = " #9e6998fc";
                    document.getElementById("opcion2").style.color = "#000";
                    document.getElementById("opcion2").style.pointerEvents = "none";
                    document.getElementById("opcion3").style.background = "#9e6998fc";
                    document.getElementById("opcion3").style.color = "#000";
                    document.getElementById("opcion3").style.pointerEvents = "none";
                    document.getElementById("opcion4").style.background = "#9e6998fc";
                    document.getElementById("opcion4").style.color = "#000";
                    document.getElementById("opcion4").style.pointerEvents = "none";

                } else if (options[1] == respuesta) {
                    document.getElementById("opcion1").style.background = "#9e6998fc";
                    document.getElementById("opcion1").style.color = "#000";
                    document.getElementById("opcion1").style.pointerEvents = "none";
                    document.getElementById("opcion2").style.background = "#e922d2fc";
                    document.getElementById("opcion2").style.color = "#fff";
                    document.getElementById("opcion2").style.pointerEvents = "none";
                    document.getElementById("opcion2").style.pointerEvents = "none";
                    document.getElementById("opcion3").style.background = "#9e6998fc";
                    document.getElementById("opcion3").style.color = "#000";
                    document.getElementById("opcion3").style.pointerEvents = "none";
                    document.getElementById("opcion3").style.pointerEvents = "none";
                    document.getElementById("opcion4").style.background = "#9e6998fc";
                    document.getElementById("opcion4").style.color = "#000";
                    document.getElementById("opcion4").style.pointerEvents = "none";


                } else if (options[2] == respuesta) {
                    document.getElementById("opcion1").style.background = " #9e6998fc";
                    document.getElementById("opcion1").style.color = "000";
                    document.getElementById("opcion1").style.pointerEvents = "none";
                    document.getElementById("opcion2").style.background = "#9e6998fc";
                    document.getElementById("opcion2").style.color = "#000";
                    document.getElementById("opcion2").style.pointerEvents = "none";
                    document.getElementById("opcion3").style.background = "#e922d2fc";
                    document.getElementById("opcion3").style.color = "#fff";
                    document.getElementById("opcion3").style.pointerEvents = "none";
                    document.getElementById("opcion4").style.background = "#9e6998fc";
                    document.getElementById("opcion4").style.color = "#000";
                    document.getElementById("opcion4").style.pointerEvents = "none";

                } else if (options[3] == respuesta) {
                    document.getElementById("opcion1").style.background = "#9e6998fc";
                    document.getElementById("opcion1").style.color = "#000";
                    document.getElementById("opcion1").style.pointerEvents = "none";
                    document.getElementById("opcion2").style.background = "#9e6998fc";
                    document.getElementById("opcion2").style.color = "#000";
                    document.getElementById("opcion2").style.pointerEvents = "none";
                    document.getElementById("opcion3").style.background = "#9e6998fc";
                    document.getElementById("opcion3").style.color = "#000";
                    document.getElementById("opcion3").style.pointerEvents = "none";
                    document.getElementById("opcion4").style.background = "#e922d2fc";
                    document.getElementById("opcion4").style.color = "#fff";
                    document.getElementById("opcion4").style.pointerEvents = "none";

                }

            }



            let opcion1Btn = document.getElementById('opcion1');
            opcion1Btn.addEventListener('click', () => {
                one();
                respuestaCorrecta();
                document.getElementById('flechaNext').style.pointerEvents = "all";
                let finalResult = localStorage.getItem('contador')
                if (finalResult == 2000) {
                    
                    Swal.fire({
                        title: `Felicidades tu puntaje es lo maximo ${finalResult} `,
                        icon: 'success',
                    });
                    confetti();

                    finalResult = 2100;
                    localStorage.setItem('contador', finalResult);

                    let finalIncorrect = localStorage.getItem('incorrect');
                    
                    finalIncorrect = 0;
                    localStorage.setItem('incorrect', finalIncorrect);
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 10</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;

                }

                let finalIncorrect = localStorage.getItem('incorrect');
                console.log(finalIncorrect + ' este seria lo del boton2')
                if (finalIncorrect == 150) {
                    let finalResult = localStorage.getItem('contador');
                    Swal.fire({
                        title: `Felicidades, tu puntaje es ${finalResult}, click para reinciar juego `,
                        icon: 'warning',
                        buttons: {
                            cancel: 'No',
                            catch: {
                                text: 'Si',
                                value: true,
                            },
                            defeat: false,
                        }
                    }).then((value) => {
                        if (value) {
                            location.reload();
                        }
                    });
                    finalIncorrect = 0;
                    finalResult = 0;
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 0</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;
                    localStorage.setItem('incorrect', finalIncorrect);
                    localStorage.setItem('contador', finalResult);

                }
            })


            let opcion2Btn = document.getElementById('opcion2');
            opcion2Btn.addEventListener('click', () => {
                two();
                respuestaCorrecta();
                document.getElementById('flechaNext').style.pointerEvents = "all";
                let finalResult = localStorage.getItem('contador')
                if (finalResult == 2000) {
                    Swal.fire({
                        title: `Felicidades tu puntaje es lo maximo ${finalResult} `,
                        icon: 'success',
                    });
                    confetti();

                    finalResult = 2100;
                    localStorage.setItem('contador', finalResult);

                    let finalIncorrect = localStorage.getItem('incorrect');
                    
                    finalIncorrect = 0;
                    localStorage.setItem('incorrect', finalIncorrect);
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 10</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;
                }

                let finalIncorrect = localStorage.getItem('incorrect');
                console.log(finalIncorrect + ' este seria lo del boton2')
                if (finalIncorrect == 150) {
                    let finalResult = localStorage.getItem('contador');
                    Swal.fire({
                        title: `Felicidades, tu puntaje es ${finalResult}, click para reinciar juego `,
                        icon: 'warning',
                        buttons: {
                            cancel: 'No',
                            catch: {
                                text: 'Si',
                                value: true,
                            },
                            defeat: false,
                        }
                    }).then((value) => {
                        if (value) {
                            location.reload();
                        }
                    });
                    finalIncorrect = 0;
                    finalResult = 0;
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 0</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;
                    localStorage.setItem('incorrect', finalIncorrect);
                    localStorage.setItem('contador', finalResult);

                }

            });


            let opcion3Btn = document.getElementById('opcion3');
            opcion3Btn.addEventListener('click', () => {
                three();
                respuestaCorrecta();
                document.getElementById('flechaNext').style.pointerEvents = "all";
                let finalResult = localStorage.getItem('contador')
                if (finalResult == 2000) {
                    
                    Swal.fire({
                        title: `Felicidades tu puntaje es lo maximo ${finalResult} `,
                        icon: 'success',
                    });
                    confetti();

                    finalResult = 2100;
                    localStorage.setItem('contador', finalResult);

                    let finalIncorrect = localStorage.getItem('incorrect');
                    
                    finalIncorrect = 0;
                    localStorage.setItem('incorrect', finalIncorrect);
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 10</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;
                }

                let finalIncorrect = localStorage.getItem('incorrect');
                console.log(finalIncorrect + ' este seria lo del boton2')
                if (finalIncorrect == 150) {
                    let finalResult = localStorage.getItem('contador');
                    Swal.fire({
                        title: `Felicidades, tu puntaje es ${finalResult}, click para reinciar juego `,
                        icon: 'warning',
                        buttons: {
                            cancel: 'No',
                            catch: {
                                text: 'Si',
                                value: true,
                            },
                            defeat: false,
                        }
                    }).then((value) => {
                        if (value) {
                            location.reload();
                        }
                    });
                    finalIncorrect = 0;
                    finalResult = 0;
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 0</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;
                    localStorage.setItem('incorrect', finalIncorrect);
                    localStorage.setItem('contador', finalResult);

                }

            });


            let opcion4Btn = document.getElementById('opcion4');
            opcion4Btn.addEventListener('click', () => {
                four();
                respuestaCorrecta();
                document.getElementById('flechaNext').style.pointerEvents = "all";
                let finalResult = localStorage.getItem('contador')
                if (finalResult == 2000) {
                   
                    Swal.fire({
                        title: `Felicidades tu puntaje es lo maximo ${finalResult} `,
                        icon: 'success',
                    });
                    confetti();

                    finalResult = 2100;
                    localStorage.setItem('contador', finalResult);
                    let finalIncorrect = localStorage.getItem('incorrect');
                   

                    finalIncorrect = 0;
                    localStorage.setItem('incorrect', finalIncorrect);
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 0</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;
                }

                let finalIncorrect = localStorage.getItem('incorrect');
                console.log(finalIncorrect + ' este seria lo del boton2')
                if (finalIncorrect == 150) {
                    let finalResult = localStorage.getItem('contador');
                    Swal.fire({
                        title: `Felicidades, tu puntaje es ${finalResult}, click para reinciar juego `,
                        icon: 'warning',
                        buttons: {
                            cancel: 'No',
                            catch: {
                                text: 'Si',
                                value: true,
                            },
                            defeat: false,
                        }
                    }).then((value) => {
                        if (value) {
                            location.reload();
                        }
                    });
                    finalIncorrect = 0;
                    finalResult = 0;
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 0</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult}</b></p>
            `;
                    localStorage.setItem('incorrect', finalIncorrect);
                    localStorage.setItem('contador', finalResult);


                }

            })


            function one() {
                // Incrementar el contador en 10;

                if (options[0] == respuesta) {
                    document.getElementById('reloj').classList.add('reloj');
                    document.getElementById('reloj').classList.remove('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta correcta'
                    console.log('respuesta correcta');
                    console.log(preguntasYRespuestas);
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 10</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 100}</b></p>
            `;
                    localStorage.setItem('contador', finalResult)
                } else {
                    document.getElementById('reloj').classList.remove('reloj');
                    document.getElementById('reloj').classList.add('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta incorrecta'
                    let incorrect = localStorage.getItem('incorrect');
                    let finalIncorrect = parseInt(incorrect) + 0;
                    finalIncorrect += 10;
                    localStorage.setItem('incorrect', finalIncorrect);
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos:  ${result2}</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 0}</b></p>
            `;
                }

            }



            function two() {
                // Incrementar el contador en 10


                if (options[1] == respuesta) {
                    document.getElementById('reloj').classList.add('reloj');
                    document.getElementById('reloj').classList.remove('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta correcta'
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
    <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
    <p class="resultado" id="puntos"><b id="punto1">Puntos: 10</b></p>
    <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 100}</b></p>
    `;
                    localStorage.setItem('contador', finalResult)
                } else {
                    document.getElementById('reloj').classList.remove('reloj');
                    document.getElementById('reloj').classList.add('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta incorrecta'
                    console.log('respuesta incorrecta');
                    let incorrect = localStorage.getItem('incorrect');
                    let finalIncorrect = parseInt(incorrect) + 0;
                    finalIncorrect += 10;
                    localStorage.setItem('incorrect', finalIncorrect);
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos:  ${result2}</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 0}</b></p>
            `;
                }
            };

            function three() {

                if (options[2] == respuesta) {
                    document.getElementById('reloj').classList.add('reloj');
                    document.getElementById('reloj').classList.remove('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta correcta'
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 10</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 100}</b></p>
            `;
                    localStorage.setItem('contador', finalResult)
                } else {
                    document.getElementById('reloj').classList.remove('reloj');
                    document.getElementById('reloj').classList.add('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta incorrecta'
                    console.log('respuesta incorrecta');
                    let incorrect = localStorage.getItem('incorrect');
                    let finalIncorrect = parseInt(incorrect) + 0;
                    finalIncorrect += 10;
                    localStorage.setItem('incorrect', finalIncorrect);
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos:  ${result2}</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 0}</b></p>
            `;
                }

            };

            function four() {
                if (options[3] == respuesta) {
                    document.getElementById('reloj').classList.add('reloj');
                    document.getElementById('reloj').classList.remove('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta correcta'
                    console.log('respuesta correcta');
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: 10</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 100}</b></p>
            `;
                    localStorage.setItem('contador', finalResult)
                } else {
                    document.getElementById('reloj').classList.remove('reloj');
                    document.getElementById('reloj').classList.add('relojred');
                    document.getElementById('reloj').innerHTML = 'respuesta incorrecta'
                    console.log('respuesta incorrecta');
                    let incorrect = localStorage.getItem('incorrect');
                    let finalIncorrect = incorrect + 0;
                    finalIncorrect += 10;
                    localStorage.setItem('incorrect', finalIncorrect);
                    let result2 = 0;
                    let result = localStorage.getItem('contador');
                    let finalResult = parseInt(result) + parseInt(result2);
                    finalResult
                    document.getElementById('resultado2').innerHTML =
                        `
            <p class="resultado" id="category"><b>${JSON.stringify(categoria)}</b></p>
            <p class="resultado" id="puntos"><b id="punto1">Puntos: ${result2}</b></p>
            <p class="resultado" id="totalPuntos"><b>Total puntos: ${finalResult += 0}</b></p>
            `;
                }

            };


        })
        .catch(err => {
            console.error(err);
        });

}





function nextQuestion() {
    document.getElementById('cincuenta').style.border = "solid violet 2px";
    document.getElementById('apoyo').style.border = "solid violet 2px";
    document.getElementById('reloj').style.pointerEvents = "none";

};

const jsConfetti = new JSConfetti();

function confetti(){
    jsConfetti.addConfetti()
}


