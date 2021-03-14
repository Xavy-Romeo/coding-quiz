var buttonStart = document.querySelector('#start-quiz');
var question = document.querySelector('#question');
var viewScore = document.querySelector('#view-score');
var pEl = document.querySelector('#p');

var highScore = JSON.parse(localStorage.getItem('highScores'));
var results = JSON.parse(localStorage.getItem('highScores'));

var viewScores0a; var viewScores1a; var viewScores2a; var viewScores3a; var viewScores4a;
var viewScores0b; var viewScores1b; var viewScores2b; var viewScores3b; var viewScores4b;
var ansBtn1; var ansBtn2; var ansBtn3; var ansBtn4;
var timeInterval;
var result;
var getScore;

var btn1 = ''; var btn2 = ''; var btn3 = ''; var btn4 = ''; 
var initialsInput = '';

var time = 75;
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
    pEl.remove();
    
    //Remove: Start Button
    buttonStart.remove();
    
    // Disable: View Scores while quiz in session
    viewScore.addEventListener('mouseenter', disabled);
    viewScore.removeEventListener('click', scorePage);
    
    // Restyle question
    question.textContent = questions[index].q;
    question.className = 'question-size score-style';

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
    // if (index === 0 || index === 1 || index === 2 || index === 3){
        if (time > 10) {
            time = time - 10;
            wrong();
            questionsArr();
        }
        else {
            timeOver();
        }
    // }
    // else {
    //     if (time > 10) {
    //         time = time - 10;
    //         wrong();
    //         finalScore = finalScore + time;
    //     }
    // }   
};

var answers2 = function(){
    if (time > 10) {
        time = time - 10;
        wrong();
        questionsArr();
    }
    else {
        timeOver();
    }
};

var answers3 = function(){
    
    if (index === 0 || index === 1 || index === 3){
        finalScore = finalScore + 100;
        correct();
    }
    else {
        if (time > 10){
            time = time - 10;
            wrong();
        }
        else {
            wrong();
            timeOver();
        }
    }
    
    questionsArr();
};

var answers4 = function(){
    
    if (index === 2 || index === 4) {
        finalScore = finalScore + 100;
        correct();
    }
    else {
        if (time > 10){
            time = time - 10;
            wrong();
        }
        else {
            wrong();
            timeOver();
        }
    }
    
    questionsArr();
};

// Add <span> to say wrong when answered incorrectly
var wrong = function(){
    
    var wrongAns = document.createElement('span');
        wrongAns.className = 'answer';
        wrongAns.textContent = 'Wrong. Awww.'
    document.getElementById('main').appendChild(wrongAns);

    var tempDivW = document.createElement('div');
        tempDivW.className = 'temp-div';
    document.getElementById('main').appendChild(tempDivW);
    
    var timeout = setTimeout(function(){
        tempDivW.remove();
        wrongAns.remove();
    }, 1000);
 };

// Add <span> to say correct when answered correctly
var correct = function(){
    
    var correctAns = document.createElement('span');
        correctAns.className = 'answer';
        correctAns.textContent = 'Correct! Yay!!!'
    document.getElementById('main').appendChild(correctAns);
    
    var tempDivC = document.createElement('div');
        tempDivC.className = 'temp-div';
    document.getElementById('main').appendChild(tempDivC);

    var timeout = setTimeout(function(){
        correctAns.remove();
        tempDivC.remove();
    }, 1000);
};

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
    
    // Enter Intials to view High Scores
    viewScore.removeEventListener('mouseenter', disabled);
    viewScore.addEventListener('mouseenter', enterInitials);

    // Empty out div to replace it with other elements
    btn1.remove();
    btn2.remove();
    btn3.remove();
    btn4.remove();

    // Present final score
     result = document.createElement('p');
        result.className = 'result';
        result.textContent = "Your final score is " + (finalScore + time) + ".";
    
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
        initialsInput.type = 'text';
        initialsInput.setAttribute('maxLength', 3);
    var initialsButton = document.createElement('Button');
        initialsButton.textContent = 'Submit';
        initialsButton.className = 'button';

    document.getElementById('initials').appendChild(initialsP);
    document.getElementById('initials').appendChild(initialsInput);
    document.getElementById('initials').appendChild(initialsButton);

    // Stop countdown
    clearInterval(timeInterval);

    // Remove countdown
    timerDiv.remove();

    // Save score to localStorage on button click
    initialsButton.addEventListener('click', saveScore);
};

