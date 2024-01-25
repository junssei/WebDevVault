var mstke = 3;
var score = 0;
var hit = document.getElementById("target");
var box = document.getElementById("dialBox");
var dmg = document.getElementById("mistakeColor");
var menu = document.getElementById("menuContainer");
var game = document.getElementById("gameContainer");
var game1 = document.getElementById("gamesubContainer");
var area = document.getElementById("middle");
var sb = document.getElementById("header");
var seconds = 60;

document.getElementById("mistakedisp").textContent=mstke;
document.getElementById("scoredisp").textContent=score;

function start(){
    menu.style.display = "none";
    game.style.display = "block";
}

function mistke() {
    mstke--;
    document.getElementById("mistakedisp").innerHTML = mstke;
    if (mstke == 0) {
        game1.style.display = "none";
        box.style.display = "block";
        hit.style.display = "none";
        //mstke = 3;
    }
}

function redo() {
    location.reload();
}

//events
target.addEventListener('click', mistke);
document.addEventListener('click', function (event) {
    if (event.target == area) {
        setTimeout(() => { dmg.style.display = "block" }, 100);
        setTimeout(() => { dmg.style.display = "none" }, 150);
        mistke();
    }
});
var max = 20, min = 5, topmax = 75, topmin = 10, leftmax = 90, leftmin = 10;
/*left: 84vh; max = 168 normal = 84, min: 5% max: 95%
top: 31vh; max = 50 normal = 31, min: 40% max: 120%
hit.style.top = Math.floor(400*Math.random());
hit.style.left = Math.floor(1500*Math.random());*/
function hitTarget() {
    score++; mstke++;
    document.getElementById("scoredisp").innerHTML = score;
    
    if(score == 1)
        countdown();

    hit.style.top = Math.floor(Math.random() * (topmax - topmin + 1)) + topmin + '%'; //max = 50
    hit.style.left = Math.floor(Math.random() * (leftmax - leftmin + 1)) + leftmin + '% '; //max = 168
    /*hit.style.width = Math.floor(Math.random() * 100) + 50; hit.style.height = Math.floor(Math.random() * 100) + 50;*/
    hit.style.width = Math.floor(Math.random() * (max - min + 1)) + min + 'vh'; //max = 20 min = 5
    hit.style.height = Math.floor(Math.random() * (max - min + 1)) + min + 'vh'; //max = 20 min = 5
}

function myProf() {
    window.open("https://github.com/rrokusan");
}


function countdown() {
    var seconds = 60; // Number of seconds to count down

    var countdownTimer = setInterval(function() {
      seconds--;

      document.getElementById("zunetime").innerHTML = seconds + "s";

      if (seconds <= 0) {
        clearInterval(countdownTimer);
        document.getElementById("zunetime").innerHTML = "Expired";
      }
    }, 1000);
  }