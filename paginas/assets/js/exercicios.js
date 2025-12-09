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


/* 6. Criar uma função exercicio06

      "Cliente com assinatura Premium? " + (clienteAssinante ? "Sim" : "Não") + "\n" +
        (clienteAssinante ? "Valor com desconto: " + valorComDesconto : "")


- Solicitar o modelo do carro
- Solicitar o ano do carro (número)
- Solicitar o valor do carro (número)
- Solicitar a quantidade de parcelas (número inteiro)
- Calcular o valor da parcela (valor do carro / quantidade de parcelas)
- Solicitar se o cliente quer incluir seguro (boolean - confirm)
- Se incluir seguro, adicionar R$ 150,00 ao valor da parcela
- Apresentar todos os dados e o valor final da parcela */