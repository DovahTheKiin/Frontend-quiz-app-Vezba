const lightDarkModeToggle = document.querySelector(".light-dark-mode-toggle")
const lightDarkModeButton = document.querySelector(".toggle-switch")
const toggleIcon = document.querySelectorAll(".toggle-icon");
const answer = document.querySelectorAll(".answer")
const answers = document.querySelector(".answers")

const body = document.body;
const headerText = document.querySelector(".header > h1")
const questionText = document.querySelector(".question-text")
const logoText = document.querySelectorAll(".category-name > h2")
const answerText = document.querySelectorAll(".answer-text")
const timer = document.querySelector(".timer")
const headerP = document.querySelectorAll(".header-p")
const outOf = document.querySelector(".out-of")
const scoreContainer = document.querySelector(".score-container")
const scoreNumber = document.querySelector(".score-number")
const button = document.querySelectorAll(".submit-btn")
const clickButton = document.querySelector(".click-btn")

fetch("data.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jobs) {

    const data = jobs;
    console.log(data)

lightDarkModeButton.addEventListener('click', () => {
    lightDarkModeButton.classList.toggle("dark-mode-on");
    body.classList.toggle("dark-mode-body")
    for(let i=0;i<toggleIcon.length;i++) {
        toggleIcon[i].classList.toggle("hidden");
    }
    headerText.classList.toggle("dark-mode-text");
    questionText.classList.toggle("dark-mode-text");
    for(let i=0;i<logoText.length;i++) {
        logoText[i].classList.toggle("dark-mode-text");
    }
    for(let i=0;i<answer.length;i++) {
        answer[i].classList.toggle("dark-mode-bg");
    }
    for(let i=0;i<answerText.length;i++) {
        answerText[i].classList.toggle("dark-mode-text");
    }
    timer.classList.toggle("dark-mode-bg");
    for(let i=0;i<headerP.length;i++) {
        headerP[i].classList.toggle("dark-mode-bluish");
    }
    outOf.classList.toggle("dark-mode-bluish");
    scoreContainer.classList.toggle("dark-mode-bg");
    scoreNumber.classList.toggle("dark-mode-text");
    for(let i=0;i<button.length;i++) {
        button[i].classList.toggle("dark-mode-hover");
    }
})
let click;
let clicklul = 0;
let randomArray = [];
let finalAnswer;

// function clickHandler(e){
//     const clickDiv = e.target.closest(".click-div");
//     const currentActive = e.currentTarget.querySelector(".active");
//     if(currentActive) currentActive.classList.remove("active");
//     clickDiv.classList.add("active");
//   }

function clickHandler(e){
    const clickButton = document.querySelector(".click-btn")
    const answerText = document.querySelectorAll(".answer-text")

    clicklul = 1;
    // randomArray = [];

    // for (const btn of answer) {
    //   if (btn === ev.target && !btn.classList.contains("active")) {
    //     btn.classList.add("active");
    //   } else {
    //     btn.classList.remove("active");
    //   }
    // }
    const clickDiv = e.target.closest(".answer");
    const currentActive = e.currentTarget.querySelector(".active");
    if(currentActive) currentActive.classList.remove("active");
    clickDiv.classList.add("active");

    for(let i=0;i<answer.length;i++) {
        if(answer[i].classList.contains("active")) {
                randomArray = [];
                randomArray.push(answerText[i].innerText);
                finalAnswer = randomArray[0];
        }
    }
    if(randomArray.length > 0) {
        if(click > 0) {
        clickButton.disabled = false;
        }
    } else {
        clickButton.disabled = true;
    }
}

answers.addEventListener("click", clickHandler);

let k = 0;
let j = 0;
const pickCategory = (ev) => {
    for (const btn of answer) {
        if (btn === ev.target && btn.classList.contains("html-category")) {
            click = 1;
            k = 0;
            btn.classList.remove("active");
            btn.classList.remove("html-category");
            chosenCategory();
            fillIcons()
            fillQuizz();
            j = j + 1;
        }
        if (btn === ev.target && btn.classList.contains("css-category")) {
            click = 1;
            k = 1;
            btn.classList.remove("active");
            btn.classList.remove("css-category");
            chosenCategory();
            fillIcons()
            fillQuizz();
            j = j + 1;
        }
        if (btn === ev.target && btn.classList.contains("js-category")) {
            click = 1;
            k = 2;
            btn.classList.remove("active");
            btn.classList.remove("js-category");
            chosenCategory();
            fillIcons()
            fillQuizz();
            j = j + 1;
        }
        if (btn === ev.target && btn.classList.contains("access-category")) {
            click = 1;
            k = 3;
            btn.classList.remove("active");
            btn.classList.remove("access-category");
            chosenCategory();
            fillIcons()
            fillQuizz();
            j = j + 1;
        }
        btn.classList.remove("html-category")
        btn.classList.remove("css-category")
        btn.classList.remove("js-category")
        btn.classList.remove("access-category")
    }
}
function chosenCategory() {
    const category = document.querySelector(".category-name")
    const header = document.querySelector(".header")
    const question = document.querySelector(".question")
    const answerImg = document.querySelectorAll(".answer-img")
    const asnwerLetter = document.querySelectorAll(".answer-letter")
    const submitAnswer = document.querySelector(".submit-answer")

    category.classList.remove("hidden");
    header.classList.add("hidden");
    question.classList.remove("hidden");
    for(let i=0;i<answerImg.length;i++) {
        answerImg[i].classList.add("hidden");
    }
    for(let i=0;i<asnwerLetter.length;i++) {
        asnwerLetter[i].classList.remove("hidden");
    }
    submitAnswer.classList.remove("hidden");
}
let buttonClick = 0;
let l;
let h = 0;
let g = 0;
let correctAnswer = 0;
document.addEventListener('click', (e) => {
    const score = document.querySelector(".score")
    const normalSpan = document.querySelector(".normal-span")
    const boldSpan = document.querySelector(".bold-span")
    const header = document.querySelector(".header")
    const question = document.querySelector(".question")
    const correct = document.querySelectorAll(".correct")
    const incorrect = document.querySelectorAll(".incorrect")
    const answer = document.querySelectorAll(".answer")
    const headerP = document.querySelector(".header-p")
    const scoreNumber = document.querySelector(".score-number")


    if(e.target.matches(".click-btn")) {
        clickButton.innerText = "Next Question";
        if(buttonClick === 0) {
            console.log(data.quizzes[k].questions[j-1].answer)
            console.log(finalAnswer)
            if(data.quizzes[k].questions[j-1].answer === finalAnswer) {
                for(let i=0;i<answer.length;i++) {
                    if(answerText[i].innerText === finalAnswer) {
                        correct[i].classList.remove("hidden");
                        answer[i].classList.add("correct-answer");
                        l = i;
                        incorrect[h].classList.add("hidden");
                        answer[h].classList.remove("incorrect-answer");
                    }
                }
                buttonClick = 1;
                correctAnswer++
                return;
            } else {
                for(let i=0;i<answer.length;i++) {
                    if(answerText[i].innerText === finalAnswer) {
                        incorrect[i].classList.remove("hidden");
                        answer[i].classList.add("incorrect-answer");
                        l = i;
                        h = i;
                    }
                    if(data.quizzes[k].questions[j-1].answer === answerText[i].innerText) {
                        correct[i].classList.remove("hidden");
                        g = i;
                    }
                }
                buttonClick = 1;
                return;
            }
        }
        if(buttonClick === 1) {
            if(j > 9) {
                score.classList.remove("hidden");
                answers.classList.add("hidden");
                header.classList.remove("hidden");
                question.classList.add("hidden");
                headerP.classList.add("hidden");

                normalSpan.innerText = "Quiz completed";
                boldSpan.innerText = "You Scored...";
                scoreNumber.innerText = correctAnswer;

                buttonClick = 0;

                j = 0;
            } else {
                correct[l].classList.add("hidden");
                answer[l].classList.remove("correct-answer");
                incorrect[h].classList.add("hidden");
                answer[h].classList.remove("incorrect-answer");
                correct[g].classList.add("hidden");
                clickButton.innerText = "Submit Answer";
                fillQuizz();
                j = j + 1;
                buttonClick = 0;
                clickButton.disabled = true;
            }
        }
    }
})
function fillIcons () {
    const logoImg = document.querySelectorAll(".logo-img")
    const logoText = document.querySelectorAll(".category-name > h2")


    for(let i=0;i<logoImg.length;i++) {
        logoImg[i].src = data.quizzes[k].icon;
        logoText[i].innerText = data.quizzes[k].title;
        if(logoText[0].innerText === "HTML") {
            logoImg[i].parentNode.style.backgroundColor = "#FFF1E9";
        }
        if(logoText[0].innerText === "CSS") {
            logoImg[i].parentNode.style.backgroundColor = "#E0FDEF";
        }
        if(logoText[0].innerText === "JavaScript") {
            logoImg[i].parentNode.style.backgroundColor = "#EBF0FF";
        }
        if(logoText[0].innerText === "Accessibility") {
            logoImg[i].parentNode.style.backgroundColor = "#F6E7FF";
        }
    }
}
function fillQuizz() {
    const answerText = document.querySelectorAll(".answer-text")
    const questionText = document.querySelector(".question-text")
    const questionNumber = document.querySelector(".question-number")
    const questionTotal = document.querySelector(".question-total")
    const timerLine = document.querySelector(".timer-line")

    questionNumber.innerText = j + 1;
    questionTotal.innerText = data.quizzes[k].questions.length;
    questionText.innerText = data.quizzes[k].questions[j].question;
    for (let i=0;i<data.quizzes[k].questions[j].options.length;i++) {
        answerText[i].innerText=data.quizzes[k].questions[j].options[i];
    }
    let timerWidth = Number(questionNumber.innerHTML)*(100/Number(questionTotal.innerText));
    timerLine.style.width = `${timerWidth}%`;
}

document.addEventListener('click', (e) => {
    if(e.target.matches(".play-again-btn")) {
        const score = document.querySelector(".score")
        const normalSpan = document.querySelector(".normal-span")
        const boldSpan = document.querySelector(".bold-span")
        const answer = document.querySelectorAll(".answer")
        const headerP = document.querySelector(".header-p")
        const category = document.querySelector(".category-name")
        const answers = document.querySelector(".answers")
        const answerImg = document.querySelectorAll(".answer-img")
        const asnwerLetter = document.querySelectorAll(".answer-letter")
        const answerText = document.querySelectorAll(".answer-text")
        const correct = document.querySelectorAll(".correct")
        const incorrect = document.querySelectorAll(".incorrect")

        score.classList.add("hidden");
        normalSpan.innerText = "Welcome to the";
        boldSpan.innerText = "Frontend Quiz!";
        headerP.classList.remove("hidden");
        category.classList.add("hidden");
        answers.classList.remove("hidden");
        for(let i=0;i<answerImg.length;i++) {
            answerImg[i].classList.remove("hidden");
        }
        for(let i=0;i<asnwerLetter.length;i++) {
            asnwerLetter[i].classList.add("hidden");
        }
        for(let i=0;i<answerText.length;i++) {
            answerText[i].innerText = data.quizzes[i].title;
        }
        answer[0].classList.add("html-category");
        answer[1].classList.add("css-category");
        answer[2].classList.add("js-category");
        answer[3].classList.add("access-category");
        
        incorrect[h].classList.add("hidden");
        answer[h].classList.remove("incorrect-answer");
        correct[g].classList.add("hidden");
        correct[l].classList.add("hidden");
        answer[l].classList.remove("correct-answer");
        k = 0;
        j = 0;
    }
})

answers.addEventListener("click", pickCategory);

})