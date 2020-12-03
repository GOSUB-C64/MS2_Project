// function to keep the main game grid responsive.
// found help with this on Youtube - code acreditted in readme.md file.

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
/* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user has successfully guessed */
let gameCount = 1; 
let isClickEnabled = false;
let noOfClicks = 0;
let index = 0;
let runningIndex = 0;
let max = 16; // target level to reach!
let remainingLives = 3;
let tileId;

// generate array 16 non-repeatable random nos (0-15) representing the 4x4 grid
// needed help with how to do this (see credits in readme.md) the magic is in the 'IF' statement :)
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
// mentor helped here
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
  let Id = "#tile" + tile;
  let a = tileSeq.indexOf(tile);
  $(Id).css("background-color", tileColorSeq[a]);
}

// function to display all cells in current gameCount //
function displayCurrentSeq() {
  isClickEnabled = false; // prevent user from clicking while cpu's turn is active.
  if (index < gameCount) {
    let tileId = "#tile" + tileSeq[index];
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

// got help on stackoverflow for using localStorage (see readme)
let userName = localStorage.getItem("storageName");

document.querySelector("#gamerName").innerHTML = userName.toUpperCase();
document.querySelector("#gamerLevel").innerHTML = "0" + gameCount;
document.querySelector("#gamerLives").innerHTML = remainingLives;

let intervalID = setInterval(() => {
  alert("GET READY TO PLAY!!");

  displayCurrentSeq();
  clearInterval(intervalID);
}, 2000);

$(".tile").click(function () {
  if (!isClickEnabled) return;
  noOfClicks++;
  if (noOfClicks <= gameCount) {
    // build the ID of which of the 16 elements (divs) was clicked
    tileIdString = $(this).attr("id");
    let tileId = parseInt(tileIdString.split("tile")[1]);
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
    document.getElementById("gamerLives").style.backgroundColor = "#f00";

    let timeoutID = setTimeout(() => {
      document.getElementById("gamerLives").style.backgroundColor = "#000";
      clearTimeout(timeoutID);
    }, 3000);

    remainingLives--;
    document.querySelector("#gamerLives").innerHTML = remainingLives;

    if (remainingLives > 0 && remainingLives <= 3) {
      let timeoutID = setTimeout(() => {
        alert("You've made a mistake and lose a life!");
        alert("Are you ready to continue?");
        clearTimeout(timeoutID);
      }, 1000);
    }

    if (remainingLives == 0) {
      $(function () {
        $("#playAgainModal").appendTo("body");
      });

      let playAgainModalQuestion =
        "<p>Oops!! You made a wrong choice but you got to level </p>";
      $(".modal-header").html(`${playAgainModalQuestion}<br><br>${gameCount}`);

      $(".modal-body").html(
        `${userName.toUpperCase()} - would you like to play again?`
      );

      setTimeout(function () {
        $("#playAgainModal").modal("show");
      }, 500);

    //   displayAllTiles();

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
    $(function () {

      $("#playAgainModal").appendTo("body");

      let playAgainModalQuestion = "<p>W E L L  D O N E   </p>";
      $(".modal-header").html(
        `${playAgainModalQuestion}`
      );

      $(".modal-body").html(
        `Would you like to play again, ${userName.toUpperCase()}?`
      );

      $("#playAgainModal").modal("show");

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
    });

    noOfClicks = 0;
    gameCount = 3;
    index = 0;
    runningIndex = 0;
    tileSeq = [];
    tileColorSeq = [];
    tileIdString = "";
    tileId = 0;

    
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
