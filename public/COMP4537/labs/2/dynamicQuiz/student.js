var questions = {
    "question1": {
        "question": "1) What would be the type of this variable",
        "code": ["var", " x=1234"],
        "choice": ["String", "Integer", "Boolean", "null"],
        "correctAnswer": 2
    },
    "question2": {
        "question": "2) What would be the type of variable z",
        "code": ["var", " x=1234", "var", " y=\'123'", "var", " z= x + y"],
        "choice": ["String", "Integer", "Boolean", "null"],
        "correctAnswer": 2
    },
    "question3": {
        "question": "3) What is the output of the following code",
        "code": ["var", " x=1000", "var", " y=\'999'", "var", " z = x - y", "console.log(z)"],
        "choice": ["NaN", "1000", "999", "1"],
        "correctAnswer": 4
    },
    "question4": {
        "question": "4) What is the output of the following code",
        "code": ["const", " a = 50", " a = 1000", "console.log(a)"],
        "choice": ["TypeError", "1000", "50", "NaN"],
        "correctAnswer": 1
    },
    "question5": {
        "question": "5) What is the output of the following code",
        "code": ["var", "x = 1", "if(x==1){", "var", " x = 3", "x +=3", "}", "console.log(x)"],
        "choice": ["1", "3", "6", "x"],
        "correctAnswer": 3
    }
}
window.addEventListener('load', function() {
    let dom = document.getElementById("main");
    let heading = document.createElement("H1")
    heading.innerHTML = "Quiz Questions"
    dom.appendChild(heading)
    let num = promptNumberOfQuestion()
    loadQuestions(num)

});

function loadQuestions(num) {
    // fetch('quizQuestion.json')
    //     .then(data => {
    //         console.log(data)
    //     })
    let dom = document.getElementById("main");
    for (let i = 1; i <= num; i++) {
        let qNum = "question" + i;

        let questionTxt = document.createElement("P");
        questionTxt.innerHTML = questions[qNum].question

        dom.appendChild(questionTxt)
        processCode(questions[qNum].code)

        for (let k = 0; k < questions[qNum].choice.length; k++) {
            let choice = document.createElement("input")
            choice.setAttribute('type', 'radio');
            choice.id = qNum + "_" + "option" + (k + 1)
            choice.name = qNum

            let label = document.createElement("LABEL")
            label.innerHTML = questions[qNum].choice[k]
            label.htmlFor = qNum + "_" + "option" + (k + 1)
            label.value = questions[qNum].choice[k]

            let br = document.createElement("BR")

            dom.appendChild(choice)
            dom.appendChild(label)
            dom.appendChild(br)
        }
        // console.log(questions[qNum].correctAnswer)
    }
}

function processCode(codeLst) {
    let dom = document.getElementById("main");
    let br = document.createElement("BR")
    for (let i = 0; i < codeLst.length; i++) {
        let codeTag = document.createElement("CODE")
        if (codeLst[i] == "var") {
            let spanTag = document.createElement("SPAN")
            spanTag.className = "reserve_var" + " "
            spanTag.innerHTML = codeLst[i]
            codeTag.appendChild(spanTag)
            dom.appendChild(codeTag)
        } else if (codeLst[i] == "const") {
            let spanTag = document.createElement("SPAN")
            spanTag.className = "reserve_const"
            spanTag.innerHTML = codeLst[i] + " "
            codeTag.appendChild(spanTag)
            dom.appendChild(codeTag)
        } else {
            codeTag.innerHTML = codeLst[i]
            let br = document.createElement("BR")
            dom.appendChild(br)
            dom.appendChild(codeTag)
            dom.appendChild(br)
        }
    }
    dom.appendChild(br)
}

function promptNumberOfQuestion() {
    let numberOfQuestions = window.prompt("Please enter the number of questiosn you would like to see.", 5);
    while (numberOfQuestions == NaN || numberOfQuestions <= 0 || numberOfQuestions > 5) {
        numberOfQuestions = prompt("Please enter the number of questiosn you would like to see.", "5");
    }
    return numberOfQuestions;
}