//Target Position
var max = 20, min = 5, 
    topmax = 75, topmin = 10, 
    leftmax = 90, leftmin = 10;

//header
var header = document.getElementById("header");
var seconds = 5;

//footer
var mstke = 3, score = 0;

//Dialog Box
var box = document.getElementById("dialBox");

//InGame
var game1 = document.getElementById("gamesubContainer");
var game = document.getElementById("gameContainer");
var dmg = document.getElementById("mistakeColor");
var area = document.getElementById("middle");
var hit = document.getElementById("target");

//Menu
var menu = document.getElementById("menuContainer");

document.getElementById("mistakedisp").textContent=mstke;
document.getElementById("scoredisp").textContent=score;
document.getElementById("zunetime").textContent=seconds + 's';

//Start Button
function start(){
    menu.style.display = "none";
    game.style.display = "block";
}

//Not Target hit    
function mistke() {
    mstke--;
    document.getElementById("mistakedisp").innerHTML = mstke;
    if (mstke == 0) {
        var msg = "AIM ISSUE";
        dialogbox(msg);
        //mstke = 3;
    }
}

//Time's up and Game Over
function dialogbox(msg){
    var msgtxt = msg;
    document.getElementById("dialMsg").innerText = msgtxt;
    game1.style.display = "none";
    box.style.display = "block";
    hit.style.display = "none";
}

//When click play again button
function redo() {
    location.reload();
}

//Event: Not hit the target
target.addEventListener('click', mistke);
document.addEventListener('click', function (event) {
    if (event.target == area) {
        setTimeout(() => { dmg.style.display = "block" }, 100);
        setTimeout(() => { dmg.style.display = "none" }, 150);
        mistke();
    }
});

//Target Object/Function
function hitTarget() {
    score++; mstke++;
    document.getElementById("scoredisp").innerHTML = score;
    
    if(score == 1) {
        countdown();
    }

    hit.style.top = Math.floor(Math.random() * (topmax - topmin + 1)) + topmin + '%'; //max = 50
    hit.style.left = Math.floor(Math.random() * (leftmax - leftmin + 1)) + leftmin + '% '; //max = 168
    hit.style.width = Math.floor(Math.random() * (max - min + 1)) + min + 'vh'; //max = 20 min = 5
    hit.style.height = Math.floor(Math.random() * (max - min + 1)) + min + 'vh'; //max = 20 min = 5
}

//Support Button
function myProf() {
    window.open("https://github.com/rrokusan");
}

function countdown() {// Number of seconds to count down
    var countdownTimer = setInterval(function() {
      seconds--;

      document.getElementById("zunetime").innerHTML = seconds + "s";
        
      if (mstke == 0) { clearInterval(countdownTimer) }

      if (seconds <= 0) {
        clearInterval(countdownTimer);
        var msg = "Time's up"
        dialogbox(msg);
      }
    }, 1000);
  }