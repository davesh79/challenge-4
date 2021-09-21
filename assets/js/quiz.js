const questions = [
    {
        question:"what is this",
        choices: ["a", "b", "c", "d"],
        answer: "c"
    },
    {
        question:"what color is that",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },

 ];



 console.log(questions[0].question);



 timer=75;

//This is how we query an element on html
 var startBtn = document.getElementById("startBtn");
 //queryy seleceting span tag for timer
 var timerEl = document.getElementById("timerEl");



 function quizStart(){
//hide start screen / show quiz screen
var startScreen = document.getElementById('startScreen');
var quizScreen = document.getElementById('quizScreen');
startScreen.style.display = 'none';
quizScreen.style.display = 'block';


    //setInterval to start our timer
    setInterval(function(){
        //subtaracts timmer by 1 and resaves new value to timer
        timer--;
        //add cotent to span tag
        timerEl.textContent= timer;
       // console.log(timer);
    }
    , 1000)

    displayQuestion();


 };

 function displayQuestion(){
     //
     var questionEl = document.getElementById('question');
     questionEl.textContent = questions[0].question;

 }



//user clicking on start btn on click, calls function quizStart
startBtn.onclick = quizStart;

