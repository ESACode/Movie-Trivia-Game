//Hold trivia game questions, answers, and stock photos for 00s movies in this array of objects
const aughtQuestions = [
    {
        question: "1. Which movie earned more at the box office in 2000?",
        questionDisplay: "1. Which movie earned more at the box office in 2000? (A) Gladiator (B) Cast Away",
        answer: "A",
        value: "1. Gladiator earned $460,583,960 in 2000, and Cast Away earned $429,632,142",
        photoA: "img/Gladiator.jpg",
        photoB: "img/Cast-Away.jpg",
        photoCorrect: "img/Gladiator.jpg",
        altA: "A. Gladiator",
        altB: "B. Cast Away",
        altCorrect: "Gladiator",
        radioIdName: "group1"
    },
    {
        question: "2. Which movie earned more at the box office in 2001?",
        questionDisplay: "2. Which movie earned more at the box office in 2001? (A) The Lord of the Rings: The Fellowship of the Ring (B) Harry Potter and the Sorcerer's Stone",
        answer: "B",
        value: "2. Harry Potter and the Sorcerer's Stone earned $974,755,371 in 2001, and The Lord of the Rings: The Fellowship of the Ring earned $883,726,270",
        photoA: "img/LOTR-Fellowship.jpg",
        photoB: "img/HP-Stone.jpg",
        photoCorrect: "img/HP-Stone.jpg",
        altA: "A. The Lord of the Rings: The Fellowship of the Ring",
        altB: "B. Harry Potter and the Sorcerer's Stone",
        altCorrect: "Harry Potter and the Sorcerer's Stone",
        radioIdName: "group2"
    },
    {
        question: "3. Which movie earned more at the box office in 2002?",
        questionDisplay: "3. Which movie earned more at the box office in 2002? (A) The Lord of the Rings: The Two Towers (B) Harry Potter and the Chamber of Secrets",
        answer: "A",
        value: "3. The Lord of the Rings: The Two Towers earned $936,689,735 in 2002, and Harry Potter and the Chamber of Secrets earned $878,979,634",
        photoA: "img/LOTR-Two-Towers.jpg",
        photoB: "img/HP-Chamber.jpg",
        photoCorrect: "img/LOTR-Two-Towers.jpg",
        altA: "A. The Lord of the Rings: The Two Towers",
        altB: "B. Harry Potter and the Chamber of Secrets",
        altCorrect: "The Lord of the Rings: The Two Towers",
        radioIdName: "group3"
    },
    {
        question: "4. Which movie earned more at the box office in 2005?",
        questionDisplay: "4. Which movie earned more at the box office in 2005? (A) Star Wars: Episode III - Revenge of the Sith (B) Batman Begins",
        answer: "A",
        value: "4. Star Wars: Episode III - Revenge of the Sith earned $868,352,530 in 2005, and Batman Begins earned $371,853,783",
        photoA: "img/Star-Wars-ROTS.jpg",
        photoB: "img/Batman-Begins.jpg",
        photoCorrect: "img/Star-Wars-ROTS.jpg",
        altA: "A. Star Wars: Episode III - Revenge of the Sith",
        altB: "B. Batman Begins",
        altCorrect: "Star Wars: Episode III - Revenge of the Sith",
        radioIdName: "group4"
    },
    {
        question: "5. Which movie earned more at the box office in 2006?",
        questionDisplay: "5. Which movie earned more at the box office in 2006? (A) The Departed (B) Casino Royale",
        answer: "B",
        value: "5. Casino Royale earned $606,099,584 in 2006, and The Departed earned $291,465,034",
        photoA: "img/The-Departed.jpg",
        photoB: "img/Casino-Royale.jpg",
        photoCorrect: "img/Casino-Royale.jpg",
        altA: "A. The Departed",
        altB: "B. Casino Royale",
        altCorrect: "Casino Royale",
        radioIdName: "group5"
    },
    {
        question: "6. Which movie earned more at the box office in 2008?",
        questionDisplay: "6. Which movie earned more at the box office in 2008? (A) Iron Man (B) The Dark Knight",
        answer: "B",
        value: "6. The Dark Knight earned $1,003,045,358 in 2008, and Iron Man earned $585,366,247",
        photoA: "img/Iron-Man.jpg",
        photoB: "img/The-Dark-Knight.jpg",
        photoCorrect: "img/The-Dark-Knight.jpg",
        altA: "A. Iron Man",
        altB: "B. The Dark Knight",
        altCorrect: "The Dark Knight",
        radioIdName: "group6"
    }
];

//Use a for loop to dynamically display the questions on the html page
let html1 = '';

for(let i = 0; i < aughtQuestions.length; i++) {

    let display1 = aughtQuestions[i];

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
            let questions = aughtQuestions[i].questionDisplay;
            let answers = aughtQuestions[i].answer;
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
        if(!verifyArray[i]) {
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

    for(let i = 0; i < aughtQuestions.length; i++) {
        let display2 = aughtQuestions[i];

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