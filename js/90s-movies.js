// 1. Hold trivia game questions, answers, and stock photos for 90s movies.
const ninetiesQuestions = [
    {
        question: "1. Which movie earned more at the box office in 1990?\n(a) Home Alone\n(b) Pretty Woman",
        answer: "a",
        value: "1. Home Alone earned $476,684,675 and Pretty Woman earned $463,406,268",
        photo: "img/Home-Alone.jpg",
        alt: "Home Alone"
    },
    {
        question: "2. Which movie earned more at the box office in 1994?\n(a) The Lion King\n(b) Forrest Gump",
        answer: "a",
        value: "2. The Lion King earned $763,455,561 and Forrest Gump earned $677,387,716",
        photo: "img/The-Lion-king.jpg",
        alt: "The Lion King"
    },
    {
        question: "3. Which movie earned more at the box office in 1995?\n(a) Jumani\n(b) Toy Story",
        answer: "b",
        value: "3. Toy Story earned $363,007,140 and Jumanji $262,797,249",
        photo: "img/Toy-Story.jpg",
        alt: "Toy Story"
    },
    {
        question: "4. Which movie earned more at the box office in 1999?\n(a) The Matrix\n(b) The Mummy",
        answer: "a",
        value: "4. The Matrix earned $463,517,383 and The Mummy earned $415,933,406",
        photo: "img/The-Matrix.jpg",
        alt: "The Matrix"
    },  
];

// 2. Use a for loop to cycle through the questions.
const correct = [];
const incorrect = [];
let correctAnswers = 0;

for(let i = 0; i < ninetiesQuestions.length; i++) {
    let questions = ninetiesQuestions[i].question;
    let answers = ninetiesQuestions[i].answer;
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

for(let i = 0; i < ninetiesQuestions.length; i++) {
    let display = ninetiesQuestions[i];
    html2 += `
            <div class="answers">
                <img src="${display.photo}" alt="${display.alt}">
                <h3 class="value">${display.value}</h3>
            </div>
    `;
}

document.querySelector('main').innerHTML = html2;