var saveScore = function() {
   
    if(!localStorage.highScores) {
        highScore = [];
    }
    else {
        highScore = highScore;
    }

    // Get player initials from input
    initialsInput = document.getElementById('input').value;
    initialsInput = initialsInput.toUpperCase();
            
    // Make object with values for score and initials
    var scoreResult = {
        score: finalScore + time,
        initials: initialsInput,
    }

    // Push player results into highScore array
    highScore.push(scoreResult);
       
    // Save player results to localStorage
    localStorage.setItem('highScores', JSON.stringify(highScore));

    // Sort items from 1-5
    highScore = highScore.sort(function(a,b){
       return b.score-a.score;
    });

    results = highScore;
          
    scorePage2();
};

var scorePage = function() {
    buttonStart.remove();
    pEl.remove();
    viewScore.remove();

    question.className = 'question-size score-style';
    scorePageSetup();
};

var scorePage2 = function() {
    viewScore.remove();
    result.remove();
    initials.remove();

    scorePageSetup();
};

var scorePageSetup = function() {
    
    question.textContent = 'High Scores';

    var viewScoresDiv = document.createElement('div');
        viewScoresDiv.className = 'score-style view-scores view-scores-div';
        viewScoresDiv.id = 'view-scores-divs';
    
    var scoreButtonsDiv = document.createElement('div');
        scoreButtonsDiv.className = 'score-style score-buttons-div';
    
    document.getElementById('main').appendChild(viewScoresDiv);
    document.getElementById('main').appendChild(scoreButtonsDiv);

    var viewScoresDiv1 = document.createElement('div');
        viewScoresDiv1.id = 'view-scores-divs-1';
    var viewScoresDiv2 = document.createElement('div');
        viewScoresDiv2.id = 'view-scores-divs-2';

    viewScoresDiv.appendChild(viewScoresDiv1);
    viewScoresDiv.appendChild(viewScoresDiv2);

    viewScores0a = document.createElement('p');
        viewScores0a.className = 'high-scores high-scores-1';  
        if(!localStorage.highScores) {
            viewScores0a.textContent = 'N/A';
        }
        else {
            viewScores0a.textContent = results[0].initials;          
        }
             
    viewScores1a = document.createElement('p');
        viewScores1a.className = 'high-scores high-scores-1'; 
        if(!localStorage.highScores || results[1] == undefined) {
            viewScores1a.textContent = 'N/A';
        }
        else {
            viewScores1a.textContent = results[1].initials; 
        }
        
    viewScores2a = document.createElement('p');
        viewScores2a.className = 'high-scores high-scores-1';
        if(!localStorage.highScores || results[2] == undefined) {
            viewScores2a.textContent = 'N/A';
        }
        else {
            viewScores2a.textContent = results[2].initials;
        }
        
    viewScores3a = document.createElement('p');
        viewScores3a.className = 'high-scores high-scores-1';
        if(!localStorage.highScores || results[3] == undefined) {
            viewScores3a.textContent = 'N/A';
        }
        else {
            viewScores3a.textContent = results[3].initials;  
        }
        
    viewScores4a = document.createElement('p');
        viewScores4a.className = 'high-scores high-scores-1';
        if(!localStorage.highScores || results[4] == undefined) {
            viewScores4a.textContent = 'N/A';
        }
        else {
            viewScores4a.textContent = results[4].initials;            
        }
        
    viewScores0b = document.createElement('p');
        viewScores0b.className = 'high-scores high-scores-2';  
        if(!localStorage.highScores) {
            viewScores0b.textContent = '';
        }
        else {
            viewScores0b.textContent = ' --- ' + results[0].score;          
        }
             
    viewScores1b = document.createElement('p');
        viewScores1b.className = 'high-scores high-scores-2'; 
        if(!localStorage.highScores || results[1] == undefined) {
            viewScores1b.textContent = '';
        }
        else {
            viewScores1b.textContent =  ' --- ' + results[1].score; 
        }
        
    viewScores2b = document.createElement('p');
        viewScores2b.className = 'high-scores high-scores-2';
        if(!localStorage.highScores || results[2] == undefined) {
            viewScores2b.textContent = '';
        }
        else {
            viewScores2b.textContent =  ' --- ' + results[2].score;
        }
        
    viewScores3b = document.createElement('p');
        viewScores3b.className = 'high-scores high-scores-2';
        if(!localStorage.highScores || results[3] == undefined) {
            viewScores3b.textContent = '';
        }
        else {
            viewScores3b.textContent =  ' --- ' + results[3].score;  
        }
        
    viewScores4b = document.createElement('p');
        viewScores4b.className = 'high-scores high-scores-2';
        if(!localStorage.highScores || results[4] == undefined) {
            viewScores4b.textContent = '';
        }
        else {
            viewScores4b.textContent =  ' --- ' + results[4].score;            
        }

    viewScoresDiv1.appendChild(viewScores0a);
    viewScoresDiv1.appendChild(viewScores1a);
    viewScoresDiv1.appendChild(viewScores2a);
    viewScoresDiv1.appendChild(viewScores3a);
    viewScoresDiv1.appendChild(viewScores4a);
    viewScoresDiv2.appendChild(viewScores0b);
    viewScoresDiv2.appendChild(viewScores1b);
    viewScoresDiv2.appendChild(viewScores2b);
    viewScoresDiv2.appendChild(viewScores3b);
    viewScoresDiv2.appendChild(viewScores4b);
   
    var scoreButton1 = document.createElement('button');
        scoreButton1.textContent = 'Go Back';
        scoreButton1.className = 'score-button';
        scoreButton1.id = 'refresh';
    var scoreButton2 = document.createElement('button');
        scoreButton2.textContent = 'Clear High Scores'
        scoreButton2.className = 'score-button';
        scoreButton2.id = 'clear';
      
    scoreButtonsDiv.appendChild(scoreButton1);
    scoreButtonsDiv.appendChild(scoreButton2);
   
    // Clear local storage on click
    var buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', clear);

    // Return to quiz start page
    var buttonRefresh = document.querySelector('#refresh');
    buttonRefresh.addEventListener('click', refresh);
};

