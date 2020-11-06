// 1. Hold trivia game questions, answers, and stock photos for 90s movies.
const ninetiesQuestions = [
    {
        question: "1. Which movie earned more at the box office in 1990?",
        questionDisplay: "1. Which movie earned more at the box office in 1990? (A) Home Alone (B) Pretty Woman",
        answer: "A",
        value: "1. Home Alone earned $476,684,675 in 1990, and Pretty Woman earned $463,406,268",
        photoA: "img/Home-Alone.jpg",
        photoB: "img/Pretty-Woman.jpg",
        photoCorrect: "img/Home-Alone.jpg",
        altA: "A. Home Alone",
        altB: "B. Pretty Woman",
        altCorrect: "Home Alone",
        radioIdName: "group1"
    },
    {
        question: "2. Which movie earned more at the box office in 1991?",
        questionDisplay: "2. Which movie earned more at the box office in 1991? (A) Terminator 2: Judgment Day (B) Hook",
        answer: "A",
        value: "2.Terminator 2: Judgment Day earned $516,950,043 in 1991, and Hook earned $300,854,823",
        photoA: "img/Terminator-2.jpg",
        photoB: "img/Hook.jpg",
        photoCorrect: "img/Terminator-2.jpg",
        altA: "A. Terminator 2: Judgment Day",
        altB: "B. Hook",
        altCorrect: "Terminator 2: Judgment Day",
        radioIdName: "group2"
    },
    {
        question: "3. Which movie earned more at the box office in 1992?",
        questionDisplay: "3. Which movie earned more at the box office in 1992? (A) Wayne's World (B) A Few Good Men",
        answer: "B",
        value: "3. A Few Good Men earned $243,240,178 in 1992, and Wayne's World earned $183,097,323",
        photoA: "img/Waynes-World.jpeg",
        photoB: "img/A-Few-Good-Men.jpg",
        photoCorrect: "img/A-Few-Good-Men.jpg",
        altA: "A. Wayne's World",
        altB: "B. A Few Good Men",
        altCorrect: "A Few Good Men",
        radioIdName: "group3"
    },
    {
        question: "4. Which movie earned more at the box office in 1994?",
        questionDisplay: "4. Which movie earned more at the box office in 1994? (A) The Lion King (B) Forrest Gump",
        answer: "A",
        value: "4. The Lion King earned $763,455,561 in 1994, and Forrest Gump earned $677,387,716",
        photoA: "img/The-Lion-King.jpg",
        photoB: "img/Forrest-Gump.jpg",
        photoCorrect: "img/The-Lion-King.jpg",
        altA: "A. The Lion King",
        altB: "B. Forrest Gump",
        altCorrect: "The Lion King",
        radioIdName: "group4"
    },
    {
        question: "5. Which movie earned more at the box office in 1995?",
        questionDisplay: "5. Which movie earned more at the box office in 1995? (A) Jumani (B) Toy Story",
        answer: "B",
        value: "5. Toy Story earned $363,007,140 in 1995, and Jumanji $262,797,249",
        photoA: "img/Jumanji.jpg",
        photoB: "img/Toy-Story.jpg",
        photoCorrect: "img/Toy-Story.jpg",
        altA: "A. Jumanji",
        altB: "B. Toy Story",
        altCorrect: "Toy Story",
        radioIdName: "group5"
    },
    {
        question: "6. Which movie earned more at the box office in 1999?",
        questionDisplay: "6. Which movie earned more at the box office in 1999? (A) The Matrix (B) The Mummy",
        answer: "A",
        value: "6. The Matrix earned $463,517,383 in 1999, and The Mummy earned $415,933,406",
        photoA: "img/The-Matrix.jpg",
        photoB: "img/The-Mummy.jpg",
        photoCorrect: "img/The-Matrix.jpg",
        altA: "A. The Matrix",
        altB: "B. The Mummy",
        altCorrect: "The Matrix",
        radioIdName: "group6"
    },  
];

//Use a for loop to display the questions on the page.
let html1 = '';

for(let i = 0; i < ninetiesQuestions.length; i++) {

    let display1 = ninetiesQuestions[i];

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
        let questions = ninetiesQuestions[0].questionDisplay;
        let answers = ninetiesQuestions[0].answer;
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
        let questions = ninetiesQuestions[1].questionDisplay;
        let answers = ninetiesQuestions[1].answer;
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
        let questions = ninetiesQuestions[2].questionDisplay;
        let answers = ninetiesQuestions[2].answer;
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
        let questions = ninetiesQuestions[3].questionDisplay;
        let answers = ninetiesQuestions[3].answer;
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
        let questions = ninetiesQuestions[4].questionDisplay;
        let answers = ninetiesQuestions[4].answer;
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
        let questions = ninetiesQuestions[5].questionDisplay;
        let answers = ninetiesQuestions[5].answer;
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

    for(let i = 0; i < ninetiesQuestions.length; i++) {
        let display2 = ninetiesQuestions[i];

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