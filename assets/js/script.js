var buttonStart = document.querySelector('#start-quiz');
var question = document.querySelector('#question');
var ansBtn1; 
var ansBtn2; 
var ansBtn3; 
var ansBtn4;

var btn1 = '';
var btn2 = '';
var btn3 = '';
var btn4 = ''; 
var initialsInput = '';

var timer = 75;
var finalScore = 0;
var index = 0;


var questions = [
    {'q': 'Commonly used data types Do Not Include?', 'a1': 'strings', 'a2': 'booleans', 'a3': 'alerts', 'a4': 'numbers'},
    {'q': 'The condition in an if / else statement is enclosed with ____.', 'a1': 'quotes', 'a2': 'curly brackets', 'a3': 'parenthesis', 'a4': 'square brackets'},
    {'q': 'Arrays in JavaScript can be used to store ____.', 'a1': 'numbers and strings', 'a2': 'other arrays', 'a3': 'booleans', 'a4': 'all of the above'},
    {'q': 'String values must be enclosed within ____ when being assigned to variables', 'a1': 'commas', 'a2': 'curly brackets', 'a3': 'quotes', 'a4': 'parenthesis'},
    {'q': 'A very useful tool used during development and debugging for printing content to the debugger is', 'a1': 'JavaScript', 'a2': 'terminal/bash', 'a3': 'for loops', 'a4': 'console.log'},
];  

 var startQuiz = function() {
    startTimer();

    // (Remove, append and restyle elements)
    // Remove: P element    
    var pEl = document.querySelector('#p');
    pEl.remove();
    
    //Remove: Start Button
    buttonStart.remove();
    
    // Restyle question
    question.textContent = questions[index].q;
    question.className = 'question-size question-style';

    // Create button container
    var divBtn = document.createElement('div');
        divBtn.className = 'div-Btn';
        divBtn.id = 'div-button';
    
    // Append button container
    document.getElementById('main').appendChild(divBtn);

    // Create btn1
    btn1 = document.createElement('button');  
        btn1.className = 'btn-ans';
        btn1.id = 'btn-id1'
        btn1.textContent = questions[index].a1;
       
        
    // Create btn2
    btn2 = document.createElement('button'); 
        btn2.className = 'btn-ans';
        btn2.id = 'btn-id2'
        btn2.textContent = questions[index].a2;

    // Create btn3
    btn3 = document.createElement('button'); 
        btn3.className = 'btn-ans';
        btn3.id = 'btn-id3'
        btn3.textContent = questions[index].a3;

    // Create btn4
    btn4 = document.createElement('button'); 
        btn4.className = 'btn-ans';
        btn4.id = 'btn-id4'
        btn4.textContent = questions[index].a4;

    // Append answer buttons (btn1-4) to div    
    document.getElementById('div-button').appendChild(btn1);
    document.getElementById('div-button').appendChild(btn2);
    document.getElementById('div-button').appendChild(btn3);
    document.getElementById('div-button').appendChild(btn4);

    ansBtnClick();
};


var ansBtnClick = function (){
    var ansBtn1 = document.querySelector('#btn-id1');
    var ansBtn2 = document.querySelector('#btn-id2');
    var ansBtn3 = document.querySelector('#btn-id3');
    var ansBtn4 = document.querySelector('#btn-id4'); 
    
    // Adding event listeners to answer buttons
    ansBtn1.addEventListener('click', answers1);
    ansBtn2.addEventListener('click', answers2);
    ansBtn3.addEventListener('click', answers3);
    ansBtn4.addEventListener('click', answers4);   
};

// answers(1-4) functions add to score when correct and subtract time when wrong
var answers1 = function(){
    questionsArr();
}

var answers2 = function(){
    questionsArr();
}

var answers3 = function(){
    if (index === 0 || index === 1 || index === 3){
        finalScore++;
    }
    else {
        console.log('wrong');
    }
    questionsArr();
}

var answers4 = function(){
    if (index === 2 || index === 4) {
        finalScore++;
    }
    else {
        console.log('wrong');
    }
    questionsArr();
}

var questionsArr = function(){ 
    // Run loop until the end of questions
    if (index === 0 || index === 1 || index === 2 || index === 3) {
        index++;
        question.textContent = questions[index].q;
        btn1.textContent = questions[index].a1;
        btn2.textContent = questions[index].a2;
        btn3.textContent = questions[index].a3;
        btn4.textContent = questions[index].a4;
   
        ansBtnClick;
    }
    else {
        score();
    }
};

var score = function() {
    question.textContent = "All done!";
    
    // Empty out div to replace it with other elements
    btn1.remove();
    btn2.remove();
    btn3.remove();
    btn4.remove();

    // Present final score
    var result = document.createElement('p');
        result.className = 'result';
        result.textContent = "Your final score is " + finalScore + ".";
    
    document.getElementById('div-button').appendChild(result);

    // Create intials div
    var initials = document.createElement('div');
        initials.id = 'initials';
        initials.className = 'initials-div';

    document.getElementById('div-button').appendChild(initials);

    // Create elements in initials div
    var initialsP = document.createElement('p');
        initialsP.textContent = 'Enter initials:';
    var initialsInput = document.createElement('Input');
        initialsInput.id = 'input';
        initialsInput.type = 'text'
    var initialsButton = document.createElement('Button');
        initialsButton.textContent = 'Submit';
        initialsButton.className = 'button';

    document.getElementById('initials').appendChild(initialsP);
    document.getElementById('initials').appendChild(initialsInput);
    document.getElementById('initials').appendChild(initialsButton);

    // Save score to localStorage on button click
    initialsButton.addEventListener('click', saveScore);

};

var saveScore = function() {
    // Save score to localStorage
    initialsInput = document.getElementById('input').value;
    localStorage.setItem(initialsInput, finalScore);
};

var startTimer = function(){
    console.log('timer');
 };

// Start Quiz on button click
buttonStart.addEventListener('click', startQuiz);



