//creating our color words
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

//variables - timer
let seconds = 30;
let timer;
let goBtn = document.getElementById('start');
let timeDisplay = document.getElementById('stopwatch');

//variables - color word and input
let testWord = document.getElementById('word');
let form = document.getElementById('input');
let newWord;

//variables - score
let wordCount = 0;
let scoreDisplay = document.getElementById('score');


// -- switching the words and colors --
form.disabled = true; //you can only type when the timer is going

//displays a new color word each time it gets called
const wordSwitch = () => {
    newWord = colors[Math.floor(Math.random() * colors.length)];
    testWord.innerHTML = newWord;
}

//triggers wordSwitch() above; counts entries; clears form
form.addEventListener('keydown', function(k) {
    if(k.code == "Enter") {
        wordSwitch();
        wordCount++;
        form.value = "";
    }
})

//Countdown timer
function startTime() {
    function countdown() {
        seconds--;
        timeDisplay.innerHTML = `0:${seconds}`;

        if (seconds < 10) {
            timeDisplay.innerHTML = `0:0${seconds}`
        }

        if(seconds <= 0){
            clearInterval(timer);
            form.disabled = true;
            scoreDisplay.innerHTML = `You got through ${wordCount} words!`;
            form.value = "";
        }
    };

  if(seconds = 30) {
    timer = setInterval(countdown, 1000); 
  }
}

//--end timer--


//starts the timer on click; enables the form; gives 1st word
goBtn.addEventListener('click', function() {
    timeDisplay.innerHTML = '0:30';
    startTime();
    form.disabled = false;
    wordSwitch();
    wordCount = 0;
    scoreDisplay.innerHTML = '';
  });


//reset button - stops timer, changes time display, clears word count/score display,
//displays 'ready?' in default color, clears form
function resetPage() {
    wordCount = 0;
    scoreDisplay.innerHTML = '';

    testWord.innerHTML = 'ready?';
    testWord.style.color = '#232';

    clearInterval(timer);
    timeDisplay.innerHTML = '0:30';

    form.value = '';
    form.disabled = true;

    
}

document.getElementById('reset').addEventListener('click', function(){
    resetPage();
})


