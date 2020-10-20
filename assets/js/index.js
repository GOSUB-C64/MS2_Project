

$(function () {
  $("#myModal").appendTo("body");
});

$(document).click(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 500);
});

document.getElementById("okButton").addEventListener("click", processUserName);

function processUserName() {
  let userName = document.getElementById("getUserName").value;
  console.log(userName);
  $("#myModal").modal("hide");
  window.open("main.html");
}
