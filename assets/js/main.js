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

function displayColouredTile(x) {
  let Id = "#tile" + tileSeq[x];
  $(Id).css("background-color", tileColorSeq[x]);
  console.log("displayColouredTile - index = ", x);
  console.log(tileColorSeq, tileSeq);
  // debugger;

  return Id;
}

function displayGuess(tile){
    Id = "#tile" + tile;
    let a = tileSeq.indexOf(tile);
    $(Id).css("background-color", tileColorSeq[a]);
    debugger;
}




// function displayCurrentSeq(tileSeq, x) {
//   isClickEnabled = false;
//   console.log("IN displayCurrentSeq fn");

//   tileId = tileSeq[x];
//   tileColor = tileColorSeq[x];
//   displayColouredTile(tileId, tileColor); // this line works
//   let intervalID = setInterval(() => {
//     $("#tile" + tileId).css("background-color", "#000");
//     if (x < tileSeq.length) {
//       console.log("IN if statement of displayCurrentSeq fn");

//       x++;
//       displayCurrentSeq(tileSeq, x);
//     } else {
//       acceptUserInput();
//     }
//     clearTimeout(intervalID);
//     console.log("TIMEOUT CLEARED!!");
//   }, 1000);
//   return;
// }

function blinkTile() {
  let x = index;
  let tileId = displayColouredTile(x);
  index++;
  let intervalID = setInterval(() => {
    $(tileId).css("background-color", "#000");
    console.log("tileId = ", tileId, x);
    if (index < gameCount) {
      console.log("blink");
      blinkTile();
    } else {
      index = 0;
      acceptUserInput();
    }
    clearTimeout(intervalID);
  }, 2000);
}

function acceptUserInput() {
  isClickEnabled = true;
}

// ////////// Main Game Logic //////////

let tileSeq = generateTileArray();
let tileColorSeq = generateTileColourSeq(tileSeq);
blinkTile();

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
  //   $(tileSeq[gameCount-1]).css("background-color", "#000");

  noOfClicks++;
  if (noOfClicks <= gameCount) {
    console.log("clicks = ", noOfClicks);

    tileIdString = $(this).attr("id"); // build the ID of which of the 16 elements (divs) was clicked
    tileId = parseInt(tileIdString.split("tile")[1]);

    console.log("your tile id = ", tileId);
    answerSeq.push(tileId);

    // Glow the tile
    // let tileColor = tileColorSeq[tileId];
    // let currentIndex = index; // !!!!!!!!!!!!!!!
    displayGuess(tileId); // display users guess to screen grid

    // (un)-glow the tile
    let intervalID = setInterval(() => {
      $("#tile" + tileId).css("background-color", "#000");

      clearTimeout(intervalID);
    }, 2000);
  }
  console.log("NUMBER OF CLICKS = ", noOfClicks);

  // if currently clicked tile doesnt equal the one in the array then stop and game over
  if (tileId !== tileSeq[runningIndex]) {
    console.log("yours = ", tileId, "cpu's = ", tileSeq[runningIndex]);
    alert("! GAME OVER !");
    // else if all guesses equals the current game count  which is the maximum reached then add another tile and restart sequence
  } else if (noOfClicks === gameCount) {
    console.log("comparing noOfClicks to gameCount!!!");
    //   $(".tile").off("click");
    gameCount++; // increment game level (add 1 more tile)

    // index = 0;
    // displayCurrentSeq(tileSeq);

    // ok then continue
  } else {
    index++;
  }
});
