// 1. Hold trivia game questions, answers, and stock photos for 80s movies.
const eightiesQuestions = [
    {
        question: "Which movie earned more at the box office in 1980?\n(a) Airplane!\n(b) The Blues Brothers",
        answer: "b",
        value: "The Blues Brothers earned $115,229,890 and Airplane! earned $83,453,539",
        photo: "img/Die-Hard.jpg",
        alt: "The Blues Brothers"
    },
    {
        question: "Which movie earned more at the box office in 1982?\n(a) First Blood\n(b) Rocky III",
        answer: "a",
        value: "First Blood earned $125,212,904 and Rocky III earned $124,146,897",
        photo: "img/Die-Hard.jpg",
        alt: "First Blood"
    },
    {
        question: "Which movie earned more at the box office in 1983?\n(a) Scarface\n(b) Wargames",
        answer: "b",
        value: "Wargames earned $79,567,667 and Scarface earned $65,144,798",
        photo: "img/Die-Hard.jpg",
        alt: "Wargames"
    },
    {
        question: "Which movie earned more at the box office in 1988?\n(a) Who Framed Roger Rabbit\n(b) Die Hard",
        answer: "a",
        value: "Who Framed Roger Rabbit earned $329,803,958	and Die Hard earned $140,767,956",
        photo: "img/Die-Hard.jpg",
        alt: "Who Framed Roger Rabbit"
    },
];

// 2. Use a for loop to cycle through the questions.
let correctAnswers = 0;

for(let i = 0; i < eightiesQuestions.length; i++) {
    let questions = eightiesQuestions[i].question;
    let answers = eightiesQuestions[i].answer;
    let response = prompt(questions).toLowerCase();

    if (response === answers) {
        correctAnswers++;   
    }
}

let html1 = `<h1>You got ${correctAnswers} questions correct!</h1>`;

document.querySelector('main').innerHTML = html1;

//3. Display the correct answers to the user.  
let html2 = '';

for(let i = 0; i < eightiesQuestions.length; i++) {
    let display = eightiesQuestions[i];
    html2 += `
        <img src="${display.photo}" alt="${display.alt}">
        <h2>${display.value}</h2>
    `;
}

document.querySelector('main').insertAdjacentHTML('beforeend', html2);