var clear = function() {
    localStorage.clear();
    results = highScore;
    viewScores0a.textContent = "N/A";
    viewScores0b.textContent = '';
    viewScores1a.textContent = "N/A";
    viewScores1b.textContent = '';
    viewScores2a.textContent = "N/A";
    viewScores2b.textContent = '';
    viewScores3a.textContent = "N/A";
    viewScores3b.textContent = '';
    viewScores4a.textContent = "N/A";
    viewScores4b.textContent = '';
};

var refresh = function() {
    location.reload();
}

var disabled = function() {
    // disable view high score while in quiz is active
    viewScore.textContent = 'View High Scores (Cannot see while taking test)';
    var timeout = setTimeout(function(){
        viewScore.textContent = 'View High Scores';
    }, 2000);
};

var enterInitials = function() {
    viewScore.textContent = 'View High Scores (Enter your Initials to see High Scores)';
    var timeout = setTimeout(function(){
            viewScore.textContent = 'View High Scores';
        }, 2000);
};

var startTimer = function(){
    // Create container for Timer Countdown and append to header
    var timerDiv = document.createElement('div');
        timerDiv.id = 'timerDiv'
    document.getElementById('header').appendChild(timerDiv);

    // Create <p> 'Time Remaining' 
    var timerText = document.createElement('p');
        timerText.className = 'timer';
        timerText.textContent = 'Time Remaining: ';
    
    // Create <span> display countdown
    var timerCount = document.createElement('span');
        timerCount.className = 'timer';
        timerCount.textContent = time;
    
    // Append <p> and <span> to timerDiv
    document.getElementById('timerDiv').appendChild(timerText);
    document.getElementById('timerDiv').appendChild(timerCount);

    // Set time interval to run countdown every second and stop quiz at time = 0
    timeInterval = setInterval(function(){
        if (time > 0) {
            timerCount.textContent = (time-1);
            time--;
        }
        else {
            clearInterval(timeInterval);
            timeOver();
        } 
    }, 1000);
};

var timeOver = function() {
    alert('Time is up!!!');
    score();
};

// Start Quiz on button click
buttonStart.addEventListener('click', startQuiz);

// View High Score page on click
viewScore.addEventListener('click', scorePage);

