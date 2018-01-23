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

  // Title Case a Sentence
  let titlecaseButton = document.getElementById("titlecase-button");
  titlecaseButton.addEventListener('click', function() {
    let titlecaseInput = document.getElementById("titlecase-input").value;
    let titlecaseOutput = document.getElementById("titlecase-output");
    let result = "";
    // Split str into array of words
    let myArr = titlecaseInput.split(" ");
    // Outer Loop through the words
    for (let i = 0; i < myArr.length; i++) {
      // Inner Loop through the letters
      for (let j = 0; j < myArr[i].length; j++) {
        // If j=0 -> Capitalize the letter, then add to result
        if (j === 0) {
          result += myArr[i][j].toUpperCase();
          // If i!=0 -> Lowercase the letter, add to result
        } else {
          result += myArr[i][j].toLowerCase();
        }
      }
      // End of Inner Loop - add a whitespace
      result += " ";
    }
    // End of Outer Loop - remove last whitespace
    let myArr2 = result.split(" ");
    myArr2.pop();
    result = myArr2.join(" ");
    titlecaseOutput.innerHTML = result;
  });

  // Sum All Odd Fibonacci Numbers
  let fibonacciButton = document.getElementById("fibonacci-button");
  fibonacciButton.addEventListener('click', function() {
    let fibonacciTo = document.getElementById("fibonacci-to").value;
    let fibonacciOutput1 = document.getElementById("fibonacci-output-1");
    let fibonacciOutput2 = document.getElementById("fibonacci-output-2");
    let fibonacciOutput1Label = document.getElementById("fibonacci-output-1-label");
    let fibonacciOutput2Label = document.getElementById("fibonacci-output-2-label");

    let myArr = [1, 1];
    // Determine all fibonacci numbers in the range
    do {
      myArr.push(myArr[myArr.length - 1] + myArr[myArr.length - 2]);
    } while (myArr[myArr.length - 1] <= fibonacciTo);

    if (myArr[myArr.length - 1] > fibonacciTo) {
      myArr.pop();
    }
    // Get the odd fibonaccis
    let oddNumbers = [];
    for (var i = 0; i < myArr.length; i++) {
      if (myArr[i] % 2 != 0) {
        oddNumbers.push(myArr[i]);
      }
    }
    fibonacciOutput1Label.className = "label-display";
    fibonacciOutput1.innerHTML = oddNumbers;
    // Sum
    let result = oddNumbers.reduce(function(a, b) { return a + b });
    fibonacciOutput2Label.className = "label-display";
    fibonacciOutput2.innerHTML = result;
  });




});
