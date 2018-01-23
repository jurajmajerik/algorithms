document.addEventListener("DOMContentLoaded", function(event) {
  // Find the Longest Word in a String
  let longestWordButton = document.getElementById("longest-word-button");
  longestWordButton.addEventListener('click', function() {
    let longestWordInput = document.getElementById("longest-word-input").value;
    let longestWordOutput = document.getElementById("longest-word-output");
    let arr = longestWordInput.split(" ");
    let winner = arr[0];
    for ( let i = 0; i < arr.length; i++) {
      if (arr[i].length > winner.length) {
        winner = arr[i];
      }
    }
    longestWordOutput.innerHTML = winner;
  });




});
