var buttonStart = document.querySelector('#start-quiz');
var timer = 75;
var score = 0;

var questions = [
    {'q': 'What is your name?', 'a1': 'joe', 'a2': 'mo', 'a3': 'bo', 'a4': 'Tom'},
    {'q': 'How old are you?', 'a1': '1', 'a2': '2', 'a3': '3', 'a4': '4'},
];  
  
 var startQuiz = function() {
    startTimer();

    var pEl = document.querySelector('#p');
    pEl.remove();

    buttonStart.remove();

    var question = document.querySelector('#question');
        question.textContent = questions[0].q;
        question.className = 'question-style';

    var divBtn = document.createElement('div');
        divBtn.className = 'div-Btn';
        divBtn.id = 'div-button';
    document.getElementById('main').appendChild(divBtn);

    var btn1 = document.createElement('button');
        btn1.className = 'btn-ans';
        btn1.textContent = questions[0].a1;

    var btn2 = document.createElement('button');
        btn2.className = 'btn-ans';
        btn2.textContent = questions[0].a2;

    var btn3 = document.createElement('button');
        btn3.className = 'btn-ans';
        btn3.textContent = questions[0].a3;

    var btn4 = document.createElement('button');
        btn4.className = 'btn-ans';
        btn4.textContent = questions[0].a4;

    document.getElementById('div-button').appendChild(btn1);
    document.getElementById('div-button').appendChild(btn2);
    document.getElementById('div-button').appendChild(btn3);
    document.getElementById('div-button').appendChild(btn4);

//     for (i=0; i < questions.length; i++) {
      
//         var question = document.querySelector('#question');
//         question.textContent = questions[i].q;

//         btn1.textContent = questions[i].a1;
//         btn2.textContent = questions[i].a2;
//         btn3.textContent = questions[i].a3;
//         btn4.textContent = questions[i].a4;
//    };
     

  };

 var startTimer = function(){
     console.log('');
 }



 // Start Quiz on button click
 buttonStart.addEventListener('click', function() {
    startQuiz();
});