const listaDeQuestoes = [
  // 5 Questoes sobre numeros egipcios
  {
    enunciado:
      "No sistema de numeração egípcio, qual símbolo representa o número 1?",
    alternativas: ["Uma espiral", "Um bastão", "Um círculo", "Uma cobra"],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Qual é a representação do número 10 no sistema de numeração egípcio?",
    alternativas: ["Um calcanhar", "Uma espiral", "Uma cobra", "Um triângulo"],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Qual é a representação do número 100 no sistema de numeração egípcio?",
    alternativas: [
      "Um bastão",
      "Uma espiral",
      "Uma cobra",
      "Uma corda enrolada",
    ],
    resposta: 4,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Qual é a representação do número 1000 no sistema de numeração egípcio?",

    alternativas: [
      "Uma flor de lótus",
      "Uma espiral",
      "Uma cobra",
      "Uma corda enrolada",
    ],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },
  // 5 Questoes sobre numeros romanos

  {
    enunciado: "Qual é o número que representa o algarismo romano L?",
    alternativas: ["5", "10", "15", "50"],
    resposta: 4,
    nivel: 1,
    imagem: null,
  },
  {
    enunciado:
      "Enquanto assistia o filme da Marvel (Avengers: Ultimato), João percebeu que nos pós créditos havia um número romano que simbolizava o ano de lançamento do filme. Qual o numero visto, sabendo que o filme foi lançado em 2019?",
    alternativas: ["MMXV", "MMXVIII", "MMXIX", "MMXX"],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Enquanto Maria estudava para a prova de história, ela se deparou com o numero romano MXMIV. Qual o valor desse número?",
    alternativas: ["1994", "1999", "2004", "2009"],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Em uma prova de matemática, João foi questionado sobre o valor do algarismo romano D. Qual o valor do algarismo D?",
    alternativas: ["500", "50", "5", "1000"],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },

  // 3 questoes sobre o sistema decimal

  {
    enunciado: "Qual o valor do algarismo 5 no numero 5678?",
    alternativas: ["500", "50", "5", "5000"],
    resposta: 4,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Em uma prova de matemática, Maria foi questionada sobre o valor do algarismo 8 no numero 3286. Qual o valor do algarismo 8?",
    alternativas: ["800", "80", "8", "8000"],
    resposta: 1,
    nivel: 1,
    imagem: null,
  },

  // 2 questoes soobre o sistema indo-arabico

  {
    enunciado: "No numero 3286, qual o valor do algarismo 8?",
    alternativas: ["800", "80", "8", "8000"],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Em uma prova de matemática, Maria foi questionada sobre o valor do algarismo 5 no numero 5678. Qual o valor do algarismo 5?",
    alternativas: ["500", "50", "5", "5000"],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  // 3 questoes sobre o sistema binario

  {
    enunciado:
      "Enquanto a aluna Malu realizava um exercicio de programação de computadores, ela se deparou com o numero binario 1010. Qual o valor desse numero?",
    alternativas: ["5", "10", "15", "20"],
    resposta: 2,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Para resolver um problema de lógica, João precisava converter o numero 48 para binario. Qual o valor encontrado por João?",
    alternativas: ["1010", "1100", "110000", "1000"],
    resposta: 3,
    nivel: 1,
    imagem: null,
  },

  {
    enunciado:
      "Em determinado problema de matemática elaborado pelo professor, a aluna Maria precisava converter o numero 1001 para decimal e depois soma-lo pelo valor obtido na conversão do numero 1010 para decimal. Qual o valor da soma?",
    alternativas: ["18", "19", "20", "21"],
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
