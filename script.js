// FECHA DE INICIO 
const inicio = new Date("2024-05-24T18:00:00");

// CONTADOR
function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - inicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
    const segundos = Math.floor((diferencia / 1000) % 60);

    document.getElementById("contador").innerText =
        "Llevamos juntos 💕 " +
        dias + " días " +
        horas + " horas " +
        minutos + " minutos " +
        segundos + " segundos";
}

setInterval(actualizarContador, 1000);

// CORAZONES
function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerText = "💖";

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = (Math.random() * 20 + 10) + "px";
    corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => {
        corazon.remove();
    }, 5000);
}

setInterval(crearCorazon, 300);