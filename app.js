// Pika-pika suerte!

// NO MODIFICAR (salvo para conseguir el color sangría)

document.querySelector('#first').addEventListener('click', updateBgColor);
document.querySelector('#second').addEventListener('click', updateBgColor);
document.querySelector('#third').addEventListener('click', updateBgColor);
document.querySelector('#fourth').addEventListener('click', updateBgColor);


// MODIFICAR A PARTIR DE AQUÍ 

function updateBgColor(event) {
    document.querySelector("#pikachu").style.backgroundColor = event.target.dataset.color;
}