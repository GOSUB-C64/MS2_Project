//
//
$(document).ready(function () {
  let scores = loadStrings('high-score-table.txt')
  
  let timeoutID = setTimeout(function () {
    window.history.go(-1);
    clearTimeout(timeoutID);
  }, 5000);
});
