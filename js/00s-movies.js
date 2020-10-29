// 1. Hold trivia game questions, answers, and stock photos for 00s movies.
const aughtQuestions = [
    {
        question: "1. Which movie earned more at the box office in 2001?\n(a) The Lord of the Rings: The Fellowship of the Ring\n(b) Harry Potter and the Sorcerer's Stone",
        answer: "b",
        value: "1. Harry Potter and the Sorcerer's Stone earned $974,755,371 and The Lord of the Rings: The Fellowship of the Ring earned $883,726,270",
        photo: "img/HP-Stone.jpg",
        alt: "Harry Potter and the Sorcerer's Stone"
    },
    {
        question: "2. Which movie earned more at the box office in 2002?\n(a) The Lord of the Rings: The Two Towers\n(b) Harry Potter and the Chamber of Secrets",
        answer: "a",
        value: "2. The Lord of the Rings: The Two Towers earned $936,689,735 and Harry Potter and the Chamber of Secrets earned $878,979,634",
        photo: "img/LOTR-Two-Towers.jpg",
        alt: "The Lord of the Rings: The Two Towers"
    },
    {
        question: "3. Which movie earned more at the box office in 2006?\n(a) The Departed\n(b) Casino Royale",
        answer: "b",
        value: "3. Casino Royale earned $606,099,584 and The Departed earned $291,465,034",
        photo: "img/Casino-Royale.jpg",
        alt: "Casino Royale"
    },
    {
        question: "4. Which movie earned more at the box office in 2008?\n(a) Iron Man\n(b) The Dark Knight",
        answer: "b",
        value: "4. The Dark Knight earned $1,003,045,358 and Iron Man earned $585,366,247",
        photo: "img/The-Dark-Knight.jpg",
        alt: "The Dark Knight"
    },  
];

// 2. Use a for loop to cycle through the questions.
const correct = [];
const incorrect = [];
let correctAnswers = 0;

for(let i = 0; i < aughtQuestions.length; i++) {
    let questions = aughtQuestions[i].question;
    let answers = aughtQuestions[i].answer;
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

document.querySelector('main').innerHTML = html1;

// 4. Display the correct answers to the user.  
let html2 = '';

for(let i = 0; i < aughtQuestions.length; i++) {
    let display = aughtQuestions[i];
    html2 += `
            <div class="answers">
                <img src="${display.photo}" alt="${display.alt}">
                <h3 class="value">${display.value}</h3>
            </div>
    `;
}

document.querySelector('main').innerHTML = html2;