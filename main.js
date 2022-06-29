let objetoOpciones = {
    'piedra': {
        'piedra': 'empate',
        'tijeras': 'gana',
        'papel': 'pierde'
    },
    'tijeras': {
        'piedra': 'pierde',
        'tijeras': 'empate',
        'papel': 'gana'
    },
    'papel': {
        'piedra': 'gana',
        'tijeras': 'pierde',
        'papel': 'empate'
    }
}

function validador(input) {
    var opciones = ["piedra", "papel", "tijeras"];
    var num = Math.floor(Math.random() * 3);

    let opcionComputador = opciones[num];
    let resultado;

    switch (objetoOpciones[input][opcionComputador]) {
        case 'gana':
            resultado = "Ganaste";
            break;
        case 'pierde':
            resultado = "Perdiste";
            break;
        default:
            resultado = "Empate";
            break;
    }
    document.getElementById('resultado').textContent = resultado;
}