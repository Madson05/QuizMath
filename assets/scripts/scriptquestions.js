const listaDeQuestoes = [
  {
    enunciado: "Qual é a definição de uma fração?",
    alternativas: [
      "Um número inteiro.",
      "Uma parte de um todo dividido em partes iguais.",
      "Uma fração de um número inteiro.",
      "Uma adição de dois números inteiros.",
    ],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "Como uma fração pode ser representada graficamente?",
    alternativas: [
      "Por uma linha reta.",
      "Por um círculo dividido em partes iguais.",
      "Por um gráfico de barras",
      "Por um gráfico de pizza",
    ],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "O que representa o numerador em uma fração?",
    alternativas: [
      "A quantidade de partes em relação ao todo.",
      "A quantidade que se pretende obter do todo.",
      "A linha horizontal que separa o numerador e o denominador.",
      "A linha vertical que separa o numerador e o denominador.",
    ],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "O que representa o denominador em uma fração?",
    alternativas: [
      "A quantidade de partes que o todo foi dividido.",
      "A parte que me interessa descobrir em relação ao todo.",
      "A linha horizontal que separa o numerador e o denominador.",
      "A linha vertical que separa o numerador e o denominador.",
    ],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "Qual é a fração equivalente a 0,5?",
    alternativas: ["1/2", "1/4", "2/5", "1/3"],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "Qual fração é maior, 3/4 ou 4/5?",
    alternativas: [
      "3/4",
      "4/5",
      "As duas frações são iguais",
      "Não é possivel identificar a maior",
    ],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "Qual fração é menor, 7/8 ou 4/6?",
    alternativas: [
      "7/8",
      "4/6",
      "Não é possivel identificar a maior",
      "As duas frações são iguais",
    ],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "Qual fração é maior, 2/8 ou 1/4?",
    alternativas: [
      "2/8",
      "1/6",
      "As duas são iguais.",
      "Elas não são frações.",
    ],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado: "Qual o resultado da fração abaixo",
    alternativas: [
      "0",
      "5",
      "1/5",
      "Isso não é uma fração. Isso é o fim da matemática",
    ],
    resposta: 4,
    nivel: 1,
    imagem: "../images/fracao_50.png",
  },

  {
    enunciado: "Qual o resultado da fração abaixo?",
    alternativas: ["0", "0,5", "4", "0,25"],
    resposta: 4,
    nivel: 1,
    imagem: "../images/fracao_14.png",
  },

  {
    enunciado: `Qual a forma reduzida da fração abaixo?`,
    alternativas: ["1/2", "2/4", "1/2", "4/2"],
    resposta: 1,
    nivel: 1,
    imagem: "../images/fracao_24.png",
  },

  {
    enunciado: "Qual a forma reduzida da fração abaixo?",
    alternativas: ["5/8", "1/4", "2/3", "5/6"],
    resposta: 1,
    nivel: 1,
    imagem: "../images/fracao_58.png",
  },

  {
    enunciado: "Qual a forma reduzida das frações 5/8 e 6/48, respectivamente:",
    alternativas: ["5/8 e 1/8", "5/8 e 1/6", "1/8 e 5/8", "5/8 e 3/24"],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado: "Qual a forma reduzida das frações 6/48 e 5/8, respectivamente:",
    alternativas: ["5/8 e 1/8", "5/8 e 1/6", "1/8 e 5/8", "5/8 e 3/24"],
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

  if (pontos >= 100) {
    window.location.href = "../pages/regras.html";
  }

  setTimeout(() => {
    completeData();
  }, 2000);
}
selectQuestions();
completeData();
