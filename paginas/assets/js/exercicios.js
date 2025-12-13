console.log("Arquivo exercicios.js carregado");

function filme() {
    let nomeDoFilme = prompt("Qual nome do filme?");
    let anoDeLancamento = parseInt(prompt("Qual ano de lançamento?"));
    let duracaoFilme = parseInt(prompt("Qual duração do filme??(Minutos)"));
    let generoDoFilme = prompt("Qual gênero do filme?");
    let filmeRepetido = confirm("Já assistiu o filme?");

    alert(
        "Nome do filme: " + nomeDoFilme + "\n" +
        "Ano do lançamento: " + anoDeLancamento + "\n" +
        "Duração do filme: " + duracaoFilme + "\n" +
        "Gênero do filme: " + generoDoFilme + "\n" +
        "Já assisteu o filme? " + filmeRepetido
    )
}

function assinante() {

    let nomeProduto = prompt("Qual nome do produto?");
    let precoProdutoUnitario = parseFloat(prompt("Qual preço do produto?"));


    let quantidadeProduto = parseInt(prompt("Comprou quantas unidades?"));
    let valorTotal = precoProdutoUnitario * quantidadeProduto;
    let clienteAssinante = confirm("Cliente assinante Premium?");

    let valorComDesconto = valorTotal;
    if (clienteAssinante === true) {
        valorComDesconto = valorTotal * 0.9;
    }

    alert(
        "Nome do produto: " + nomeProduto + "\n" +
        "Preço unitário: " + precoProdutoUnitario + "\n" +
        "Quantidade comprada? " + quantidadeProduto + "\n" +
        "Valor total da compra: R$ " + valorTotal + "\n" +
        "Cliente com assinatura Premium? " + (clienteAssinante ? "Sim" : "Não") + "\n" +
        (clienteAssinante ? "Valor com desconto: " + valorComDesconto : "")
    )
}

function alunoNotas() {
    let nomeAluno = prompt("Nome do aluno?");
    let nota1 = parseFloat(prompt("Qual a primeira nota?"));
    let nota2 = parseFloat(prompt("Qual a segunda nota?"));
    let nota3 = parseFloat(prompt("Qual a terceira nota?"));
    let mediaNotas = (nota1 + nota2 + nota3) / 3;
    let mediaFormatada = mediaNotas.toFixed(2);

    let situacao = "";
    if (mediaNotas > 7) {
        situacao = "Aprovado";
    } else if ((mediaNotas > 5) && (mediaNotas < 6.99)) {
        situacao = "Recuperação";
    } else if (mediaFormatada < 4.99) {
        situacao = "Reprovado";
    }

    alert(
        "Nome do aluno: " + nomeAluno + "\n" +
        "Nota 1: " + nota1 + "\n" +
        "Nota 2:" + nota2 + "\n" +
        "Nota 3: " + nota3 + "\n" +
        "Média: " + mediaFormatada + "\n" +
        "Aluno " + situacao
    )
}

function carro() {
    let modeloCarro = prompt("Qual modelo do carro?");
    let anoCarro = parseInt(prompt("Qual ano do carro?"));
    let valorCarro = parseInt(prompt("Qual valor do carro?"));
    let quantidadeParcelaCarro = parseInt(prompt("Quantas parcelas?"));
    let valorParcela = valorCarro / quantidadeParcelaCarro;
    let valorParcelaFormatado = valorParcela.toFixed(2);
    const seguro = parseInt(150.00)

    let incluirSeguro = confirm("Incluir seguro?");
    if (incluirSeguro == true) {
        valorParcelaSeguro = valorParcela + seguro;
    }
    let valorParcelaSeguroFormatado = valorParcelaSeguro.toFixed(2);

    alert(
        "Modelo do carro: " + modeloCarro + "\n" +
        "Ano do carro: " + anoCarro + "\n" +
        "Valor do carro: " + valorCarro + "\n" +
        "Quantidade de parcelas: " + quantidadeParcelaCarro + "\n" +
        "Valor da parcela: R$ " + valorParcelaFormatado + "\n" +
        "Incluir seguro? " + (incluirSeguro ? "Sim" : "Não") + "\n" +
        (incluirSeguro ? "Valor da parcela com seguro: R$ " + valorParcelaSeguroFormatado : "Sem seguro incluso")
    )
}

function jogo() {
    let nomeJogo = prompt("Qual nome do jogo?");
    let horasJogadasDia = parseInt(prompt("Quantas horas por dia jogado?"));
    let diasJogadosSemana = parseInt(prompt("Quantidade de dias jogados na semana?"));
    let horasJogadasSemana = horasJogadasDia * diasJogadosSemana;
    let jogoOnline = confirm;

    alert(
        "Nome do jogo: " + nomeJogo + "\n" +
        "Horas jogadas na semana: " + horasJogadasSemana + " horas"
    )
}

function restaurante() {
    let nomeRestaurante = prompt("Qual nome do restaurante?");
    let valorConta = parseFloat(prompt("Qual valor da conta?"));
    let quantidadePessoas = parseInt(prompt("Quantas pessoas tem na mesa?"));
    let valorPorPessoa = valorConta / quantidadePessoas;

    let taxaServico = confirm("Pagar taxa de serviço?");
    let pgtoTaxaServico = taxaServico ? valorConta * 1.10 : valorConta;

    alert(
        "Restaurante: " + nomeRestaurante + "\n" +
        "Valor da conta: R$ " + valorConta.toFixed(2) + "\n" +
        "Quantidade de pessoas: " + quantidadePessoas + "\n" +
        "Valor por pessoa (sem taxa): R$ " + valorPorPessoa.toFixed(2) + "\n" +
        "Taxa de serviço: " + (taxaServico ? "Sim (10%)" : "Não") + "\n" +
        "Valor final da conta: R$ " + pgtoTaxaServico.toFixed(2) + "\n" +
        "Valor por pessoa (final): R$ " + (pgtoTaxaServico / quantidadePessoas).toFixed(2)
    )
}

