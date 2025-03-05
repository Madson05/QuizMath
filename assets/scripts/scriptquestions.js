const listaDeQuestoes = [
  {
    enunciado:
      "Qual é o nome do sistema de numeração que utilizamos atualmente?",
    alternativas: [
      "Sistema romano",
      "Sistema maia",
      "Sistema indo-arábico",
      "Sistema babilônico",
      "Sistema egípcio",
    ],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Quantos símbolos (algarismos) são utilizados no sistema de numeração decimal?",
    alternativas: ["8", "9", "10", "11", "12"],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Por que o sistema de numeração que utilizamos é chamado de decimal?",
    alternativas: [
      "Porque foi criado há dez séculos",
      "Porque utiliza dez símbolos diferentes",
      "Porque agrupa os elementos de 10 em 10",
      "Porque foi criado por dez matemáticos",
      "Porque só pode representar números até 10",
    ],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Qual é a função do algarismo 0 (zero) no sistema de numeração decimal?",
    alternativas: [
      "Representar o infinito",
      "Indicar o início de um número",
      "Separar a parte inteira da decimal",
      "Indicar as ordens vazias",
      "Multiplicar o valor dos outros algarismos",
    ],
    resposta: 4,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "O que significa dizer que os algarismos têm valor posicional no sistema decimal?",
    alternativas: [
      "Que cada algarismo só pode ser usado uma vez",
      "Que os algarismos devem ser escritos em ordem crescente",
      "Que um mesmo algarismo representa valores diferentes conforme sua posição",
      "Que os algarismos maiores têm mais valor que os menores",
      "Que a posição dos algarismos não importa",
    ],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Qual instrumento antigo de cálculo é mencionado no texto para representar números?",
    alternativas: [
      "Ábaco",
      "Calculadora",
      "Régua de cálculo",
      "Computador",
      "Soroban",
    ],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "No sistema de numeração decimal, como são feitos os agrupamentos?",
    alternativas: [
      "De 5 em 5",
      "De 2 em 2",
      "De 10 em 10",
      "De 100 em 100",
      "De 20 em 20",
    ],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado: "Qual é a origem do sistema de numeração indo-arábico?",
    alternativas: [
      "Foi criado na China e aperfeiçoado pelos romanos",
      "Foi criado na Índia e aperfeiçoado pelos árabes",
      "Foi criado na Grécia e aperfeiçoado pelos egípcios",
      "Foi criado na Arábia e aperfeiçoado pelos indianos",
      "Foi criado na Europa e aperfeiçoado pelos asiáticos",
    ],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Qual é o nome dado aos símbolos utilizados para compor os números no sistema decimal?",
    alternativas: ["Números", "Dígitos", "Algarismos", "Letras", "Caracteres"],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },
];

let questaoEsc;
let listLevel;
let level = 1;
let erros = 0;
let pontos = 0;
let acertos = 0;
let classAlternativas = document.getElementsByClassName("alternativa");

function selectQuestions() {
  listLevel = listaDeQuestoes.filter((question) => question.nivel === level);
}
function RandomQuestion() {
  questaoEsc = listLevel[Math.floor(Math.random() * listLevel.length)];
}

const completeData = () => {
  let areaImagem = document.getElementById("imagem");
  let areaNivel = document.getElementById("nivel");
  let areaPontos = document.getElementById("pontuacao");
  let areaErros = document.getElementById("erros");
  let areaEnunciado = document.getElementById("enunciado");

  areaImagem.innerHTML = "";

  RandomQuestion();

  areaEnunciado.innerHTML = `${questaoEsc.enunciado}`;
  areaNivel.innerHTML = `Nivel: ${level}`;
  areaPontos.innerHTML = `Pontuação: ${pontos}`;
  areaErros.innerHTML = `Erros: ${erros}`;
  if (questaoEsc.imagem != null) {
    areaImagem.style.display = "block";
    areaImagem.innerHTML = `<img src="${questaoEsc.imagem}" alt="">`;
  } else {
    areaImagem.style.display = "none";
  }

  console.log(questaoEsc);

  for (let i = 0; i < questaoEsc.alternativas.length; i++) {
    classAlternativas[i].style.backgroundColor = "white";
    classAlternativas[i].disabled = false;
    let alt = document.getElementById(`a${i + 1}`);
    alt.innerHTML = `${questaoEsc.alternativas[i]}`;
  }
};

function checkAnswer(alternativa) {
  if (questaoEsc.resposta === alternativa) {
    classAlternativas[alternativa - 1].style.backgroundColor = "green";
    for (let i = 0; i < classAlternativas.length; i++) {
      if (classAlternativas[i].disabled == false) {
        classAlternativas[i].disabled = true;
      } else {
        classAlternativas[i].disabled = false;
      }
    }

    pontos += 10;

    listLevel = listLevel.filter((quest) => quest !== questaoEsc);

    console.log(listLevel);
  } else {
    classAlternativas[alternativa - 1].style.backgroundColor = "red";
    for (let i = 0; i < classAlternativas.length; i++) {
      if (classAlternativas[i].disabled == false) {
        classAlternativas[i].disabled = true;
      } else {
        classAlternativas[i].disabled = false;
      }
    }
    erros += 1;
  }

  // if (pontos >= 30) {
  //   pontos = 0;
  //   erros = 0;
  //   level += 1;
  //   selectQuestions();
  // }

  if (erros >= 3) {
    pontos = 0;
    erros = 0;
  }

  setTimeout(() => {
    completeData();
  }, 2000);

  if (pontos >= 100) {
    window.location.href = "../pages/success.html";
  }
}
selectQuestions();
completeData();
