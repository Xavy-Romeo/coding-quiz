var buttonStart = document.querySelector('#start-quiz');
var question = document.querySelector('#question');

var btn1 = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
var btn4 = document.createElement('button');

var timer = 75;
var finalScore = 0;
var index = 0;


var questions = [
    {'q': 'What is your name?', 'a1': 'joe', 'a2': 'mo', 'a3': 'bo', 'a4': 'Tom'},
    {'q': 'How old are you?', 'a1': '1', 'a2': '2', 'a3': '3', 'a4': '4'},
    {'q': 'what up?', 'a1': 'good', 'a2': 'bad', 'a3': 'sad', 'a4': 'mad'},
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

    // Change btn1
        btn1.className = 'btn-ans';
        btn1.id = 'btn-id1'
        btn1.textContent = questions[index].a1;

    // Change btn2
        btn2.className = 'btn-ans';
        btn2.id = 'btn-id2'
        btn2.textContent = questions[index].a2;

    // Change btn3
        btn3.className = 'btn-ans';
        btn3.id = 'btn-id3'
        btn3.textContent = questions[index].a3;

    // Change btn4
        btn4.className = 'btn-ans';
        btn4.id = 'btn-id4'
        btn4.textContent = questions[index].a4;

    // Append answer buttons to div    
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
    
    //run questions array loop after click
    ansBtn1.addEventListener('click', questionsArr);
    ansBtn2.addEventListener('click', questionsArr);
    ansBtn3.addEventListener('click', questionsArr);
    ansBtn4.addEventListener('click', questionsArr);
};

var questionsArr = function(){ 
    if (index < questions.length) {
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
    console.log("done")
}

var startTimer = function(){
    console.log('timer');
 };

// Start Quiz on button click
buttonStart.addEventListener('click', startQuiz);

