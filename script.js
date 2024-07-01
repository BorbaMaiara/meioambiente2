const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que tem poluição?",
        alternativas: [
            "o ser humano provoca poluição ambiental quando suas industria, por exemplo lançam poluente no ar ",
            "a poluição não causa mau ao seres humanos"
        ]
    },
    {
        enunciado: "Como preservar árvores e florestas?",
        alternativas: [
            "reutilizando metais e vidros ",
            "reciclando papeis, jornais e revistas "
        ]
    },
    {
        enunciado: "Derrubar árvore contribuir para as cidades tornarem-se mais quentes?",
        alternativas: [
            "Verdadeiro ",
            "Falso"
        ]
    },
    {
        enunciado: "O meio anbiente, bem de uso comum do povo, consistente no equilíbrio ecológico e na higidez do meio e dos,recursos naturais,é bem? ",
        alternativas: [
            "comum, geral, difuso, indivisível, indisponivel e impeenhorável",
            "coletivo, divisível e indisponível"
        ]
    },
    {
        enunciado: "Pergunta 5",
        alternativas: [
            "Alternativa 1",
            "Alternativa 2"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();