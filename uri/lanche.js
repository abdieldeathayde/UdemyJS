let codigo;
let quantidadeItem;
let soma = 0;

codigo = prompt("Digite o código: \n");
quantidadeItem = prompt("Digite a quantidade do item: \n");

while (codigo != 0) {



    let cachorroQuente = {
        nome: "Cachorro Quente"
    }

    cachorroQuente.codigo = 1;
    cachorroQuente.preco = 4.00;
    console.log(cachorroQuente);

    let xSalada = {
        nome: "X-Salada"
    }

    xSalada.codigo = 2;
    xSalada.preco = 4.50;
    console.log(xSalada);

    let xBacon = {
        nome: "X-Bacon"
    }

    xBacon.codigo = 3;
    xBacon.preco = 5.00;
    console.log(xBacon);

    let torradaSimples = {
        nome: "Torrada Simples"
    }

    torradaSimples.codigo = 4;
    torradaSimples.preco = 2;
    console.log(torradaSimples);

    refrigerante = {
        nome: "Refrigerante"
    }

    refrigerante.codigo = 5;
    refrigerante.preco = 1.50;
    console.log(refrigerante);

    codigo = prompt("Digite o código: \n");
    quantidadeItem = prompt("Digite a quantidade do item: \n");

    // if (codigo == cachorroQuente.codigo || codigo == xSalada.codigo || codigo == xBacon.codigo || codigo == torradaSimples.codigo) {
    // } 

    switch(codigo) {
        case codigo === cachorroQuente.codigo:
            soma += cachorroQuente.preco;
        case codigo === xSalada.codigo:
            soma += xSalada.preco;
        case codigo === xBacon.codigo:
            soma  += xBacon.preco;
        case codigo === torradaSimples.codigo:
            soma += torradaSimples.preco;
    }

    alert("Total: " + (soma));
}