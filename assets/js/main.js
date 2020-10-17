console.log("hi");

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

const playerClickSnd = new Audio("assets/sounds/hint.wav");
const displaySeqSnd = new Audio("assets/sounds/pop.wav");

let tileIdString;
let answerSeq = []; // holds users guess for comparison later
let gameCount = 3; /* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user is successful */
let isClickEnabled = false;
let noOfClicks = 0;
let index = 0;
let runningIndex = 0;

// generate array 16 non-repeatable random nos (0-15) representing the 4x4 grid
function generateTileArray() {
  let arr = [];
  while (arr.length < 16) {
    let tile = Math.floor(Math.random() * 16);

    if (!arr.includes(tile)) {
      arr.push(tile);
    }
  }
  console.log(arr);
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
  console.log(colArr);
  return colArr;
}

function displayColouredTile() {
  let Id = "#tile" + tileSeq[x];
  $(Id).css("background-color", tileColorSeq[x]);
  console.log(
    "current tile = ",
    tileSeq[x],
    "current colour = ",
    tileColorSeq[x]
  );
  console.log("displayColouredTile - index = ", index);
  console.log(tileSeq);
  // debugger;

  return Id;
}

function displayGuess(tile) {
  Id = "#tile" + tile;
  console.log("YOUR GUESS = ", Id);
  let a = tileSeq.indexOf(tile);
  $(Id).css("background-color", tileColorSeq[a]);
  //   debugger;
}
// function to display all cells up to gameCount //
function displayCurrentSeq() {
    displaySeqSnd.play();
  isClickEnabled = false;
  if (runningIndex < gameCount) {
    let tileId = "#tile" + tileSeq[runningIndex];
    let tileColour = tileColorSeq[runningIndex];
    $(tileId).css("background-color", tileColorSeq[runningIndex]);

    console.log("tile = ", tileId, "colour = ", tileColour);
    let intervalID = setInterval(() => {
      $(tileId).css("background-color", "#000");
      runningIndex++;
      displayCurrentSeq();
      clearInterval(intervalID);
    }, 1000);
  } else {
    runningIndex = 0; // reset index counter so appropriate checks can be made
    acceptUserInput();
  }
  return;
}

function blinkTile() {
  if (x < gameCount) {
    let tileId = displayColouredTile();
    displaySeqSnd.play();
    // index++;
    let intervalID = setInterval(() => {
      $(tileId).css("background-color", "#000");
      console.log("tileId = ", tileId, "blinkTile index = ", index);
      x++;
      blinkTile();
      clearInterval(intervalID);
    }, 1000);
  } else {
    acceptUserInput();
  }
}

function acceptUserInput() {
  isClickEnabled = true;
}

// ////////// Main Game Logic //////////

// let start = document.getElementById("start button");
// start.addEventListener("click", startGame);

let tileSeq = generateTileArray();
let tileColorSeq = generateTileColourSeq(tileSeq);
let x = 0; // global used to access index's in arrays
let max = 16; // target level to reach!

  let intervalID = setInterval(() => {
    blinkTile();
    clearInterval(intervalID);
  }, 2000);


//
//
//
//
//
//
//
//

console.log("clicks(outside) = ", noOfClicks);
if (noOfClicks === gameCount) {
  console.log("FINAL TEST");

  // Seq same
  if (JSON.stringify(tileSeq) === JSON.stringify(answerSeq)) {
    alert("WIn");
  }
}

$(".tile").click(function () {
  if (!isClickEnabled) return;

  playerClickSnd.play();
  noOfClicks++;
  if (noOfClicks <= gameCount) {
    console.log("clicks = ", noOfClicks);

    tileIdString = $(this).attr("id"); // build the ID of which of the 16 elements (divs) was clicked
    tileId = parseInt(tileIdString.split("tile")[1]);

    console.log("your tile id = ", tileId);
    answerSeq.push(tileId);

    // Glow the tile
    displayGuess(tileId); // display users guess to screen grid

    // (un)-glow the tile
    let intervalID = setInterval(() => {
      $("#tile" + tileId).css("background-color", "#000");

      clearTimeout(intervalID);
    }, 1000);
  }

  // if currently clicked tile doesnt equal the one that the array index is pointing at, then stop and game over
  if (tileId !== tileSeq[runningIndex]) {
    console.log("yours = ", tileId, "cpu's = ", tileSeq[runningIndex]);
    alert("! GAME OVER !");
    // if max gameCount is reached then there must be a winner.
  } else if (noOfClicks === gameCount && gameCount === max) {
    console.log("! ! ! !   W I N N E R   ! ! ! !");

    // if all guesses equals the current game count  which is the maximum reached then add another tile and restart sequence
  } else if (noOfClicks === gameCount) {
    noOfClicks = 0;
    gameCount++; // increment game level (add 1 more tile)
    console.log("ALL CORRECT!");
    index++; // set to next element in array(s)
    runningIndex = 0;

    let intervalID = setInterval(() => {
      displayCurrentSeq();
      clearInterval(intervalID);
    }, 2000);
  }

  if (tileId === tileSeq[runningIndex]) {
    runningIndex++;
    console.log("I JUST GOT EXECUTED!!!");
  }
});
