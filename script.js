$(document).ready(function () {
  function writeDescription() {
    for (var i = 1; i < 10; i++) {
      var data = localStorage.getItem(`data${i}`);
      $(`#userInput${i}`).text(data);
    }
  }
  //Function to Update color based on current time
  function updateScheduleColor() {
    let currentHour = moment().format("h");
    // currentHour = 4;
    for (var i = 1; i < 10; i++) {
      var t = $(`.timeFrame-${i}`).text();
      currentTime = 0;
      // extract time to get the current times
      if (t.length == 4) {
        currentTime = t.slice(0, 2);
      } else if (t.length == 3) {
        currentTime = t.slice(0, 1);
      }
      // compare time to change color
      if (currentHour == currentTime) {
        $(`#userInput${i}`).css("background-color", "green");
      } else if (currentTime < currentHour) {
        console.log("color grey");
        $(`#userInput${i}`).css("background-color", "grey");
      } else {
        console.log("color red");
        $(`#userInput${i}`).css("background-color", "red");
      }
    }
  }
  //CURRENT DATE AND TIME
  let a = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  $("#current-date").text(a);

  // add to localStorage the input desc
  $(":button").click(function () {
    id = this.id.charAt(this.id.length - 1);
    // retrieve data from the right textarea
    var userInput = document.getElementById(`userInput${id}`);
    // var userInput2 = $(`#userInput${id}`);
    localStorage.setItem(`data${id}`, userInput.value);
  });
  writeDescription();
  updateScheduleColor();

  // Array: ["h", "e", "l", "l", "o"] => Array[5] =error
  //  "hello" 0,1,2,3,4   => length - 1
  // "hello".charAt(len - 1) => "hello" at index (5 - 1)
});
