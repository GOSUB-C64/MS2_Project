$(function () {
  $("#myModal").appendTo("body");
});
let startBtn = document.getElementById("start-btn");
let highScoreBtn = document.getElementById("high-score-btn");

$(startBtn).click(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 500);
});

$(highScoreBtn).click(function () {
  window.open("high-scores.html", "_self", false);
});

// function startTimer(){
// var tt = setInterval(function() {
//     window.open ('menu.html','_self',false)
// },5000);
// }

document.getElementById("okButton").addEventListener("click", processUserName);

function processUserName() {
  let userName = document.getElementById("getUserName").value;
  console.log(userName);
  localStorage.setItem("storageName", userName);

  $("#myModal").modal("hide");
  window.open("main.html");
}
