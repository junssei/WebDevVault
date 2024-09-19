function myPlay() {
  var menu = document.getElementById("menu_screen");
  var game = document.getElementById("game_screen");
  game.style.display = "block";
  menu.style.display = "none";

  var username = document.getElementById("getUser").value;
  document.getElementById("username").innerHTML = username;
}
