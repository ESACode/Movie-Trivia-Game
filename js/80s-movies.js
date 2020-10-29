// 1. Hold trivia game questions, answers, and stock photos for 80s movies.
const eightiesQuestions = [
    {
        question: "1. Which movie earned more at the box office in 1980?\n(a) Airplane!\n(b) The Blues Brothers",
        answer: "b",
        value: "1. The Blues Brothers earned $115,229,890 and Airplane! earned $83,453,539",
        photo: "img/The-Blues-Brothers.jpg",
        alt: "The Blues Brothers"
    },
    {
        question: "2. Which movie earned more at the box office in 1982?\n(a) First Blood\n(b) Rocky III",
        answer: "a",
        value: "2. First Blood earned $125,212,904 and Rocky III earned $124,146,897",
        photo: "img/First-Blood.jpg",
        alt: "First Blood"
    },
    {
        question: "3. Which movie earned more at the box office in 1983?\n(a) Scarface\n(b) Wargames",
        answer: "b",
        value: "3. Wargames earned $79,567,667 and Scarface earned $65,144,798",
        photo: "img/WarGames.jpg",
        alt: "Wargames"
    },
    {
        question: "4. Which movie earned more at the box office in 1988?\n(a) Who Framed Roger Rabbit\n(b) Die Hard",
        answer: "a",
        value: "4. Who Framed Roger Rabbit earned $329,803,958	and Die Hard earned $140,767,956",
        photo: "img/Who-Framed-Roger-Rabbit.jpg",
        alt: "Who Framed Roger Rabbit"
    },
];

// 2. Use a for loop to cycle through the questions.
const correct = [];
const incorrect = [];
let correctAnswers = 0;

for(let i = 0; i < eightiesQuestions.length; i++) {
    let questions = eightiesQuestions[i].question;
    let answers = eightiesQuestions[i].answer;
    let response = prompt(questions).toLowerCase();

    if (response === answers) {
        correctAnswers++;
        correct.push(questions);
    } else {
        incorrect.push(questions);
    }
}

function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
      items += `<li>${arr[i]}</li>`;
    }
    return items;
  }

// 3. Display number of questions correct to the user and show which questions were right and wrong
let html1 = `
<div class="score">
    <h1>You got a total of ${correctAnswers} question(s) correct!</h1>
    <div class="correct">
        <h2>You got these questions right:</h2>
        <div class="correct-list">
            <ul>${ createListItems(correct) }</ul>
        </div>
    </div>
    <div class="incorrect">
        <h2>You got these questions wrong:</h2>
        <div class="incorrect-list">
            <ul>${ createListItems(incorrect) }</ul>
        </div>
    </div>
</div>
`;

document.querySelector('summary').innerHTML = html1;

// 4. Display the correct answers to the user.  
let html2 = '';

for(let i = 0; i < eightiesQuestions.length; i++) {
    let display = eightiesQuestions[i];
    html2 += `
            <div class="answers">
                <img src="${display.photo}" alt="${display.alt}">
                <h3 class="value">${display.value}</h3>
            </div>
    `;
}

document.querySelector('main').innerHTML = html2;