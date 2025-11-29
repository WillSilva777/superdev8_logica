function solicitarString(){
    let nome  = prompt("Digite o seu nome");
    let sobrenome = prompt("Digite o seu sobrenome");

    let nomeSobrenome = nome + " " + sobrenome;
    alert("Nome completo: " + nomeSobrenome);
}

function solicitarInt(){
    let numeroCartao = parseInt(prompt("Digite o número do cartão"));
    let codigoSeguranca = parseInt(prompt("Digite o código de segurança"));

    alert("Número: " + numeroCartao + "\nCVV: " + codigoSeguranca);
    
}

function solicitarFloat(){
    let saldoBancario = parseFloat(prompt("Digite o saldo bancário"));
    const saque = parseFloat(prompt("Digite o valor do saque"));

    saldoBancario = saldoBancario - saque;

    alert("Saque realizado: " + saque + "\nSaldo atual: " + saldoBancario);
}

function solicitarBoolean(){
    let vencido = confirm("Produto vencido?");

    alert("Produto vencido: " + vencido);
}

function paciente(){
    let nome = prompt("Digite seu nome");
    const idade = parseInt(prompt("Digite o nome do paciente"));
    const peso = parseFloat(prompt("Digite o peso"));
    const possuiPlanosaude = confirm("Possui plano de saúde?");
    const cpf = prompt("Digite o CPF");
    
    let planoSaude = "";
    // se possuiPlanoSaude for igual a verdadeiro
    if (possuiPlanosaude === true) {
        planoSaude = prompt("Digite o plano de saúde");
    }

    const tipoSanguineo = prompt("Digite o tipo sanguíneo");
    const altura = parseFloat(prompt("Digite a altura"));

    const urgencia = prompt(`Escolha o nível de Urgência [Migué, Atestado, Dorzinha, Dengue, Dor Extrema]`);

    let tempoEspera = 0;
    if (urgencia === "Migué"){
        tempoEspera = 180;
    } else if (urgencia === "Atestado"){
        tempoEspera = 150;
    } else if (urgencia === "Dorzinha"){
        tempoEspera = 120;
    } else if (urgencia === "Dengue"){
        tempoEspera = 60;
    } else if (urgencia === "Dor Extrema"){
        tempoEspera = 30;
    } else {
        alert("Nível de Urgência inexistente");
        return;
    }
    alert(
        "🗒️ Dados do Paciente\n\n" +
        "Nome: " + nome + "\n" +
        "Idade: " + idade + "anos\n" +
        "Peso: " + peso + "kg\n" +
        "CPF: " + cpf + "\n" +
        "Possui plano de saúde: " + (possuiPlanosaude ? "Sim" : "Não") + "\n" +
        (possuiPlanosaude ? "Plano de saúde: " + planoSaude + "\n" : "") +
        "Tipo sanguíneo: " + tipoSanguineo + "\n" +
        "Altura: " + altura + "m\n" +
        "Tipo de urgência: " + urgencia + "\n" +
        "Tempo de espera: " + tempoEspera + "minutos"
    );
}

function exercicio01(){
    let nomePersonagem = prompt("Qual nome do personagem?");
    const idadePersonagem = parseInt(prompt("Qual idade do personagem?"));
    let cidadePersonagem = prompt("Qual cidade do personagem?");
    let possuiPoderes = confirm("O personagem tem poderes?");
    let quaisPoderes = "";
    if (possuiPoderes === true) {
        quaisPoderes = prompt("Quais poderes possui?");        
    }
    let atuacaoMensal = prompt("Quantas atuações mensais?")

    alert(
        "⚔️  Dados do Personagem\n\n" +
        "Nome do personagem: " + nomePersonagem + "\n" +
        "Idade do personagem: " + idadePersonagem + "\n" +
        "Cidade do personagem: " + cidadePersonagem + "\n" +
        "O personagem possui poderes: " + (possuiPoderes ? "Sim" : Não) + "\n" +
        (possuiPoderes ? "Poderes: " + quaisPoderes + "\n" : "") +
        "Quantas atuações mensais? " + atuacaoMensal + "vezes por mês" 
    )
}

function exercicio02(){
    const lado1 = parseInt(prompt("Qual largura do quadrado?"));
    const lado2 = parseInt(prompt("Qual comprimento do quadrado?"));

    const areaTotalQuadrado = lado1 * lado2

    alert(
        "A área total do quadrado é de: " + areaTotalQuadrado + "metros quadrados(em Int)"
    )
}

function exercicio021(){
    const lado1 = parseFloat(prompt("Qual largura do quadrado?"));
    const lado2 = parseFloat(prompt("Qual comprimento do quadrado?"));

    const areaTotalQuadrado = lado1 * lado2

    alert(
        "A área total do quadrado é de: " + areaTotalQuadrado + "metros quadrados(em float)"
    )
}