let menu = document.getElementById("menu_screen");
let game = document.getElementById("game_screen");

function myPlay() {
  game.style.display = "block";
  menu.style.display = "none";
  var username = document.getElementById("getUser").value;
  document.getElementById("username").innerHTML = username;
}

let questions = [
  {
    qnum: 1,
    question: "What is the correct way to declare a variable in JavaScript?",
    answer: "A) var myVariable;",
    choices: [
      "A) var myVariable;",
      "B) variable myVariable;",
      "C) myVariable := 0;",
      "D) declare myVariable;",
    ],
  },
  {
    qnum: 2,
    question:
      "Which of the following is a valid way to create a function in JavaScript?",
    answer: "B) function myFunc() {}",
    choices: [
      "A) func myFunc() {}",
      "B) function myFunc() {}",
      "C) create myFunc() {}",
      "D) method myFunc() {}",
    ],
  },
  {
    qnum: 3,
    question: "What will the following code output? `console.log(5 == '5');`",
    answer: "C) true",
    choices: ["A) false", "B) undefined", "C) true", "D) Error"],
  },
  {
    qnum: 4,
    question:
      "Which of these data types is NOT a primitive type in JavaScript?",
    answer: "B) Object",
    choices: ["A) String", "B) Object", "C) Number", "D) Boolean"],
  },
  {
    qnum: 5,
    question: "How do you write an array in JavaScript?  ",
    answer: "D) var colors = ['red', 'green', 'blue'];",
    choices: [
      "A) var colors = [red, green, blue];",
      "B) var colors = 'red', 'green', 'blue';",
      "C) var colors = (red, green, blue);",
      "D) var colors = ['red', 'green', 'blue'];",
    ],
  },
  {
    qnum: 6,
    question: "Which operator is used to assign a value to a variable?",
    answer: "C) =",
    choices: ["A) ==", "B) ===", "C) =", "D) :="],
  },
  {
    qnum: 7,
    question: "What does the console.log() function do in JavaScript?",
    answer: "B) Shows a message in the console",
    choices: [
      "A) Displays a message on the webpage",
      "B) Shows a message in the console",
      "C) Creates a new variable",
      "D) Stops the program",
    ],
  },
  {
    qnum: 8,
    question: "What will the following code output? `console.log(2 + '2')`",
    answer: "C) 22",
    choices: ["A) 4", "B) undefined", "C) 22", "D) Error"],
  },
  {
    qnum: 9,
    question: "How do you start a conditional statement in JavaScript?",
    answer: "A) if (condition)",
    choices: [
      "A) if (condition)",
      "B) check if (condition)",
      "C) condition if",
      "D) if condition",
    ],
  },
  {
    qnum: 10,
    question: "What is the correct way to create a comment in JavaScript?",
    answer: "A) // This is a comment",
    choices: [
      "A) // This is a comment",
      "B) /* This is a comment */",
      "C) # This is a comment",
      "D) -- This is a comment",
    ],
  },
];

let qcount = 0;
showQuestion(qcount);

const nextBtn = document.getElementById('nextQuestion');
nextBtn.onclick = () => {
  if(qcount < questions.length - 1){
    qcount++;
    showQuestion(qcount);
  } else {
    console.log('Question Completed');

  }
}

const optionList = document.querySelector('#choices_box');

function showQuestion(index) {
  const numQuestion = document.querySelector('#qnum').innerHTML = index+1;
  const questionText = document.querySelector('#qtext');
  
  questionText.textContent = `${questions[index].qnum}. ${questions[index].question}`;
  
  let optionTag = `
              <p class="option">${questions[index].choices[0]}</p>
              <p class="option">${questions[index].choices[1]}</p>
              <p class="option">${questions[index].choices[2]}</p>
              <p class="option">${questions[index].choices[3]}</p>
              `;

  let choicesText = document.querySelector('#choices_box')
  choicesText.innerHTML = optionTag;
  
  const option = document.querySelectorAll('.option');
  for(let i=0; i < option.length; i++){
    option[i].setAttribute('onclick', 'optionSelected(this)');
  }
}

function optionSelected(answer){
  let userAnswer = answer.textContent;
  let correctAnswer = questions[qcount].answer;
  let allOptions = choices_box.children.length;

  if(userAnswer == correctAnswer){
    answer.classList.add('correct');
  } else {
    answer.classList.add('incorrect');
    for(let i = 0; i < allOptions; i++){
      if(optionList.children[i].textContent == correctAnswer){
        optionList.children[i].setAttribute('class', 'option correct');
      }
    }
  }

  for(let i = 0; i < allOptions; i++){
    optionList.children[i].classList.add('disabled');
  }

}