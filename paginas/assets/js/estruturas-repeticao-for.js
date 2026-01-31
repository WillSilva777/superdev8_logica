function exemplo1() {
    // Solicitar o nome de quatro pessoas

    // Declarando a variável
    let indice = 0

    // Condição
    while (indice < 4) {
        let nome = prompt("Digite o nome");

        // Incrementar
        indice = indice + 1;
    }

    // Declarar variável
    // Condição
    // Incrementar
    for (let indice = 0; indice < 4; indice = indice + 1) {
        let nome = prompt("Digite o nome");
    }

    for (let hora = 0; hora < 24; hora = hora + 1) {
        for (let minuto = 0; minuto < 60; minuto = minuto + 1) {
            for (let segundo = 0; segundo < 60; segundo = segundo + 1) {
                alert(hora + ":" + minuto + ":" + segundo);
            }
        }
    }

}

function solicitarDadosPacientes() {
    let quantidadePacientes = parseInt(prompt("Digite a quantidade"));

    for (let indice = 0; indice < quantidadePacientes; indice = indice + 1) {
        let nome = prompt("Digite o nome do paciente");
        let idade = parseInt(prompt("Digite a idade do paciente"));
        let peso = parseFloat(prompt("Digite o peso do paciente"));
        let altura = parseFloat(prompt("Digite a altura do paciente"));
    }
}

function exemploContagemRegressiva() {
    // declaração variável, condição, decrementar
    for(let indice = 10; indice >= 0;indice = indice -1) {
        alert(indice);
    }
    alert('Feliz ano novo!')
}

function apresentarNumerosParesAte1000() {
    for(let i =0; i <= 1000; i = i + 1) {
        if (i % 2 == 0){
            alert(i);
        }
    }
    for(let i = 0; i <= 1000; i = i + 2) {
        alert(i);
    }
}
