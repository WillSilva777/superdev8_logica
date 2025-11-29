
// Padrão de nomenclatura de função em JS é camel case

function exemploVariaveisTexto(){
    const produto1 = "Xbox";
    const produto2 = "Gameboy Color";
    
    // Concatenando a variável produto1 com espaço e depois produto2
    const produtos = produto1 + " e " + produto2;

    alert("Produto: " + produtos);
}

function exemploVariaveisInteiro() {
    const numero1 = 18;
    const numero2 = 147;

    // const soma = 18 + 147; => 165
    // +  da linha abaixo ele está fazendo uma soma
    const soma = numero1 + numero2;

    // + da linha abaixo ele está fazendo uma concatenação
    alert("Soma: " + soma);
}

function exemploVariaveisFloat(){
    const quantidadeHoras = 10;
    const valorHora = 2.31;

    const salarioBruto = quantidadeHoras * valorHora;

    alert("Salário Bruto: " + salarioBruto);
}

function exemploVariaveisBoolean(){
    // let: permite reatribuir o valor da variável depois de criada.
    // const: não permite reatribuir o valor, apenas a leitura (o vínculo é constante).
    let lorenzoFechouAba = false;

    lorenzoFechouAba = true;

    alert("Lorenzo fechou a aba: " + lorenzoFechouAba);
}

function exemploVariaveis(){
    const destino = "Maceió";
    const quantidadeDias = 20;
    const precoDiaria = 1300.1;
    let finalizadaCompra = false;

    let valorTotal = quantidadeDias * precoDiaria;

    // Usuário finalizou a compra
    finalizadaCompra = true;

    alert(
        "Destino: " + destino +
        "\nQuantidade de dias : " + quantidadeDias +
        "\nPreço Diária: " + precoDiaria +
        "\nFinalizar compra: " + finalizadaCompra +
        "\nValor total: R$ " + valorTotal
    );
}

/*
  */

function exercicioPokemon1(){
    const nomePokemon = "Charmander";
    const numeroPokemon = 4;
    const descricaoPokemon = "A chama em sua cauda demonstra a força de sua energia vital. Se Charmander estiver fraco, a chama também arderá fracamente.";
    const alturaPokemon = 0.6;
    const pesoPokemon = 8.5;
    const categoriaPokemon = "Lagarto";
    const habilidadesPokemon = "Blaze(quando o HP de Charmander está baixo (normalmente ≤ ⅓ do máximo), os seus ataques do tipo Fogo têm poder aumentado) e Solar Powersob sol forte (ou com clima de “Dia de Sol”, conforme o jogo), o Ataque Especial de Charmander aumenta, mas ele perde HP a cada turno "

    let imcPokemon =  pesoPokemon / (alturaPokemon ** 2);
    let imcFormatadoPokemon = imcPokemon.toFixed(2);

    alert(
        "\nNome do Pokemon: " + nomePokemon +
        "\nNumero do Pokemon: " + numeroPokemon +
        "\nDescrição do Pokemon: " + descricaoPokemon +
        "\nA altura do Pokemon é de: " + alturaPokemon + " metros" +
        "\nO peso do Pokemon é de: " + pesoPokemon + " kilos" +
        "\nCategoria do Pokemon: " + categoriaPokemon +
        "\nHabilidades do Pokemon: " + habilidadesPokemon +
        "\nImc do Pokemon: " + imcFormatadoPokemon
);
}

function exercicioPokemon2(){
    const nomePokemon = "Charizard";
    const numeroPokemon = 6;
    const descricaoPokemon = "Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro.";
    const alturaPokemon = 1.7;
    const pesoPokemon = 90.5;
    const categoriaPokemon = "Chama";
    const habilidadesPokemon = "Tough Claws = Aumenta o dano de golpes que causam contato direto.Drought Invoca clima ensolarado ao entrar em batalha. Entre Outras."

    let imcPokemon =  pesoPokemon / (alturaPokemon ** 2);
    let imcFormatadoPokemon = imcPokemon.toFixed(2);

    alert(
        "\nNome do Pokemon: " + nomePokemon +
        "\nNumero do Pokemon: " + numeroPokemon +
        "\nDescrição do Pokemon: " + descricaoPokemon +
        "\nA altura do Pokemon é de: " + alturaPokemon + " metros" +
        "\nO peso do Pokemon é de: " + pesoPokemon + " kilos" +
        "\nCategoria do Pokemon: " + categoriaPokemon +
        "\nHabilidades do Pokemon: " + habilidadesPokemon +
        "\nImc do Pokemon: " + imcFormatadoPokemon
);
}