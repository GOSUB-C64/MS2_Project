
// modal to get user name //
$(function () {
  $("#myModal").appendTo("body");
});



let startBtn = document.getElementById("start-btn");
let highScoreBtn = document.getElementById("high-score-btn");
let howToBtn = document.getElementById("instructions-btn");


$(startBtn).click(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 500);
});

$(highScoreBtn).click(function () {
  window.open("high-scores.html", "_self", false);
});

$(howToBtn).click(function () {
  window.open("instructions.html", "_self", false);
});


document.getElementById("okButton").addEventListener("click", processUserName);

let input = document.getElementById("getUserName");
input.addEventListener('keypress', (e) => {
    if(e.keycode === 13) {
        console.log(userName);
        // processUserName();
    }
});


function processUserName() {
  let userName = document.getElementById("getUserName").value;
  console.log(userName);
  localStorage.setItem("storageName", userName);

  $("#myModal").modal("hide");
  window.open("main.html", "_self", false);
}
