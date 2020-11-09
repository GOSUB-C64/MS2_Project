// function to keep the grid squares responsive.
function responsiveGrid() {
  var width = $(".tile").outerWidth();
  $(".tile").css("height", width);
}

$(document).ready(function () {
  responsiveGrid();
});
$(window).resize(function () {
  responsiveGrid();
});

let tileIdString;
let answerSeq = []; // holds users guess for comparison later
let gameCount = 1; /* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user is successful */
let isClickEnabled = false;
let noOfClicks = 0;
let index = 0;
let runningIndex = 0;
let max = 16; // target level to reach!
let lives = 3;

// generate array 16 non-repeatable random nos (0-15) representing the 4x4 grid
function generateTileArray() {
  let arr = [];
  while (arr.length < 16) {
    let tile = Math.floor(Math.random() * 16);

    if (!arr.includes(tile)) {
      arr.push(tile);
    }
  }
  return arr;
}

// assign each tile (div) its own color i.e. if tileSeq[0]==1 then  tileSeqCol[0]=="Green"
function generateTileColourSeq(arr) {
  let nextColour;
  let colourMap = [
    "Red",
    "Green",
    "Blue",
    "Yellow",
    "Orange",
    "Magenta",
    "White",
    "Violet",
    "Cyan",
    "Brown",
    "Grey",
    "Teal",
    "DeepPink",
    "GreenYellow",
    "GoldenRod",
    "IndianRed",
  ];
  let i = 0;
  let colArr = [];
  while (colArr.length < 16) {
    nextColour = arr[i];
    colArr.push(colourMap[nextColour]);
    i++;
  }
  return colArr;
}

function clearAllTiles() {
  for (let i = 0; i <= 15; i++) {
    let Id = "#tile" + i;
    $(Id).css("background-color", "#000");
  }
}

function displayGuess(tile) {
  Id = "#tile" + tile;
  let a = tileSeq.indexOf(tile);
  $(Id).css("background-color", tileColorSeq[a]);
}

// function to display all cells up to gameCount //
function displayCurrentSeq() {
  isClickEnabled = false;
  if (index < gameCount) {
    let tileId = "#tile" + tileSeq[index];
    let tileColour = tileColorSeq[index];
    $(tileId).css("background-color", tileColorSeq[index]);
    let intervalID = setInterval(() => {
      $(tileId).css("background-color", "#000");
      index++;
      displayCurrentSeq();
      clearInterval(intervalID);
    }, 1000);
  } else {
    index = 0;
    acceptUserInput();
  }
  return;
}

function acceptUserInput() {
  clearAllTiles();
  isClickEnabled = true;
}

//  GameStart //
let tileSeq = generateTileArray();
let tileColorSeq = generateTileColourSeq(tileSeq);

let userName = localStorage.getItem("storageName");
document.querySelector("#gamerName").innerHTML = userName.toUpperCase();
document.querySelector("#gamerLevel").innerHTML = "0" + gameCount;
document.querySelector("#lives").innerHTML = lives;

let intervalID = setInterval(() => {
  displayCurrentSeq();
  clearInterval(intervalID);
}, 2000);

$(".tile").click(function () {
  if (!isClickEnabled) return;
  noOfClicks++;
  if (noOfClicks <= gameCount) {
    // build the ID of which of the 16 elements (divs) was clicked
    tileIdString = $(this).attr("id");
    tileId = parseInt(tileIdString.split("tile")[1]);
    answerSeq.push(tileId);
    // display users guess to screen grid
    displayGuess(tileId);
    let intervalID = setInterval(() => {
      $("#tile" + tileId).css("background-color", "#000");
      clearTimeout(intervalID);
    }, 500);
  }
  // if currently clicked tile doesnt equal the one that the array index is pointing at, then stop and game over
  if (tileId !== tileSeq[noOfClicks - 1]) {
    noOfClicks = 0;
    runningIndex = 0;
    document.getElementById("lives").style.backgroundColor = "#f00";

    let timeoutID = setTimeout(() => {
      document.getElementById("lives").style.backgroundColor = "#000";
      clearTimeout(timeoutID);
    }, 500);

    lives--;
    document.querySelector("#lives").innerHTML = lives;

    if (lives == 0) {
      $(function () {
        $("#playAgainModal").appendTo("body");
      });
      setTimeout(function () {
        $("#playAgainModal").modal("show");
      }, 500);
      document
        .getElementById("yesButton")
        .addEventListener("click", function () {
          window.location.reload(true);
        });
      document
        .getElementById("noButton")
        .addEventListener("click", function () {
          window.open("index.html", "_self", false);
        });
    }
    let intervalID = setInterval(() => {
      displayCurrentSeq();
      clearInterval(intervalID);
    }, 2000);

    // if max gameCount is reached then there must be a winner.
  } else if (noOfClicks === gameCount && gameCount === max) {
    confirm(
      "! ! ! !   W E L L  D O N E  " + userName.toUpperCase() + "! ! ! !"
    );
    noOfClicks = 0;
    gameCount = 3;
    index = 0;
    runningIndex = 0;
    tileSeq = [];
    tileColorSeq = [];
    tileIdString = "";
    tileId = 0;
    window.location.reload(true);
    // if all guesses equals the current game count  which is the maximum reached then add another tile and restart sequence
  } else if (noOfClicks === gameCount) {
    noOfClicks = 0;
    gameCount++; // increment game level (add 1 more tile)
    runningIndex = 0;

    if (gameCount < 10) {
      document.querySelector("#gamerLevel").innerHTML = "0" + gameCount;
    } else {
      document.querySelector("#gamerLevel").innerHTML = gameCount;
    }

    let intervalID = setInterval(() => {
      displayCurrentSeq();
      clearInterval(intervalID);
    }, 2000);
  }
  if (tileId === tileSeq[runningIndex]) {
    runningIndex++;
  }
});
