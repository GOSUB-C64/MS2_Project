// activate modal to get user name //
$(function () {
  $("#myModal").appendTo("body");
});

let startBtn = document.getElementById("start-btn");
$(startBtn).click(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 500);
});

let highScoreBtn = document.getElementById("high-score-btn");
let howToBtn = document.getElementById("instructions-btn");
$(highScoreBtn).click(function () {
  window.open("high-scores.html", "_self", false);
});
$(howToBtn).click(function () {
  window.open("instructions.html", "_self", false);
});

document.getElementById("okButton").addEventListener("click", processUserName);

function processUserName() {
  let userName = document.getElementById("getUserName").value || 'Player';
  localStorage.setItem("storageName", userName);
  $("#myModal").modal("hide");
  window.open("main.html", "_self", false);
}


