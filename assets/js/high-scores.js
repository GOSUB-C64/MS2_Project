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

      $("#1st").text(first);
      $("#2nd").text(second);
      $("#3rd").text(third);
      $("#4th").text(fourth);
      $("#5th").text(fifth);
    });
  //   let timeoutID = setTimeout(function () {
  //     window.history.go(-1);
  //     clearTimeout(timeoutID);
  //   }, 5000);
});
