// modal to get user name //
$(function () {
  $("#myModal").appendTo("body");
});

let highScoreBtn = document.getElementById("high-score-btn");
let howToBtn = document.getElementById("instructions-btn");

let startBtn = document.getElementById("start-btn");

$(startBtn).click(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 500);
});

$(highScoreBtn).click(function () {
  window.open("modal_test_2.html", "_self", false);
});

$(howToBtn).click(function () {
  window.open("instructions.html", "_self", false);
});

// document.getElementById("okButton").addEventListener("click", processUserName);

let input = document.getElementById("getUserName");


// function processUserName() {
//   let userName = document.getElementById("getUserName").value;
//   if (userName == "") {
//     console.log("please type your name");
//     alert("please type your name");
//   } else {
//     console.log(userName);
//     localStorage.setItem("storageName", userName);
//     $("#myModal").modal("hide");
//     window.open("main.html", "_self", false);
//   }
// }
