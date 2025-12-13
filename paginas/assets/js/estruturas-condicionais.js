// Operadores Relacionais
// ==  Igual valor
// === Igual valor e tipo
// >  Maior
// >= Maior ou igual
// <  Menor
// <= Menor ou igual
// != Diferente
function exemploBasico() {
    let idade = 42;

    // se a idade for menor que 18
    if (idade < 18) {
        alert("Menor de idade");
    } else if (idade < 65) {
        alert("Adulto");
    } else {
        alert("Idoso");
    }
}

// Operadores Lógicos
// &&  E
// ||  Ou(Pipeline)

// Tavela verdade do operador lógico E
// V e V => V
// V e F => F
// F e V => F
// F e F => F

function exemploE() {
    let nivel = -8;
    // nivel 0 .. 10 é bronze
    // nivel 11 .. 20 é prata
    // nivel 21 .. 30 é ouro
    // ...
    if (nivel >= 0 && nivel <= 10) {
        alert("Elo bronze");
    }
}

// Tabela verdade do operador lógico OU
// V ou V => V
// F ou V => V
// V ou F => V
// F ou F => F

function exemploOu() {
    // Menor de idade ou estudante
    let idade = 30;
    let estudante = false;

    if (idade < 18 || estudante === true) {
        alert("Poder comprar meio ingresso");
    } else {
        alert("Não pode comprar meio ingresso");
    }
}

function exemploIncremento() {
    debugger
    let quantidadeIdoso = 0, quantidadeAdulto = 0;

    let nome1 = prompt("Digite o nome da primeira pessoa");
    let idade1 = parseInt(prompt("Digite a idade de " + nome1 + ":"));

    // pessoa1
    if (idade1 < 65) {
        // adulto
        // incrementar
        // quantidadeAdulto = 0 + 1; => 1
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        // idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    //pessoa2
    let nome2 = prompt("Digite o nome da segunda pessoa");
    let idade2 = parseInt(prompt("Digite a idade de " + nome2 + ":"));

    if (idade2 < 65) {
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        // idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    //pessoa3
    let nome3 = prompt("Digite o nome da terceira pessoa");
    let idade3 = parseInt(prompt("Digite a idade de " + nome3 + ":"));

    if (idade3 < 65) {
        quantidadeAdulto = quantidadeAdulto + 1;
    } else {
        // idoso
        quantidadeIdoso = quantidadeIdoso + 1;
    }

    alert(
        "Pessoa1\nNome: " + nome1 + " | Idade: " + idade1 + " anos \n\n" +
        "Pessoa2\nNome: " + nome2 + " | Idade: " + idade2 + " anos \n\n" +
        "Pessoa3\nNome: " + nome3 + " | Idade: " + idade3 + " anos \n\n" +
        "Resumo:\n" +
        "Quantidade de Adultos: " + quantidadeAdulto + "\n" +
        "Quantidade de Idosos: " + quantidadeIdoso
    )
}

function exemploFinalAno2026() {

    let contagemRegressiva = 10;
    alert(contagemRegressiva);

    //Decrementar
    contagemRegressiva = contagemRegressiva - 1; //9
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //8
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //7
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //6
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //5
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //4
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //3
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //2
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //1
    alert(contagemRegressiva);

    contagemRegressiva = contagemRegressiva - 1; //1
    alert("Feliz Ano Novo");
}

function somarNumeros() {
    let soma = 0;

    const numero1 = parseInt(prompt("Digite o número 1: "));
    soma = soma + numero1;

    const numero2 = parseInt(prompt("Digite o número 2: "));
    soma = soma + numero2;

    const numero3 = parseInt(prompt("Digite o número 3: "));
    soma = soma + numero3;

    const numero4 = parseInt(prompt("Digite o número 4: "));
    soma = soma + numero4;

    const media = soma / 4;

    alert("Soma: " + soma + "\nMédia: " + media);
}

function exemploWhile() {
    let indice = 0;

    // Enquanto o indice for menor que 3, repete
    while (indice < 3) {
        let nome = prompt("Digite o nome");    
        // Incremento a variável indice 1, ou seja, adicionar 1
        indice = indice + 1;
    }

    alert("Obrigado")
}