function funcionario() {
    let nomefuncionario = prompt("Nome funcionário?");
    let salarioBase = parseInt(prompt("Qual salário base?"));
    let valorHorasextras = parseInt(prompt("Valor das horas extras feitas?"));
    let descontos = parseInt(prompt("Valor dos descontos?"));
    let salarioFinal = (salarioBase + valorHorasextras) - descontos;

    let imposto = "";
    if (salarioFinal > 3000) {
        imposto = "Imposto alto";
    } else if (salarioFinal < 3000) {
        imposto = "Imposto padrão";
    }

    alert(
        "Nome do funcionário: " + nomefuncionario + "\n" +
        "Salário base: " + salarioBase + "\n" +
        "Valor das horas extras: " + valorHorasextras + "\n" +
        "Valor dos descontos: " + descontos + "\n" +
        "Salário final: " + salarioFinal + "\n" +
        "Tipo de imposto: " + imposto
    )
}

function cliente() {
    let nomeCliente = prompt("Qual nome do cliente?");
    let saldoAtualConta = parseFloat(prompt("Saldo Atual?"));
    let valorDeposito = parseFloat(prompt("Qual valor do depósito?"));
    let saldo = saldoAtualConta + valorDeposito;
    let valorSaque = parseFloat(prompt("Qual valor do saque?"));

    let saldoAtual = parseFloat(0);
    if (valorSaque <= saldo) {
        saldoAtual = saldo - valorSaque;
    } else if (valorSaque > saldo) {
        alert("Saldo Insuficiente")
        return;
    }

    alert(
        "Nome do cliente: " + nomeCliente + "\n" +
        "Saldo da conta: R$" + saldoAtual.toFixed(2)
    )
}

/*
1. Criar uma função exercicio01()
- Pedir 5 nomes de alunos.
- Usar uma variável indice começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir o nome do aluno com prompt.
    - Mostrar um alert com "Aluno cadastrado: " + nome.
    - Incrementar o indice.
- Ao final, mostrar um alert "Cadastro finalizado".
*/
function exercicio01() {
    let indice = 0;

    while (indice < 5) {
        let nome = prompt("Nome do aluno")

        alert("Aluno cadastrado: " + nome)

        indice = indice + 1;
    }

    alert("Cadastro finalizado");
}

/* 2. Criar uma função exercicio02()
- Pedir 4 cores favoritas.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 4:
    - Pedir uma cor (ex: "Digite uma cor").
    - Mostrar um alert com "Cor escolhida: " + cor.
    - Incrementar o indice.
- Ao final, mostrar um alert "Obrigado por informar suas cores favoritas".
 */
function exercicio02() {
    let indice = 0;

    while (indice < 4) {
        let cor = prompt("Cor favorita");
        alert("Cor favorita: " + cor);

        indice++;
    }

    alert("Obrigado por informar suas cores favoritas!");
}

/* 3. Criar uma função exercicio03()
- Pedir 3 nomes de cidades que o usuário quer viajar.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome da cidade.
    - Mostrar um alert com "Destino " + (indice + 1) + ": " + cidade.
    - Incrementar o indice.
- Ao final, mostrar um alert "Planejamento de viagem concluído". */
function exercicio03() {
    let indice = 0;

    while (indice < 3) {
        let cidade = prompt("Nome da cidade");

        alert("Destino " + (indice + 1) + ": " + cidade);

        indice++;
    }

    alert("Planejamento de viagem concluído.")
}

/* 4. Criar uma função exercicio04()
- Pedir 5 números inteiros.
- Usar while com indice começando em 0.
- Criar uma variável soma começando em 0.
- Enquanto o indice for menor que 5:
    - Pedir um número com prompt.
    - Converter para inteiro (parseInt).
    - Somar na variável soma.
    - Incrementar o indice.
- Ao final, mostrar um alert com "Soma total: " + soma.
 */
function exercicio04() {
    let indice = 0;
    let soma = 0;

    while (indice < 5) {
        let numero = parseInt(prompt("Digite um número"));

        soma = soma + numero;

        indice++;
    }

    alert("Soma total: " + soma)
}

/* 5. Criar uma função exercicio05()
- Pedir 3 filmes favoritos.
- Usar while com indice começando em 0.
- Enquanto o indice for menor que 3:
    - Pedir o nome do filme.
    - Pedir o ano de lançamento.
    - Mostrar um alert com "Filme: [nome] - Ano: [ano]".
    - Incrementar o indice.
- Ao final, mostrar um alert "Lista de filmes cadastrada com sucesso".
*/
function exercicio05() {
    let indice = 0;

    while (indice < 3) {
        let nomeFilme = prompt("Digite o nome do filme");
        let anoFilme = parseInt(prompt("Digite o ano do filme"));

        alert("Filme: " + nomeFilme + " - " + "Ano: " + anoFilme);

        indice++;
    }

    alert("Lista de filmes cadastradas com sucesso!")
}


