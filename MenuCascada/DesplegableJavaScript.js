var botoncito = document.getElementById('botoncito');
botoncito.addEventListener('click',ocultarOpciones);

function ocultarOpciones() {
    var menu = document.getElementsByClassName('cero');
    menu.Class.toggle('opcion');
}