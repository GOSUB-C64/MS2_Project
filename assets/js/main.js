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
var gameCount = 3; /* game starts at 1 grid square(tile) toggling on/off then increments by 1 each time the user is successful */
var isClickEnabled = false;
var noOfClicks = 0;
var index = 0;

// generate array 16 non-repeatable random nos (0-15) representing the 4x4 grid
function generateTileArray() {
  let tileSeq = [];
  while (tileSeq.length < 16) {
    let tile = Math.floor(Math.random() * 16);

    if (!tileSeq.includes(tile)) {
      tileSeq.push(tile);
    }
  }
  console.log(tileSeq);
  return tileSeq;
}

// assign each tile (div) its own color
function getColour(arr) {
  var nextColour;
  var colourMap = [
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
  let index = 0;
  let colArr = [];
  while (colArr.length < 16) {
    nextColour = arr[index];

    colArr.push(colourMap[nextColour]);
    index++;
  }
  console.log(colArr);
  return colArr;
}


function displayColouredTile(tileArr, colArr) {
  
  let Id = "#tile" + tileArr[index];
  $(Id).css("background-color", colArr[index]);
  
  index++;
  
  return Id;
}

// function displayCurrentSeq(tileSeq, x) {
//   isClickEnabled = false;
//   console.log("IN displayCurrentSeq fn");

//   tileId = tileSeq[x];
//   tileColor = tileColorSeq[x];
//   displayColouredTile(tileId, tileColor); // this line works
//   var intervalID = setInterval(() => {
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
  tileSeq = generateTileArray();
  tileColourSeq = getColour(tileSeq);
  
  let tileId = displayColouredTile(tileSeq, tileColourSeq);
    let intervalID = setInterval(() => {
      $("#tile" + tileId).css("background-color", "#000");
      if (tileSeq.length < gameCount) {
        blinkTile();
      } else {
        acceptUserInput();
      }
      clearTimeout(intervalID);
    }, 2000);
}

function acceptUserInput() {
  isClickEnabled = true;
}

// ////////// Main Game Logic //////////

blinkTile();
// console.log(tileSeq);

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
    console.log(tileId);
    answerSeq.push(tileId);

    // Glow the tile
    var tileColor = getColour(tileId);
    displayColouredTile(tileId, tileColor); // display users guess to screen grid

    // (un)-glow the tile
    var intervalID = setInterval(() => {
      $("#tile" + tileId).css("background-color", "#000");
    
      clearTimeout(intervalID);
    }, 1000);
  }
  console.log("NUMBER OF CLICKS = ", noOfClicks);

  if (tileId !== tileSeq[index]) {
    console.log(tileId, tileSeq[index]);
    alert("! GAME OVER !");

  } else if (noOfClicks === gameCount) {
    console.log("comparing noOfClicks to gameCount!!!");
    //   $(".tile").off("click");
    gameCount++; // increment game level (add 1 more tile)
    noOfClicks = 0; // reset the clicks

    answerSeq = []; // clear out the users' answer array
    index = 0;

    tileId = pickTile(); // get a number between 1/16 inc
    tileColor = getColour(tileId);
    tileColorSeq.push(tileColor);
    let x = 0;
    displayCurrentSeq(tileSeq, x);
  } else {
    index++;
  }
});
