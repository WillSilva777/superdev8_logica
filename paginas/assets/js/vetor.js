// var => Variavel global,ou seja,exites em todos os arquivos(inseguro)
// let => Variavel que possui escopo, ou seja, existe dentro do if, while, function...
// const => Variavel que não permite alteração, ou seja, uma vez que foi definido o valor não é possivel alterar. Tem a mesma característica do let em relação ao escopo, existe dentro do if, while, fora deixa de existir(eça morre).

function exemplo1() {
    alert("Abre o console filhão");
    //let nome1 = "mação";
    //let nome2 = "pera";
    //let nome3 = "tomate";

    // Criando um vetor
    let frutas = [];
    // adicionando os itens no vetor
    frutas.push("mação");
    frutas.push("pera");
    frutas.push("tomate");
    frutas.push("rucula");

    // alterando valor no vetor
    frutas[2] = "tomate";

    // remover 'rucula' da lista de frutas,pq não é fruta
    frutas.splice(3, 1); //3 é a posição da rucula

    console.log("Tamanho do vetor: " + frutas.length);

    // acessando uma posição específica do vetor, ou seja, 
    // acessando o valor armazenado naquela posição
    console.log("Fruta 1: " + frutas[0]);
    console.log("Fruta 2: " + frutas[1]);
    console.log("Fruta 3: " + frutas[2]);
}

function exercicio01Jogos() {
    let jogos = [];
    // Adicionar o jogo Tibia
    jogos.push("Tibia");
    // Apresentar tamanho de lista
    console.log("Tamanho do vetor: " + jogos.length);
    // Adicionar o jogo Battlefield 4
    jogos.push("Battlefield 4");
    // Adicionar os elementos da lista
    console.log("Jogo 1: " + jogos[0])
    console.log("Jogo 2: " + jogos[1])
    // Adicionar os jogos League of Legends,Medal of Honor, GTA 6
    jogos.push("League of legends");
    jogos.push("Medal of Honor");
    jogos.push("GTA 6");
    // Remover League of Legends
    jogos.splice(2, 1);
    // Apresentar o tamanho da lista
    console.log("Tamanho do vetor: " + jogos.length);
    // Apresentar os elementos da lista
    console.log("Jogo 1: " + jogos[0])
    console.log("Jogo 2: " + jogos[1])
    console.log("Jogo 3: " + jogos[2])
    console.log("Jogo 4: " + jogos[3])
    // Alterar o nome 'GTA 6' para 'GTA VI'
    jogos[3] = "GTA VI";
    // Apresentar o tamanho da lista
    console.log("Tamanho do vetor: " + jogos.length);
    // Apresentar os elementos da lista
    console.log("Jogo 1: " + jogos[0])
    console.log("Jogo 2: " + jogos[1])
    console.log("Jogo 3: " + jogos[2])
    console.log("Jogo 4: " + jogos[3])
}

function exercico01Pratos() {
    let pratos = [];
    // Adicionar pratos
    pratos.push("Strogonoff");
    pratos.push("Panqueca");
    pratos.push("Salada");
    // Apresentar os elementos da lista
    console.log("Prato 1: " + pratos[0]);
    console.log("Prato 2: " + pratos[1]);
    console.log("Prato 3: " + pratos[2]);
    // Remover Salada e apresemrar tamanho da lista
    pratos.splice(2, 1);
    console.log("Tamanho do vetor: " + pratos.length);
    // Adicionar Risoto e Sopa
    pratos.push("Risoto");
    pratos.push("Sopa");
    // Apresentar os elementos da lista
    console.log("Prato 1: " + pratos[0]);
    console.log("Prato 2: " + pratos[1]);
    console.log("Prato 3: " + pratos[2]);
    console.log("Prato 4: " + pratos[3]);
    // Alterar o nome de 'Panqueca' para 'Panqueca de Carne'
    pratos[1] = "Panqueca de Carne";
    // Apresentar o tamanho da lista
    console.log("Tamanho do vetor: " + pratos.length);
    // Apresentar os elementos da lista
    console.log("Prato 1: " + pratos[0]);
    console.log("Prato 2: " + pratos[1]);
    console.log("Prato 3: " + pratos[2]);
    console.log("Prato 4: " + pratos[3]);
}