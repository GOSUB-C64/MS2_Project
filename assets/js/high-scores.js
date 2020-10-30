//
//
$(document).ready(function () {
  fetch('assets/txt/high-score-table.txt')
  .then(response => response.text())
  .then(data => {
      // Do something with the data
      let myData = Array.from(data).join('');
      let first = myData.split(' ');

      console.log(first);
      $('#highScores').text(first);
  });
//   let timeoutID = setTimeout(function () {
//     window.history.go(-1);
//     clearTimeout(timeoutID);
//   }, 5000);
});
