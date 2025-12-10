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
    let saldoAtualConta = parseInt(prompt("Saldo Atual?"));
    let valorDeposito = parseInt(prompt("Qual valor do depósito?"));
    let saldo = saldoAtualConta + valorDeposito;
    let valorSaque = parseInt(prompt("Qual valor do saque?"));

    let saldoAtual = "";
    if (valorSaque <= saldo){
        saldoAtual = saldo - valorSaque;
    } else if (valorSaque > saldo){
        alert("Saldo Insuficiente") 
        return;
    }

    alert(
        "Nome do cliente: " + nomeCliente + "\n" +
        "Saldo da conta: R$" + saldoAtual   
    )
}







