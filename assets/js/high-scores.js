//
//
$(document).ready(function () {
  fetch("assets/txt/high-score-table.txt")
    .then((response) => response.text())
    .then((data) => {
      // arranging data into rank
      let rank = data.split(" ");
      let first = rank.slice(0, 1);
      let second = rank.slice(2, 3);
      let third = rank.slice(4, 5);
      let fourth = rank.slice(6, 7);
      let fifth = rank.slice(8, 9);

      $('#first').append(first);
      $("#second").append(second);
      $("#third").append(third);
      $("#fourth").append(fourth);
      $("#fifth").append(fifth);

      let hs1 = rank.slice(1, 2);
      let hs2 = rank.slice(3, 4);
      let hs3 = rank.slice(5, 6);
      let hs4 = rank.slice(7, 8);
      let hs5 = rank.slice(9, 10);

      $('#hs1').append(hs1);
      $("#hs2").append(hs2);
      $("#hs3").append(hs3);
      $("#hs4").append(hs4);
      $("#hs5").append(hs5);

    });
});

let backBtn = document.getElementById("back-btn");

$(backBtn).click(function () {
  window.open("index.html", "_self", false);
});
