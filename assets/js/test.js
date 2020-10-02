console.log("OK");

function selectNumber() {
  var numArr = [];
  var num = 0;
  var count = 1;
  var duplicate = 0;

  while (count <= 10) {
    debugger;
    num = Math.floor(Math.random() * 12) + 1;
    debugger;
    if (numArr.length < 1) {
      console.log("empty array getting 1st element");
      numArr.push(num);
    } else {
      debugger;
      for (var index = 0; index <= numArr.length; index++) {
        if (numArr[index] != num) {
          numArr.push(num);
          count++;
        } else {
          break;
        }

      }
    }
  }
  console.log(numArr);
}

selectNumber();

// var arr1 = [];
// var arr = [];
// arr[0] = 7;
// var x = 7;
// if(arr[0] === x){
//     console.log("A Match!");
// }
// if(arr1 = []){
//   console.log("Blank");
// } else {
//   console.log("FULL");
// }
