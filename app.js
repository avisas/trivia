/* 1ero seleccionar el elemento a traves de un id
llamar al JS
//document.getElementById("gameSection").style.display = "inline";
  
 Los eventos son acciones y las acciones son funciones.
*/

function getUserName() {
    const userName = document.getElementById('txtUserName');
    document.getElementById('userName').innerText = `¡Hola ${userName.value}!`; //Template string
    document.getElementById('getNameSection').className = 'hidden';
    document.getElementById('gameSection').className = 'visible';

}

function resetGame() {
    document.getElementById("gameSection").className = 'visible';
    document.getElementById("getNameSection").className = 'hidden';
    //document.getElementById("txtUserName").value = null;
    document.getElementById("chooseTopicSection").className = 'visible';
    document.getElementById('resultSection').className = 'hidden';

}
function showMusicSection() {
    document.getElementById('musicSection').className = 'visible';
    document.getElementById('sportSection').className = 'hidden';
    document.getElementById('chooseTopicSection').className = 'hidden';

}
function showSportsSection() {
    document.getElementById('musicSection').className = 'hidden';
    document.getElementById('sportSection').className = 'visible';
    document.getElementById('chooseTopicSection').className = 'hidden';
}
function evaluateMusicAnswers() {
    let puntaje = [0, 0];
    console.log(`El valor inicial del puntaje es: ${puntaje}`);
    document.getElementById('musicSection').className = 'hidden';
    document.getElementById('sportSection').className = 'hidden';
    document.getElementById('resultSection').className = 'visible';
    sumScore(puntaje, 'mpr1');
    sumScore(puntaje, 'mpr2');
    sumScore(puntaje, 'mpr3');
    sumScore(puntaje, 'mpr4');
    sumScore(puntaje, 'mpr5');
    sumScore(puntaje, 'mpr6');
    sumScore(puntaje, 'mpr7');
    sumScore(puntaje, 'mpr8');
    sumScore(puntaje, 'mpr9');
    sumScore(puntaje, 'mpr10');
    sumScore(puntaje, 'mpr11');
    sumScore(puntaje, 'mpr12');
    console.log(`El valor final del puntaje es: ${puntaje}`);
    document.getElementById('correctAnswers').innerText = `Respuestas correctas: ${puntaje[0]}`;
    document.getElementById('incorrectAnswers').innerText = `Respuestas incorrectas: ${puntaje[1]}`;
    if (puntaje[0] > puntaje[1]) alert('Ganaste!');
    else alert('Vuelve a intentarlo');
}

function evaluateSportsAnswers() {
    let puntaje = [0, 0];
    console.log(`El valor inicial del puntaje es: ${puntaje}`);
    document.getElementById('musicSection').className = 'hidden';
    document.getElementById('sportSection').className = 'hidden';
    document.getElementById('resultSection').className = 'visible';
    sumScore(puntaje, 'spr13');
    sumScore(puntaje, 'spr14');
    sumScore(puntaje, 'spr15');
    sumScore(puntaje, 'spr16');
    sumScore(puntaje, 'spr17');
    sumScore(puntaje, 'spr18');
    sumScore(puntaje, 'spr19');
    sumScore(puntaje, 'spr20');
    sumScore(puntaje, 'spr21');
    sumScore(puntaje, 'spr22');
    sumScore(puntaje, 'spr23');
    sumScore(puntaje, 'spr24');
    console.log(`El valor final del puntaje es: ${puntaje}`);
    document.getElementById('correctAnswers').innerText = `Respuestas correctas: ${puntaje[0]}`;
    document.getElementById('incorrectAnswers').innerText = `Respuestas incorrectas: ${puntaje[1]}`;

    if (puntaje[0] > puntaje[1]) alert('Ganaste!');
    else alert('Vuelve a intentarlo');
}

function sumScore(puntaje, id) {
    console.log(`Llamamos nuevamente a sumScore con los valores ${puntaje} y ${id}`);
    if (document.getElementById(id).checked) {
        console.log(`el id que esta en checked es: ${id}`);
        let valorRadioButton = Number(document.getElementById(id).value);
        console.log(`el valor del radiobutton es: ${valorRadioButton}`);
        document.getElementById(id).checked = false;
        if (valorRadioButton > 0) puntaje[0]++;
        else puntaje[1]++;
    }
}

function close_window() {
    if (confirm("Seguro que quieres salir?")) {
        window.open('file:///home/ronny/Downloads/trivia-js/index.html', '_self', '');
        window.close();
    }
}