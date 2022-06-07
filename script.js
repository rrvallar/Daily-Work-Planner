$(document).ready(function () {
  //CURRENT DATE AND TIME
  let a = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#current-date").text(a);
});

// function saveData() {
//   localStorage = document.getElementsByClassName("btn").value;
// }

// function saveData() {
//   let input = document.getElementById("userInput").value;
//   alert(input);
// }

//TEST

// $("#save").click(function () {
//   $("#9").css("color", "blue");
// // });
// $("button.btn.btn-success").click(function (e) {});

//Save user input to local storage(Need to display only on button click)

// let userInput = document.querySelector("#userInput");
// userInput.value = localStorage.getItem("data");
// $("#save").click(function (event) {
//   localStorage.setItem("data", event.target.value);
//   alert("click");
// });
let saveBtn = document.querySelector("#saveBtn");
let userInput = document.querySelector("#userInput");

userInput.value = localStorage.getItem("data");
userInput.addEventListener("keyup", (event) => {
  localStorage.setItem("data", event.target.value);
});

// saveBtn.onClick = function () {
//   userInput.value = localStorage.getItem("data");
//   userInput.addEventListener("keyup", (event) => {
//     localStorage.setItem("data", event.target.value);
//   });
// };

// $("#save").click(function (event) {
//   localStorage.setItem("data", event.target.value);
//   console.log("click");
// });
