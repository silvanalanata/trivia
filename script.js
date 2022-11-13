search();

let array_history_q = [];
let array_history_a = [];
let array_history_opc1 = [];
let array_sport_q = [];
let array_sport_a = [];
let array_sport_opc1 = [];
let array_animal_q = [];
let array_animal_a = [];
let array_animal_opc1 = [];

async function call(categoria, dificultad) {
  let response = await fetch(
    `https://opentdb.com/api.php?amount=3&category=${categoria}&difficulty=${dificultad}`
  );
  let dataApi = await response.json();

  if (categoria == 23) {
    let history = document.querySelectorAll(".pregunta_history");
    let history_ac = document.querySelectorAll(".history-radioc");
    let history_ai2 = document.querySelectorAll(".history-radio2");
    let history_ai3 = document.querySelectorAll(".history-radio3");
    let history_ai4 = document.querySelectorAll(".history-radio4");
    for (let i = 0; i < dataApi.results.length; i++) {
      array_history_q.push(dataApi.results[i].question);
      array_history_opc1.push(dataApi.results[i].correct_answer);
      history[i].textContent = array_history_q[i];
      history_ac[i].textContent = array_history_opc1[i];

      let j = 0;
      let history_opc2 = dataApi.results[i].incorrect_answers[j];
      let history_opc3 = dataApi.results[i].incorrect_answers[j + 1];
      let history_opc4 = dataApi.results[i].incorrect_answers[j + 2];

      history_ai2[i].textContent = history_opc2;
      history_ai3[i].textContent = history_opc3;
      history_ai4[i].textContent = history_opc4;
    }
  }
  if (categoria == 21) {
    let sport = document.querySelectorAll(".pregunta_sport");
    let sport_ac = document.querySelectorAll(".sport-radioc");
    let sport_ai2 = document.querySelectorAll(".sport-radio2");
    let sport_ai3 = document.querySelectorAll(".sport-radio3");
    let sport_ai4 = document.querySelectorAll(".sport-radio4");
    for (let i = 0; i < dataApi.results.length; i++) {
      array_sport_q.push(dataApi.results[i].question);
      array_sport_opc1.push(dataApi.results[i].correct_answer);
      sport[i].textContent = array_sport_q[i];
      sport_ac[i].textContent = array_sport_opc1[i];

      let j = 0;
      let sport_opc2 = dataApi.results[i].incorrect_answers[j];
      let sport_opc3 = dataApi.results[i].incorrect_answers[j + 1];
      let sport_opc4 = dataApi.results[i].incorrect_answers[j + 2];

      sport_ai2[i].textContent = sport_opc2;
      sport_ai3[i].textContent = sport_opc3;
      sport_ai4[i].textContent = sport_opc4;
    }
  }
  if (categoria == 27) {
    let animal = document.querySelectorAll(".pregunta_animal");
    let animal_ac = document.querySelectorAll(".animal-radioc");
    let animal_ai2 = document.querySelectorAll(".animal-radio2");
    let animal_ai3 = document.querySelectorAll(".animal-radio3");
    let animal_ai4 = document.querySelectorAll(".animal-radio4");
    for (let i = 0; i < dataApi.results.length; i++) {
      array_animal_q.push(dataApi.results[i].question);
      array_animal_opc1.push(dataApi.results[i].correct_answer);
      animal[i].textContent = array_animal_q[i];
      animal_ac[i].textContent = array_animal_opc1[i];

      let j = 0;
      let animal_opc2 = dataApi.results[i].incorrect_answers[j];
      let animal_opc3 = dataApi.results[i].incorrect_answers[j + 1];
      let animal_opc4 = dataApi.results[i].incorrect_answers[j + 2];

      animal_ai2[i].textContent = animal_opc2;
      animal_ai3[i].textContent = animal_opc3;
      animal_ai4[i].textContent = animal_opc4;
    }
  }
}

//history categoria 23
//animales categoria 27
//sport categoria 21

function search() {
  let call1 = call(23, "easy");
  let call2 = call(21, "easy");
  let call3 = call(27, "easy");
}
