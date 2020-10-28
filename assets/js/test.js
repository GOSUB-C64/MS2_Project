console.log("hello!")


let lastIntervalId, counter = 5;
const greeting = delay => {
  if (counter === 5) {
    clearInterval(lastIntervalId);
    lastIntervalId = setInterval(() => {
      console.log('Hello World. ', delay);
      greeting(delay + 100);
    }, delay);
    counter = 0;
  }
counter += 1;
};
greeting(100);


// const greeting = delay =>
//   setTimeout(() => {
//     console.log('Hello World. ' + delay);
//     greeting(delay + 1);
//   }, delay * 1000);

// greeting(1);


// let x = 0;
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function test() {
//   do {
//     console.log(nums[x]);
//     let intervalID = setInterval(() => {
//       clearInterval(intervalID);
//     }, 1000);
//     x++;
//   } while (x < 10);
// }
// test();

// $(document).ready(function () {
//   setTimeout(function () {
//     $("#myModal").modal("show");
//   }, 500);
// });

// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .getElementById('okButton')
//     .addEventListener("click", processUserName);
// });

// function processUserName() {
//   let userName = document.getElementById('getUserName').value;
//   console.log(userName);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr1 = [];

// function printArray() {
//   x = 0;
//   while (arr1.length < 10) {
//     let temp = arr[x];
//     arr1.push(temp);
//     x++;
//   }
//   console.log(arr, arr1);
// }

// printArray();

// // console.log("OK");

// // let randomArray = [];

// // function printRandomArray() {

// //   while (randomArray.length < 10) {
// //     let num = Math.floor(Math.random() * 10) + 1;

// //     if(!randomArray.includes(num)){
// //         randomArray.push(num);
// //     }
// //   }
// // }

// // printRandomArray();
// // console.log(randomArray);

// // var arr1 = [];
// // var arr = [];
// // arr[0] = 7;
// // var x = 7;
// // if(arr[0] === x){
// //     console.log("A Match!");
// // }
// // if(arr1 = []){
// //   console.log("Blank");
// // } else {
// //   console.log("FULL");
// // }
