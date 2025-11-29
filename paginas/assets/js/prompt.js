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
    
}