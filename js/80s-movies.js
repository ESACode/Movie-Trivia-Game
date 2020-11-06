//Hold trivia game questions, answers, and stock photos for 80s movies.
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

//Use a for loop to display the questions on the page.
let html1 = '';

for(let i = 0; i < eightiesQuestions.length; i++) {

    let display1 = eightiesQuestions[i];

    html1 += `
            <div class="questions">
                <ul class="question-images-container">
                    <li><img src="${display1.photoA}" alt="${display1.altA}"></li>
                    <li><img src="${display1.photoB}" alt="${display1.altB}"></li>
                </ul>
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

//Check if users answers are correct after they click submit and display correct answers on the page.
function checkAnswersFunction() {
    //use these variables to store questions users got correct or incorrect and keep a count of their correct score. 
    const correct = [];
    const incorrect = [];
    let correctAnswers = 0;

    //use these variables as references to each radio button grouping.  
    let userChecked1 = document.getElementsByName("group1");
    let userChecked2 = document.getElementsByName("group2");
    let userChecked3 = document.getElementsByName("group3");
    let userChecked4 = document.getElementsByName("group4");
    let userChecked5 = document.getElementsByName("group5");
    let userChecked6 = document.getElementsByName("group6");

    //use these variables to check if user selected an answer to every question.  
    var verify1;
    var verify2;
    var verify3;
    var verify4;
    var verify5;
    var verify6;

    //use a for loop for each of radio buttons to check users answers
    for (let i = 0; i <userChecked1.length; i++) {
        let questions = eightiesQuestions[0].questionDisplay;
        let answers = eightiesQuestions[0].answer;
        if (userChecked1[i].checked) {
            verify1 = userChecked1[i].value;
            if(userChecked1[i].value === answers) {
                correctAnswers++;
                correct.push(questions);
            } else {
                incorrect.push(questions);
            }
        }
    }

    for (let i = 0; i <userChecked2.length; i++) {
        let questions = eightiesQuestions[1].questionDisplay;
        let answers = eightiesQuestions[1].answer;
        if (userChecked2[i].checked) {
            verify2 = userChecked2[i].value;
            if(userChecked2[i].value === answers) {
                correctAnswers++;
                correct.push(questions);
            } else {
                incorrect.push(questions);
            }
        }
    }

    for (let i = 0; i <userChecked3.length; i++) {
        let questions = eightiesQuestions[2].questionDisplay;
        let answers = eightiesQuestions[2].answer;
        if (userChecked3[i].checked) {
            verify3 = userChecked3[i].value;
            if(userChecked3[i].value === answers) {
                correctAnswers++;
                correct.push(questions);
            } else {
                incorrect.push(questions);
            }
        }
    }

    for (let i = 0; i <userChecked4.length; i++) {
        let questions = eightiesQuestions[3].questionDisplay;
        let answers = eightiesQuestions[3].answer;
        if (userChecked4[i].checked) {
            verify4 = userChecked4[i].value;
            if(userChecked4[i].value === answers) {
                correctAnswers++;
                correct.push(questions);
            } else {
                incorrect.push(questions);
            }
        }
    }

    for (let i = 0; i <userChecked5.length; i++) {
        let questions = eightiesQuestions[4].questionDisplay;
        let answers = eightiesQuestions[4].answer;
        if (userChecked5[i].checked) {
            verify5 = userChecked1[i].value;
            if(userChecked5[i].value === answers) {
                correctAnswers++;
                correct.push(questions);
            } else {
                incorrect.push(questions);
            }
        }
    }

    for (let i = 0; i <userChecked6.length; i++) {
        let questions = eightiesQuestions[5].questionDisplay;
        let answers = eightiesQuestions[5].answer;
        if (userChecked6[i].checked) {
            verify6 = userChecked1[i].value;
            if(userChecked6[i].value === answers) {
                correctAnswers++;
                correct.push(questions);
            } else {
                incorrect.push(questions);
            }
        }
    }

    //Make sure user has selected an answer to all questions, prevent page from submitting if they didn't pick an answer  
    if(!verify1 || !verify2 || !verify3 || !verify4 || !verify5 || !verify6) {
        alert("Please select an answer for every question.")
        return false
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

    //Display the correct answers to the user on the page.  
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