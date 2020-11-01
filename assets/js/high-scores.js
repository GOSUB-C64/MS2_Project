//
//
$(document).ready(function () {
  fetch("assets/txt/high-score-table.txt")
    .then((response) => response.text())
    .then((data) => {
      // arranging data into rank
      let rank = data.split(" ");
      let first = rank.slice(0, 1);
      let second = rank.slice(1, 2);
      let third = rank.slice(2, 3);
      let fourth = rank.slice(3, 4);
      let fifth = rank.slice(4, 5);

      $('#first').append(first);
      $("#second").append(second);
      $("#third").append(third);
      $("#fourth").append(fourth);
      $("#fifth").append(fifth);
    });
  //   let timeoutID = setTimeout(function () {
  //     window.history.go(-1);
  //     clearTimeout(timeoutID);
  //   }, 5000);
});
