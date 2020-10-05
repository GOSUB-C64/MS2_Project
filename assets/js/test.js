console.log("OK");

let randomArray = [];

function printRandomArray() {

  while (randomArray.length < 10) {
    let num = Math.floor(Math.random() * 10) + 1;

    if(!randomArray.includes(num)){
        randomArray.push(num);
    }
  }
}

printRandomArray();
console.log(randomArray);

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
