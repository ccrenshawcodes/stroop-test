//creating our color words and values
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
    const colorval = ['#f7020b', '#f75802', '#f7df02', '#2bf702', '#028df7', '#7d02f7', '#f54cc2'];

//still need to give first word and color value

//---timer---
    let seconds = 30;
    let timer;
    let goBtn = document.getElementById('start');
    let timeDisplay = document.getElementById('stopwatch');

    let testWord = document.getElementById('word');
    let form = document.getElementById('input');

    let wordCount = 0;
    let scoreDisplay = document.getElementById('score');

    let newWord;
    let newColor;

//does the countdown
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
            scoreDisplay.innerHTML += wordCount;
            form.value = "";
        }
    };

  if(seconds = 30) {
    timer = setInterval(countdown, 1000); 
  }
}

goBtn.addEventListener('click', function() {//calls the function on start btn click
  startTime();
  form.disabled = false;
});
//---end timer code---


//---switching the words and colors!--

form.disabled = true;

const wordSwitch = () => {
    newWord = colors[Math.floor(Math.random() * colors.length)];
    newColor = colorval[Math.floor(Math.random() * colorval.length)];
    testWord.innerHTML = newWord;
    testWord.style.color = newColor;
}

form.addEventListener('keydown', function(k) {
    if(k.code == "Enter") {
        wordSwitch();
        wordCount++;
        form.value = "";
    }
})

//timer should:
    //gray out or hide the text box (and start button?) when it hits 1:00:00 1 minute.
    //display "you got through x words!"


