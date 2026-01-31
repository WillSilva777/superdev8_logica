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
    } else {
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

/* 6. Criar uma função exercicio06()
- Solicitar 5 números utilizando enquanto
- Apresentar a soma dos números
- Apresentar a média dos números */
function exercicio06() {
    let indice = 0;
    let soma = 0;

    while (indice < 5) {
        let numeros = parseInt(prompt("Digite o número"));

        soma = soma + numeros;

        indice = indice + 1;
    }

    alert(
        "Soma dos números: " + soma + "\n" +
        "Média dos números: " + (soma / 5)
    );
}

/*     7. Criar uma função exercicio07()
    - Solicitar o valor de 6 vendas
    - Apresentar o total das vendas
    - Calcular e apresenta 5% de comissão sobre total das vendas. */
function exercicio07() {
    let indice = 0;
    let somaVenda = 0;

    while (indice < 6) {
        let valorVenda = parseFloat(prompt("Digite o valor da venda."));

        somaVenda = somaVenda + valorVenda;

        indice++;
    }

    alert(
        "Valor total da vendas: R$" + somaVenda.toFixed(2) + "\n" +
        "Valor da comissão(5%): R$" + (somaVenda * 0.05).toFixed(2)
    );
}

/*  8. Criar uma função exercicio08()
- Solicitar 10 números
- Apresentar se o número é par
- Apresentar se o número é ímpar */
function exercicio08() {
    let indice = 0;
    let resultadoFinal = "--- RESULTADO FINAL ---\n";

    while (indice < 10) {
        let numero = parseInt(prompt(`Digite o número ${indice + 1}º número.`));


        if (numero % 2 === 0) {
            // O += adiciona o novo texto ao que já existia na variável
            resultadoFinal += `O número ${numero} é PAR\n`;
        } else {
            resultadoFinal += `O número ${numero} é ÍMPAR\n`;
        }

        indice++;
    }

    alert(resultadoFinal);
}

/*     9. Criar uma função exercicio09()
- Solicitar um número para o usuário
- Apresentar a tabuada desse número utilizando while
- Formato esperado:
- 5 x 1 = 5
- 5 x 2 = 10
- ...
- 5 x 10 = 50
- O número(5) apresentado foi digitado pelo usuário, ou seja, deve apresentar a tabuada do número digitado */
function exercicio09() {
    let numero = parseInt(prompt("Digite um número:"));
    let indice = 1;
    let resultado = "";

    while (indice <= 10) {
        resultado += numero + " x " + indice + " = " + (numero * indice) + "\n";
        indice = indice + 1;
    }

    alert(resultado);
}

/*10. Criar uma função exercicio10()
- Solicitar 10 números
- Apresentar a quantidade de número
- Apresentar a quantidade de números ímpares*/
function exercicio10() {
    let indice = 1;
    let numeroImpar = 0;

    while (indice <= 10) {
        let numero = parseInt(prompt("Digite um número."));
        if (numero % 2 != 0) {
            numeroImpar = numeroImpar + 1;
        }

        indice = indice + 1;

    }
    alert(
        "Quantidade de números digitados: 10\n" +
        "Quantidade de números ímpares: " + numeroImpar
    );
}

/*11. Criar uma função exercicio11()
- Solicitar 4 notas de um aluno utilizando enquanto
- Calcular a média das notas
- Apresentar a média
- Se a média for maior ou igual a 7 apresentar Aprovado
- Senão apresentar Reprovado*/
function exercicio11() {
    let indice = 1;
    let somaNotas = 0;

    while (indice <= 4) {
        let nota = parseFloat(prompt("Digite a nota " + indice + " do aluno:"));
        somaNotas = somaNotas + nota;

        indice++;
    }
    let mediaNotas = somaNotas / 4;

    let situacaoAluno = "";
    if (mediaNotas >= 7) {
        situacaoAluno = "Aprovado";
    } else {
        situacaoAluno = "Reprovado";
    }

    alert(
        "Média das notas: " + mediaNotas + "\n" +
        "Situação do aluno: " + situacaoAluno
    )
}

/*12. Criar uma função exercicio12()
- Solicitar o valor de 5 produtos utilizando enquanto
- Calcular o total da compra
- Se o total for maior que 200 aplicar 10% de desconto
- Apresentar o valor total sem desconto
- Apresentar o valor final com desconto (se houver)*/
function exercicio12() {
    let indice = 1;
    let somaProdutos = 0;

    while (indice <= 5) {
        let valorProduto = parseFloat(prompt("Digite o valor do produto " + indice + "."));
        somaProdutos = somaProdutos + valorProduto;

        indice++;
    }

    let desconto = 0;
    if (somaProdutos > 200) {
        desconto = somaProdutos * 0.1;
    }

    let mensagem = "Valor total da compra: R$ " + somaProdutos.toFixed(2);

    if (somaProdutos > 200) {
        mensagem += "\nValor com 10% de desconto: R$ " + (somaProdutos - desconto).toFixed(2);
    }

    alert(mensagem);
}

/*13. Criar uma função exercicio13()
- Solicitar 6 idades utilizando enquanto
- Calcular a média das idades
- Apresentar a média das idades
- Se a média for maior ou igual a 18 apresentar Maior de idade
- Senão apresentar Menor de idade*/

function exercicio13() {
    let indice = 1;
    let somaIdades = 0;

    while (indice <= 6) {
        let idade = parseInt(prompt("Digita a idade."));
        somaIdades = somaIdades + idade;
        indice++;
    }

    let mediaIdades = somaIdades / 6;
    if (mediaIdades >= 18) {
        alert("Maior de idade com média de " + mediaIdades.toFixed(1));
    } else {
        alert("Menor de idade com média de " + mediaIdades.toFixed(1));
    }
}

/*14. Criar uma função exercicio14()
- Solicitar 5 salários utilizando enquanto
- Calcular o maior salário informado
- Calcular o menor salário informado
- Calcular a média dos salários
- Se a média for maior que 3000 apresentar mensagem Salários acima da média
- Senão apresentar mensagem Salários dentro da média*/

function exercicio14() {
    let indice = 0;
    let somaSalarios = 0;
    let maiorSalario;
    let menorSalario;

    while (indice < 5) {
        let salario = parseFloat(prompt(`Digite o ${indice + 1}º salário:`));

        if (indice === 0) {
            maiorSalario = salario;
            menorSalario = salario;
        } else {
            if (salario > maiorSalario) {
                maiorSalario = salario;
            }
            if (salario < menorSalario) {
                menorSalario = salario;
            }
        }

        somaSalarios = somaSalarios + salario;
        indice++;
    }

    let mediaSalarios = somaSalarios / 5;

    let mensagem =
        "Maior salário: R$ " + maiorSalario.toFixed(2) + "\n" +
        "Menor salário: R$ " + menorSalario.toFixed(2) + "\n" +
        "Média dos salários: R$ " + mediaSalarios.toFixed(2) + "\n";

    if (mediaSalarios > 3000) {
        mensagem += "Salários acima da média";
    } else {
        mensagem += "Salários dentro da média";
    }

    alert(mensagem);
}

/*15. Criar uma função exercicio15()
- Solicitar 4 valores de contas (água, luz, internet, aluguel) utilizando enquanto
- Calcular o total das contas
- Solicitar a renda mensal do usuário
- Se o total das contas for maior que 50% da renda apresentar mensagem Orçamento comprometido
- Senão apresentar mensagem Orçamento saudável
- Apresentar o total das contas e o percentual que representa da renda**/
function exercicio15() {
    let indice = 0;
    let nomesContas = ["Água", "Luz", "Internet", "Aluguel"];
    let somaContas = 0;

    while (indice < 4) {
        let valorConta = parseFloat(prompt("Digite o valor da conta de " + nomesContas[indice] + ":"));
        somaContas = somaContas + valorConta;

        indice++;
    }
    let rendaUsuario = parseFloat(prompt("Digite o seu salário:"));

    let percentualRenda = (somaContas / rendaUsuario) * 100;

    let mensagem =
        "Total de contas: R$" + somaContas.toFixed(2) + "\n" +
        "Percentual da renda: " + percentualRenda.toFixed(2) + "%\n";


    if (somaContas > 0.5 * rendaUsuario) {
        mensagem += "Orçamento Comprometido.";
    } else {
        mensagem += "Orçamento saudável.";
    }

    alert(mensagem);
}

/*16. Criar uma função exercicio16()
- Solicitar a altura de 5 pessoas
- Descobrir e armazenar a maior altura utilizando while
- Apresentar a maior altura informada*/
function exercicio16() {
    let indice = 0;
    let maiorAltura;

    while (indice < 5) {
        let altura = parseFloat(prompt(`Altura da ${indice + 1}º pessoa:`));

        if (indice === 0) {
            maiorAltura = altura;
        } else {
            if (altura > maiorAltura) {
                maiorAltura = altura;
            }
        }
        indice++;
    }
    alert("Maior altura é de " + maiorAltura + " metros.");
}

/*17. Criar uma função exercicio17()
- Solicitar o peso de 4 pessoas
- Descobrir e armazenar o menor peso utilizando while
- Apresentar o menor peso informado*/
function exercicio17() {
    let indice = 0;
    let menorPeso;

    while (indice < 4) {
        let peso = parseFloat(prompt(`Digite o ${indice + 1}º peso:`));

        if (indice === 0) {
            menorPeso = peso;
        } else {
            if (peso < menorPeso) {
                menorPeso = peso;
            }
        }

        indice++;
    }
    alert("Menor peso é de " + menorPeso + " kilos.");
}

/*18. Criar uma função exercicio18()
- Solicitar o nome e a idade de 5 pessoas
- Descobrir quem possui a maior idade utilizando while
- Apresentar o nome da pessoa e a idade dela*/
function exercicio18() {
    let indice = 0;
    let nomeMaiorIdade = "";
    let maiorIdade;

    while (indice < 5) {
        let nome = prompt(`Digite o nome da ${indice + 1}º pessoa:`);
        let idade = parseInt(prompt(`Digite a idade da ${indice + 1}º pessoa:`));

        if (indice === 0) {
            maiorIdade = idade;
            nomeMaiorIdade = nome;
        } else {
            if (idade > maiorIdade) {
                maiorIdade = idade;
                nomeMaiorIdade = nome;
            }
        }

        indice++;
    }
    alert("Pessoa mais velha: " + nomeMaiorIdade + "\nIdade: " + maiorIdade);
}

/*19. Criar uma função exercicio19()
- Solicitar o preço de 6 produtos
- Descobrir o maior preço utilizando while
- Descobrir o menor preço utilizando while
- Apresentar o maior e o menor preço informados*/
function exercicio19() {
    let indice = 0;
    let maiorPreco;
    let menorPreco;

    while (indice < 6) {
        let preco = parseFloat(prompt(`Digite o valor do ${indice + 1}º produto:`).replace(",", "."));

        if (indice === 0) {
            maiorPreco = preco;
            menorPreco = preco;
        } else {
            if (preco > maiorPreco) {
                maiorPreco = preco;
            }
            if (preco < menorPreco) {
                menorPreco = preco;
            }
        }

        indice++;
    }
    alert(
        "O maior preço foi de: R$" + maiorPreco.toFixed(2) + "\n" +
        "O menor preço foi de: R$" + menorPreco.toFixed(2)
    )
}

/*20. Criar uma função exercicio20()
- Solicitar o nome e o valor do salário de 4 colaboradores
- Descobrir qual colaborador tem o maior salário utilizando while
- Apresentar o nome do colaborador e o salário dele*/
function exercicio20() {
    let indice = 0;
    let nomeColaboradorRico = "";
    let maiorSalario;

    while (indice < 4) {
        let nomeColaborador = prompt(`Digite o nome do ${indice + 1}º colaborador:`);
        let salario = parseFloat(prompt(`Digite o salario do ${indice + 1}º colaborador:`)).replace(",", ".");

        if (indice === 0) {
            maiorSalario = salario;
            nomeColaboradorRico = nomeColaborador;
        } else {
            if (salario > maiorSalario) {
                maiorSalario = salario;
                nomeColaboradorRico = nomeColaborador;
            }
        }

        indice++;
    }
    alert(
        "Colaborador com maior salário: " + nomeColaboradorRico + "\n" +
        "Salário: R$" + maiorSalario.toFixed(2)
    )
}

/*21. Criar uma função exercicio21()
- Solicitar a temperatura de 7 dias
- Descobrir a maior temperatura utilizando while
- Descobrir a menor temperatura utilizando while
- Apresentar a maior e a menor temperatura informadas*/
function exercicio21() {
    let indice = 0;
    let maiorTemperatura;
    let menorTemperatura;

    while (indice < 7) {
        let temperatura = parseFloat(prompt(`Temperatura no ${indice + 1}º dia:`));

        if (indice === 0) {
            maiorTemperatura = temperatura;
            menorTemperatura = temperatura;
        } else {
            if (temperatura > maiorTemperatura) {
                maiorTemperatura = temperatura;
            }
            if (temperatura < menorTemperatura) {
                menorTemperatura = temperatura;
            }
        }

        indice++;
    }

    alert(
        "Maior temperatura dos ultimos dias foi de: " + maiorTemperatura + "º\n" +
        "Menor temperatura dos ultimos dias foi de: " + menorTemperatura + "º"
    )
}

/*22. Criar uma função exercicio22()
- Solicitar o nome e o preço de 5 produtos
- Descobrir qual produto tem o menor preço utilizando while
- Apresentar o nome do produto e o preço dele*/
function exercicio22() {
    let indice = 0;
    let nomeProdutoMenorPreco
    let produtoMenorPreco;

    while (indice < 5) {
        let nomeProduto = prompt(`Digite o nome do produto ${indice + 1};`)
        let precoProduto = parseFloat(prompt(`Digite o valor do produto ${indice + 1}:`));

        if (indice === 0) {
            nomeProdutoMenorPreco = nomeProduto;
            produtoMenorPreco = precoProduto;
        } else {
            if (precoProduto < produtoMenorPreco) {
                produtoMenorPreco = precoProduto;
                nomeProdutoMenorPreco = nomeProduto;
            }
        }

        indice++;
    }

    alert(
        "O produto mais barato é " + nomeProdutoMenorPreco +
        "\nValor: R$ " + produtoMenorPreco.toFixed(2)
    )
}

/*23. Criar uma função exercicio23()
- Solicitar a idade de 8 pessoas
- Contar quantas são crianças (idade < 12)
- Contar quantas são adolescentes (12 a 17)
- Contar quantas são adultos (18 a 59)
- Contar quantas são idosos (60 ou mais)
- Apresentar a quantidade em cada categoria*/
function exercicio23() {
    let indice = 0;
    let crianca = 0;
    let adolescentes = 0;
    let adultos = 0;
    let idosos = 0;

    while (indice < 8) {
        let idade = parseInt(prompt(`Digite a idade da ${indice + 1}º pessoa:`));

        if (idade < 12) {
            crianca = crianca + 1;
        } else if (idade >= 12 && idade <= 17) {
            adolescentes = adolescentes + 1;
        } else if (idade >= 18 && idade <= 59) {
            adultos = adultos + 1;
        } else {
            idosos = idosos + 1;
        }

        indice++;
    }
    alert(
        "Crianças: " + crianca +
        "\nAdolescentes: " + adolescentes +
        "\nAdultos: " + adultos +
        "\nIdosos: " + idosos
    )
}

/*24. Criar uma função exercicio24()
- Solicitar a nota de 10 alunos
- Contar quantos alunos estão Reprovados (nota < 5)
- Contar quantos alunos estão em Recuperação (nota >= 5 e < 7)
- Contar quantos alunos estão Aprovados (nota >= 7)
- Apresentar a quantidade de Reprovados, Recuperação e Aprovados*/
function exercicio24() {
    let indice = 0;
    let aprovados = 0;
    let reprovados = 0;
    let recuperacao = 0;

    while (indice < 10) {
        let nota = parseFloat(prompt(`Digite a nota do ${indice + 1}º aluno:`));

        if (nota < 5) {
            reprovados++;
        } else if (nota < 7) {
            recuperacao++;
        } else {
            aprovados++;
        }
        indice++;
    }
    alert(
        "Alunos aprovados: " + aprovados +
        "\nAlunos em recuperação: " + recuperacao +
        "\nAlunos reprovados: " + reprovados
    )
}

/*25. Criar uma função exercicio25()
- Solicitar o salário de 7 colaboradores
- Contar quantos ganham até 2000
- Contar quantos ganham entre 2001 e 5000
- Contar quantos ganham acima de 5000
- Apresentar a quantidade de colaboradores em cada faixa salarial*/
function exercicio25() {
    let indice = 0;
    let alto = 0;
    let medio = 0;
    let baixo = 0;

    while (indice < 7) {
        let salario = parseFloat(prompt(`Salário do colaborador ${indice + 1}`));

        if (salario <= 2000) {
            baixo++;
        } else if (salario < 5000) {
            medio++;
        } else {
            alto++;
        }
        indice++;
    }
    alert(
        "Salário abaixo de R$2000,00: " + baixo + " colaborador(es)\n" +
        "Salário entre R$2000,00 e R$5000,00: " + medio + " colaborador(es)\n" +
        "Salário acima de R$5000,00: " + alto + " colaborador(es)"
    )
}

/*26. Criar uma função exercicio26()
- Solicitar a temperatura de 6 dias
- Contar quantos dias foram Frios (temperatura < 15)
- Contar quantos dias foram Agradáveis (temperatura entre 15 e 25)
- Contar quantos dias foram Quentes (temperatura > 25)
- Apresentar a quantidade de dias Frios, Agradáveis e Quentes*/
function exercicio26() {
    let indice = 0;
    let frio = 0;
    let agradavel = 0;
    let quente = 0;

    while (indice < 6) {
        let temperatura = parseFloat(prompt(`Temperatura do dia ${indice + 1}:`));

        if (temperatura < 15) {
            frio++;
        } else if (temperatura < 25) {
            agradavel++;
        } else {
            quente++;
        }
        indice++;
    }
    alert(
        "Dias frios: " + frio +
        "\nDias agradáveis: " + agradavel +
        "\nDias quentes: " + quente
    )
}

/*27. Criar uma função exercicio27()
- Solicitar a avaliação de 10 clientes (1 a 5)
- Contar quantas avaliações foram Ruim (1 ou 2)
- Contar quantas avaliações foram Regular (3)
- Contar quantas avaliações foram Bom (4 ou 5)
- Apresentar a quantidade de respostas Ruim, Regular e Bom*/
function exercicio27() {
    let indice = 0;
    let ruim = 0;
    let regular = 0;
    let bom = 0;

    while (indice < 10) {
        let avaliacao = parseInt(prompt(`Faça uma avaliação de 1 à 5:`));

        // 🔎 VALIDAÇÃO ENTRA AQUI
        if (isNaN(avaliacao) || avaliacao < 1 || avaliacao > 5) {
            alert("Digite uma avaliação válida (1 a 5)");
            continue; // volta para o início do while
        }

        if (avaliacao < 3) {
            ruim++;
        } else if (avaliacao == 3) {
            regular++;
        } else {
            bom++;
        }
        indice++;
    }
    alert(
        "Avaliação ruim: " + ruim +
        "\nAvaliação regular: " + regular +
        "\nAvaliação boa: " + bom
    )
}

/*28. Criar uma função exercicio28()
- Solicitar 8 números inteiros
- Contar quantos números são negativos
- Contar quantos números são iguais a zero
- Contar quantos números são positivos
- Apresentar a quantidade de números negativos, iguais a zero e positivos*/
function exercicio28() {
    let indice = 0;
    let negativo = 0;
    let zero = 0;
    let positivo = 0;

    while (indice < 8) {
        let numero = parseInt(prompt(`Digite o ${indice + 1}º número:`));

        if (numero < 0) {
            negativo++;
        } else if (numero == 0) {
            zero++;
        } else {
            positivo++;
        }
        indice++;
    }
    alert(
        "Números negativos: " + negativo +
        "\nNúmero zero: " + zero +
        "\nNúmeros positivos: " + positivo
    )
}

/*29. Criar uma função exercicio29()
- Solicitar o peso de 5 encomendas
- Contar quantas são Leves (peso < 2 kg)
- Contar quantas são Médias (peso entre 2 e 10 kg)
- Contar quantas são Pesadas (peso > 10 kg)
- Apresentar a quantidade de encomendas Leves, Médias e Pesadas*/
function exercicio29() {
    let indice = 0;
    let leve = 0;
    let medio = 0;
    let pesado = 0;

    while (indice < 5) {
        let peso = parseFloat(prompt(`Digite o peso da ${indice + 1}º encomenda:`));

        if (peso < 2) {
            leve++;
        } else if (peso < 10) {
            medio++;
        } else {
            pesado++;
        }
        indice++;
    }
    alert(
        "Encomenda leve: " + leve +
        "\nEncomenda media: " + medio +
        "\nEncomenda pesada: " + pesado
    )
}

/*30. Criar uma função exercicio30()
- Solicitar a quantidade de pelúcias da Disney que deseja cadastrar
- Para cada pelúcia, solicitar o personagem [MICKEY/MINNIE/DONALD]
- Contar quantas pelúcias são do Mickey
- Contar quantas pelúcias são da Minnie
- Contar quantas pelúcias são do Donald
- Apresentar o resumo das pelúcias cadastradas por personagem*/
function exercicio30() {
    let indice = 0, mickey = 0, minnie = 0, donald = 0;
    let qtdPelucias = parseInt(prompt("Digite quantas pelúcias cadastrar:"));

    while (indice < qtdPelucias) {
        let nome = prompt("Digite qual pelúcia cadastrar:MICKEY / MINNIE / DONALD").toUpperCase();

        if (nome !== "MICKEY" && nome !== "MINNIE" && nome !== "DONALD") {
            alert("Nome com erro ortografico!")
            continue;
        }

        if (nome === "MICKEY") {
            mickey = mickey + 1;
        } else if (nome === "MINNIE") {
            minnie = minnie + 1;
        } else if (nome === "DONALD") {
            donald = donald + 1;
        }

        indice = indice + 1;
    }
    alert(
        "Número de Mickey: " + mickey +
        "\nNúmero de Minnie: " + minnie +
        "\nNúmero de Donald: " + donald
    )
}

/*31. Criar uma função exercicio31()
- Solicitar a quantidade de clientes que irão responder a pesquisa
- Para cada cliente, solicitar a forma de pagamento utilizada [CRÉDITO/DÉBITO/DINHEIRO]
- Contar quantos pagaram no crédito
- Contar quantos pagaram no débito
- Contar quantos pagaram em dinheiro
- Apresentar o total de clientes em cada forma de pagamento*/
function exercicio31() {
    let indice = 0, credito = 0, debito = 0, dinheiro;
    let quantidadeClientes = parseInt(prompt(`Quantos clientes responderão a pesquisa?`));

    while (indice < quantidadeClientes) {
        let formaPagamento = prompt(`Pesquisa de forma de pagamento,digite qual você usa [CRÉDITO/DÉBITO/DINHEIRO]`).toUpperCase;

        if (formaPagamento === "CRÉDITO") {
            credito = credito + 1;
        }
    }
}

/*50. Criar uma função exercicio50()
- Cadastrar quantos títulos desejar em uma maratona geek
- Para cada título solicitar:
    - Nome do título
    - Tipo [FILME/SÉRIE/ANIME]
    - Nota (0 a 10)
- Calcular a maior nota atribuída
- Calcular a menor nota atribuída
- Calcular a média das notas
- Contar quantos são FILME, quantos são SÉRIE e quantos são ANIME
- Apresentar um resumo geral da maratona*/
function exercicio50() {
    let i = 0, maiorNota = 0, menorNota = 0, mediaNotas = 0;
    let series = parseInt(prompt("Quantos títulos cadastrar:"));


    while (i < series) {
        let nomeTitulo = prompt(`Digite o nome da ${i + 1}° título(s):`);
        let tipo = prompt(`Digite o tipo:[FILME/SÉRIE/ANIME]`);
        let nota = parseInt(`Digite a nota`);

        if (nota > maiorNota) {
            maiorNota = nota;
        }

        if (nota < menorNota) {
            menorNota = nota;
        }



        i = i + 1;
    }
}