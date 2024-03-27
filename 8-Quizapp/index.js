let quiz = [
  {
    question:
      " What is the primary purpose of version control in software development?",
    a: "Enhancing code performance",
    b: "Tracking changes in code",
    c: "Generating automated documentation",
    d: "Conducting user acceptance testing",
    answer: "b",
  },
  {
    question:
      "Which programming paradigm organizes code into objects, promoting concepts like inheritance and encapsulation?",
    a: "Procedural programming",
    b: "Functional programming",
    c: "Object-oriented programming",
    d: "Scripting programming",
    answer: "c",
  },
  {
    question:
      "How does Agile development differ from the traditional waterfall model?",
    a: "Agile allows for adaptive changes during development",
    b: "Waterfall emphasizes continuous feedback",
    c: "Agile delivers the entire product at once",
    d: "Waterfall promotes a customer-centric approach",
    answer: "a",
  },
  {
    question: "What does API stand for in software development?",
    a: "Advanced Programming Interface",
    b: "Application Programming Interface",
    c: "Automated Process Integration",
    d: "Advanced Protocol Integration",
    answer: "b",
  },
  {
    question:
      "Why is automated testing becoming increasingly popular in software development?",
    a: "It enhances code performance",
    b: "It provides efficient bug tracking",
    c: "It supports continuous integration practices",
    d: "It improves user acceptance testing",
    answer: "c",
  },
];

const next_btn = document.querySelector(".next-btn");
const checkedControl = document.querySelectorAll(".checkedControl");
const quiz_container = document.querySelector(".quiz-container");
const question = document.querySelector(".question");
const answer_a = document.getElementById("answer-a");
const answer_b = document.getElementById("answer-b");
const answer_c = document.getElementById("answer-c");
const answer_d = document.getElementById("answer-d");
const current_q = document.getElementById("current-q");
const total_q = document.getElementById("total-q");

let score = 0;
let checkedId;
let questionNumber = 0;
callQuestion();

//Question Function
function callQuestion() {
  checkDelete();
  questionTitle = quiz[questionNumber];
  current_q.innerHTML = questionNumber + 1;
  total_q.innerHTML = `/${quiz.length}`;
  question.innerHTML = questionTitle.question;
  answer_a.innerHTML = questionTitle.a;
  answer_b.innerHTML = questionTitle.b;
  answer_c.innerHTML = questionTitle.c;
  answer_d.innerHTML = questionTitle.d;
}
//Selected question
function getSelected() {
  let answer = undefined;
  checkedControl.forEach((item) => {
    if (item.checked) {
      let listItem = item.closest(".flex-box");
      answer = listItem.id;
    }
  });
  return answer;
}

//Next button
next_btn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);
  if (answer) {
    if (answer === quiz[questionNumber].answer) {
      score += 1;
      console.log(score);
    }
    questionNumber++;

    if (questionNumber < quiz.length) {
      callQuestion();
    } else {
      quiz_container.innerHTML = `<h2>
                Score: ${score}/${quiz.length}
              </h2>
              <button class="next-btn" onclick="location.reload();">Try Again</button>`;
    }
  }
});

//Button check function
function handleLiClick(liElement) {
  checkedId = liElement.id;
  console.log(checkedId);
  checkedControl.forEach((item) => {
    let listItem = item.closest(".flex-box");
    let button = listItem.querySelector(".radio-button");
    if (item.checked) {
      button.classList.add("checked");
      button.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
    } else {
      button.classList.remove("checked");
      button.innerHTML = `<i class="fa-regular fa-circle"></i>`;
    }
  });
}

//check delete function
function checkDelete() {
  checkedControl.forEach((item) => {
    item.checked = false;

    let listItem = item.closest(".flex-box");
    let button = listItem.querySelector(".radio-button");
    button.classList.remove("checked");
    button.innerHTML = `<i class="fa-regular fa-circle"></i>`;
  });
}
