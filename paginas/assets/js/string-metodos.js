function converterParaMaiusculo() {
    let texto = "Abacate";
    let textoMaiusculo = texto.toUpperCase();

    alert(`Texto original: ${texto}\nTexto maiúsculo: ${textoMaiusculo}`);
}

function converterParaMinusculo() {
    let texto = "Abacate";
    let textoMinusculo = texto.toLowerCase();

    alert(`Texto original ${texto}\nTexto minúsculo: ${textoMinusculo}`);
}

function removerEspacosComeco() {
    let texto = " Uma frase bem legal";
    let textoSemEspacosComeco = texto.trimStart();

    alert(`Texto original: '${texto}'
Texto sem espaços no começo: '${textoSemEspacosComeco}'`);
}

function removerEspacosFinal() {
    let texto = "Uma frase bem legal ";
    let textoSemEspacosFinal = texto.trimEnd();

    alert(`Texto original: '${texto}'
Texto sem espaços no final: '${textoSemEspacosFinal}'`)
}

function removerEspacosComecoFinal() {
    let texto = " Uma frase bem legal ";
    // let textoSemEspacoComecoFinal = texto.trimStart().trimEnd()
    let textoSemEspacosComecoFinal = texto.trim();

    alert(`Texto original: '${texto}'
Texto sem espaços no começo e final: '${textoSemEspacosComecoFinal}'`);
}

function substituir() {
    let texto = "Lorezzo faltou";
    let novoTexto = texto.replace("Lorezzo", "Lorenzo");

    alert(`Texto original: '${texto}'
Texto substituido: '${novoTexto}'`);
}

function subtituirCaminho() {
    let valorString = "R$ 1.932.183,94";

    let valorStringNovo = valorString.replace("R$", "").replaceAll(".", "").replace(",", ".");

    let valor = parseFloat(valorStringNovo);

    alert("Valor convertido: " + valor + "\nValor dobrado: " + (valor * 2));
}

function substring() {
    // 31/01/2026
    // dia
    // mes
    // ano

    let data = "31/01/2026";
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);
    // Apresentar assim
    // Blumenau, <dia> de <mês> de <ano>

    alert(`Blumenau, ${dia} de ${mes} de ${ano}`);
}

function substringHorario() {
    // let horarioAmericano = "08:30 pm";
    let horarioAmericano = prompt("Digite o horário no formato Americado");

    let hora = parseInt(horarioAmericano.substring(0, 2)); //08
    let minuto = horarioAmericano.substring(3, 5); //30
    let periodo = horarioAmericano.substring(6, 8); //pm

    let horaBrasil = 0;

    if (periodo === "am") {
        horaBrasil = hora;
    } else {
        horaBrasil = hora + 12;
    }
    let horarioBrasil = `${horaBrasil}:${minuto}`;
    alert(`Horário Usa: ${horarioAmericano}
Horário Brasil: ${horarioBrasil}`);
}

//exemploLength (length): retorna a quantidade de caracteres da string.
function exemploLength() {
    let texto = "Vingadores Guerra Infinita";
    let quantidadeCaracteres = texto.length;

    alert(`Texto: ${quantidadeCaracteres}`);
}

//comecaCom (startsWith): verifica se a string começa com um texto → true/false.
function comecaCom() {
    let nomeEmpresa = "Blusoft";

    let empresaBlumenau = false;
    if(nomeEmpresa.toLocaleLowerCase().startsWith("blu") === true){
        empresaBlumenau = true;
    }

    alert(`Empresa de Blumenau: ${empresaBlumenau}
Nome da empresa: ${nomeEmpresa}`);
}

//terminaCom (endsWith): verifica se a string termina com um texto → true/false.
function terminaCom() {
    let nomeCompleto = "Ana da Silva Souza";

    if(nomeCompleto.toUpperCase().endsWith("SILVA") || nomeCompleto.toUpperCase().endsWith("SOUZA")) {
        alert("Sobrenome Comum")
    } else {
        alert("Não é um sobrenome comum")
    }
}

//contem (includes): verifica se a string contém um trecho → true/false.
function contem() {
    let refeicao = "Purê de feijão com frango";

    if(refeicao.toLowerCase().includes("feijão") || refeicao.toLowerCase().includes("feijao")) {
        alert("Tipicamente do Brasil");
    } else {
        alert("Outra comida")
    }
}

//indiceDoCaracter (indexOf): retorna a posição (índice) onde um trecho aparece; se não achar, -1.
function indiceDoCaracter() {
    let hora = "23:49";
    // Retornar o indice do caractere encontrado, caso não encontrar retorna -1
    let indiceDoisPontos = hora.indexOf("49");
    alert(`Hora: ${hora}
Indice do ':' ${indiceDoisPontos}`);
}

//quebrarString (split): quebra a string em um array, usando um separador.
function quebrarString() {
    let data = "31/01/2026";
    let partes = data.split("/"); // =>["31", "01", "2026"]
    let dia = partes[0];
    let mes = partes[1];
    let ano = partes[2];
    // Apresentar assim
    //Blumenau, <dia> de <mês> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}`)
}

function quebrarStringDataHora() {
    let dataHora = "31/01/2026 23:49:10";
    let parteDataHora = dataHora.split(" "); // => ["31/01/2026]", "23:49:10"]
    let partesData = parteDataHora[0].split("/"); // => ["31", "01", "2026"]
    let partesHora = parteDataHora[1].split(":");  // => ["23", "49", "10"]
    let dia = partesData[0]; // 31
    let mes = partesData[1]; // 01
    let ano = partesData[2]; // 2026
    let hora = partesHora[0]; // 23
    let minuto = partesHora[1]; // 49
    let segundo = partesHora[2]; // 10

    // Apresentar assim
    // Blumenau, <dia> de <mês> de <ano>
    alert(`Blumenau, ${dia} de ${mes} de ${ano}
Hora: ${hora} Minuto: ${minuto} Segundo: ${segundo}`)
}

//padStart: preenche no começo da string até atingir um tamanho (ex.: zeros à esquerda).
function padStart() {
    //Apresentar sempre 15 caracteres
    let numeroCartao = "5230 9713 6338 5801";
    let ultimosNumeros = numeroCartao.substring(15, 19);
    alert(ultimosNumeros.padStart(16, "*"))
}

//padEnd: preenche no fim da string até atingir um tamanho (ex.: completar com espaços/pontos).
function padEnd() {
    // CSV Separando por caracteres
    // Matheus;25;5930,24
    // CSV Separando por largura fixa
    // nome 30 caracteres, idade 3, salario 10
    // Matheus              25  5930.24
    // Ana da Silva Souza   74  23232.37
    let nome = "Matheus";
    let idade = 25;
    let salario = 5930.24;

    let linha = nome.padEnd(30, " ") + idade.toString().padEnd(3, " ") + salario.toString().padEnd(10, " ");

    alert(`Linha do CSV: '${linha}'`)
}
