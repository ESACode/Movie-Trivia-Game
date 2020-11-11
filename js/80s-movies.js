//Hold trivia game questions, answers, and stock photos for 80s movies in this array of objects
const eightiesQuestions = [
    {
        question: "1. Which movie earned more at the box office in 1980?",
        questionDisplay: "1. Which movie earned more at the box office in 1980? (A) The Blues Brothers (B) Airplane!",
        answer: "A",
        value: "1. The Blues Brothers earned $115,229,890 in 1980, and Airplane! earned $83,453,539",
        photoA: "img/The-Blues-Brothers.jpg",
        photoB: "img/Airplane.jpeg",
        photoCorrect: "img/The-Blues-Brothers.jpg",
        altA: "A. The Blues Brothers",
        altB: "B. Airplane!",
        altCorrect: "The Blues Brothers",
        radioIdName: "group1"
    },
    {
        question: "2. Which movie earned more at the box office in 1981?",
        questionDisplay: "2. Which movie earned more at the box office in 1981? (A) Raiders of the Lost Ark (B) Stripes",
        answer: "A",
        value: "2. Raiders of the Lost Ark earned $353,988,025 in 1981, and Stripes earned $85,297,000",
        photoA: "img/Raiders-Of-The-Lost-Ark.jpg",
        photoB: "img/Stripes.jpg",
        photoCorrect: "img/Raiders-Of-The-Lost-Ark.jpg",
        altA: "A. Raiders of the Lost Ark",
        altB: "B. Stripes",
        altCorrect: "Stripes",
        radioIdName: "group2"
    },
    {
        question: "3. Which movie earned more at the box office in 1982?",
        questionDisplay: "3. Which movie earned more at the box office in 1982? (A) First Blood (B) Rocky III",
        answer: "A",
        value: "3. First Blood earned $125,212,904 in 1982, and Rocky III earned $124,146,897",
        photoA: "img/First-Blood.jpg",
        photoB: "img/RockyIII.jpg",
        photoCorrect: "img/First-Blood.jpg",
        altA: "A. First Blood",
        altB: "B. Rocky III",
        altCorrect: "First Blood",
        radioIdName: "group3"
    },
    {
        question: "4. Which movie earned more at the box office in 1983?",
        questionDisplay: "4. Which movie earned more at the box office in 1983? (A) Scarface (B) WarGames",
        answer: "B",
        value: "4. Wargames earned $79,567,667 in 1983, and Scarface earned $65,144,798",
        photoA: "img/Scarface.jpg",
        photoB: "img/WarGames.jpg",
        photoCorrect: "img/WarGames.jpg",
        altA: "A. Scarface",
        altB: "B. WarGames",
        altCorrect: "WarGames",
        radioIdName: "group4"
    },
    {
        question: "5. Which movie earned more at the box office in 1985?",
        questionDisplay: "5. Which movie earned more at the box office in 1985? (A) The Goonies (B) Back to the Future",
        answer: "B",
        value: "5. Back to the Future earned $381,109,762 in 1985, and Scarface earned $61,389,680",
        photoA: "img/The-Goonies.jpg",
        photoB: "img/Back-To-The-Future.jpg",
        photoCorrect: "img/Back-To-The-Future.jpg",
        altA: "A. The Goonies",
        altB: "B. Back to the Future",
        altCorrect: "Back to the Future",
        radioIdName: "group5"
    },
    {
        question: "6. Which movie earned more at the box office in 1988?",
        questionDisplay: "6. Which movie earned more at the box office in 1988? (A) Who Framed Roger Rabbit (B) Die Hard",
        answer: "A",
        value: "6. Who Framed Roger Rabbit earned $329,803,958 in 1988, and Die Hard earned $140,767,956",
        photoA: "img/Who-Framed-Roger-Rabbit.jpg",
        photoB: "img/Die-Hard.jpg",
        photoCorrect: "img/Who-Framed-Roger-Rabbit.jpg",
        altA: "A. Who Framed Roger Rabbit",
        altB: "B. Die Hard",
        altCorrect: "Who Framed Roger Rabbit",
        radioIdName: "group6"
    },
];

//Use a for loop to dynamically display the questions on the html page
let html1 = '';

for(let i = 0; i < eightiesQuestions.length; i++) {

    let display1 = eightiesQuestions[i];

    html1 += `
            <div class="questions">
                <div class="question-images-container">
                    <img src="${display1.photoA}" alt="${display1.altA}">
                    <img src="${display1.photoB}" alt="${display1.altB}">
                </div>
                <div class="question-container">
                    <h3 class="displayQuestion">${display1.question}</h3>
                    <div class="radio">
                        <input type="radio" name="${display1.radioIdName}" value="A"/><span>${display1.altA}</span><br><br>
                        <input type="radio" name="${display1.radioIdName}" value="B"/><span>${display1.altB}</span>
                    </div>
                </div>
            </div>
    `;
}

document.querySelector('main').innerHTML = html1;

//Function that checks if users answers are correct after user clicks submit and then displays correct answers on the page.
function checkAnswersFunction() {

    //use these variables to store questions users got correct or incorrect and keep a count of their correct score. 
    const correct = [];
    const incorrect = [];
    let correctAnswers = 0;

    //array to store reference to each radio grouping
    let userCheckedArray = [
        document.getElementsByName("group1"),
        document.getElementsByName("group2"),
        document.getElementsByName("group3"),
        document.getElementsByName("group4"),
        document.getElementsByName("group5"),
        document.getElementsByName("group6"),
    ];

    //use these variables to check if user selected an answer to every question.  
    let verify1;
    let verify2;
    let verify3;
    let verify4;
    let verify5;
    let verify6;

    let verifyArray = [verify1, verify2, verify3, verify4, verify5, verify6];

    //loop through the 2D array to check which button user checked for each radio grouping, and compare its value to correct answer
    for (let i = 0; i < userCheckedArray.length; i++) {
        for (let j = 0; j < userCheckedArray[i].length; j++) {
            let questions = eightiesQuestions[i].questionDisplay;
            let answers = eightiesQuestions[i].answer;
            if (userCheckedArray[i][j].checked) {
                verifyArray[i] = userCheckedArray[i][j].value;
                if(userCheckedArray[i][j].value === answers) {
                    correctAnswers++;
                    correct.push(questions);
                } else {
                    incorrect.push(questions);
                }
            }
        }
    }

    //checks to make sure user selected an answer for each question.  It's making sure each instance of verify has a value placed in it
    for (let i = 0; i < verifyArray.length; i++) {
        if(verifyArray[i] == null) {
            alert("Please select an answer for every question.")
            return false
        }
    }

    //Display number of questions correct to the user and show which questions were right and wrong
    function createListItems(arr) {
        let items = '';
        for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
        }
        return items;
    }

    let html2 = `
    <div class="score">
        <h1>You got a total of ${correctAnswers} question(s) correct.</h1>
        <h1>See the correct answers below!</h1>
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

    document.querySelector('summary').innerHTML = html2;

    //For loop to dynamically display the correct answers on the html page.  
    let html3 = '';

    for(let i = 0; i < eightiesQuestions.length; i++) {
        let display2 = eightiesQuestions[i];

        html3 += `
                <div class="answers">
                    <img src="${display2.photoCorrect}" alt="${display2.altCorrect}">
                    <h3 class="value">${display2.value}</h3>
                </div>
        `;
    }

    document.querySelector('main').innerHTML = html3;

    //remove the submit button from the answer page. 
    let html4 = '';
    document.querySelector('section').innerHTML = html4;

} //end of function checkAnswersFunction()