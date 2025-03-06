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
      "Porque utiliza dez símbolos diferentes e agrupa os elementos de 10 em 10",
      "Porque representa os numeros de 1 a 10",
      "Porque foi criado por dez matemáticos",
      "Porque só pode representar números até 10",
    ],
    resposta: 2,
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
  // Questões sobre Decomposição Aditiva
  {
    enunciado:
      "João encontrou um baú antigo com um código numérico de 325. Para abrir o baú, ele precisa escrever a decomposição aditiva correta desse número. Qual é a opção correta?",
    alternativas: ["300 + 2 + 5", "300 + 20 + 5", "30 + 20 + 5", "3 + 2 + 5"],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Durante uma aula de arqueologia, Maria encontrou uma placa com o número 4.067. O professor pediu que ela escrevesse a decomposição aditiva desse número. Qual das opções abaixo está correta?",
    alternativas: [
      "4.000 + 600 + 70",
      "4.000 + 600 + 7",
      "4.000 + 60 + 70",
      "4.000 + 60 + 7",
    ],
    resposta: 4,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Em uma gincana escolar, Pedro precisa representar o número 8.239 de forma decomposta para ganhar pontos. Qual das opções abaixo ele deve escolher?",
    alternativas: [
      "8.000 + 2.000 + 30 + 9",
      "800 + 200 + 30 + 9",
      "8.000 + 200 + 30 + 9",
      "80 + 2 + 3 + 9",
    ],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },

  // Questões sobre Decomposição Multiplicativa
  {
    enunciado:
      "Um robô precisa decifrar o código numérico 325 usando a decomposição multiplicativa. Qual é a forma correta dessa decomposição?",
    alternativas: [
      "3 × 100 + 2 × 10 + 5 × 1",
      "30 × 10 + 2 × 5 + 5 × 1",
      "3 × 10 + 2 × 10 + 5 × 1",
      "300 × 1 + 20 × 1 + 5 × 1",
    ],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Em uma competição de matemática, os participantes devem decompor o número 4.067 utilizando a multiplicação. Qual é a opção correta?",
    alternativas: [
      "4 × 1.000 + 6 × 10 + 7 × 1",
      "4 × 1.000 + 60 × 10 + 7 × 1",
      "4 × 100 + 6 × 10 + 7 × 1",
      "4 × 1.000 + 6 × 100 + 7 × 10",
    ],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Para solucionar um enigma, Luiza precisa decompor o número 8.239 de forma multiplicativa. Qual opção está correta?",
    alternativas: [
      "8 × 100 + 2 × 10 + 3 × 1 + 9 × 1",
      "8 × 1.000 + 2 × 100 + 3 × 10 + 9 × 1",
      "80 × 10 + 2 × 100 + 3 × 10 + 9 × 1",
      "8 × 1.000 + 20 × 100 + 3 × 10 + 9 × 1",
    ],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  // Questões sobre Sucessor e Antecessor
  {
    enunciado:
      "Lucas está subindo uma escada e percebe que está no degrau 499. Para chegar ao próximo degrau, qual será o número que ele encontrará?",
    alternativas: ["498", "499", "500", "501"],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Durante um jogo de tabuleiro, Ana percebe que está na casa 700. Seu amigo estava na casa anterior. Qual era a casa onde ele estava?",
    alternativas: ["698", "699", "700", "701"],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Um pássaro pousou no galho numerado 1.236. Esse galho fica entre dois outros galhos numerados. Quais são esses números?",
    alternativas: ["1.233 e 1234", "1.235 e 1237", "1.236 e 1239", "1.238 e 1236"],
    resposta: 2,
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

  if (erros >= 10) {
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
