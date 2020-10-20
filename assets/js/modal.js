// clickSnd = document.getElementById("start-button");
// let playerClickSnd = new Audio("assets/sounds/sound1.wav");
// $(clickSnd).click(function() {
//     playerClickSnd.play();
// });

$(document).click(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 500);
});

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById('okButton')
    .addEventListener("click", processUserName);
});

function processUserName() {
  let userName = document.getElementById('getUserName').value;
  console.log(userName);
}

