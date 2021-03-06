document.addEventListener("DOMContentLoaded", function(event) {

  // BUTTONS: TREAT ENTER AS A CLICK
  function buttonEnter(inputId, buttonId) {
    let input = document.getElementById(inputId);
    input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById(buttonId).click();
      }
    });
  }

  // Find the Longest Word in a String
  buttonEnter("longest-word-input", "longest-word-button");
  const longestWordButton = document.getElementById("longest-word-button");
  longestWordButton.addEventListener('click', function() {
    const longestWordInput = document.getElementById("longest-word-input").value;
    const longestWordOutput = document.getElementById("longest-word-output");
    let arr = longestWordInput.split(" ");
    let winner = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > winner.length) {
        winner = arr[i];
      }
    }
    longestWordOutput.innerHTML = winner;
  });

  // Title Case a Sentence
  buttonEnter("titlecase-input", "titlecase-button");
  const titlecaseButton = document.getElementById("titlecase-button");
  titlecaseButton.addEventListener('click', function() {
    const titlecaseInput = document.getElementById("titlecase-input").value;
    const titlecaseOutput = document.getElementById("titlecase-output");
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
  buttonEnter("fibonacci-to", "fibonacci-button");
  const fibonacciButton = document.getElementById("fibonacci-button");
  fibonacciButton.addEventListener('click', function() {
    const fibonacciTo = document.getElementById("fibonacci-to").value;
    const fibonacciOutput1 = document.getElementById("fibonacci-output-1");
    const fibonacciOutput2 = document.getElementById("fibonacci-output-2");
    const fibonacciOutput1Label = document.getElementById("fibonacci-output-1-label");
    const fibonacciOutput2Label = document.getElementById("fibonacci-output-2-label");

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
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] % 2 != 0) {
        oddNumbers.push(myArr[i]);
      }
    }
    fibonacciOutput1Label.className = "label-display";
    fibonacciOutput1.innerHTML = oddNumbers.join(", ");
    // Sum
    let result = oddNumbers.reduce(function(a, b) {
      return a + b
    });
    fibonacciOutput2Label.className = "label-display";
    fibonacciOutput2.innerHTML = result;
  });

  // Search and Replace
  buttonEnter("replace-input-3", "replace-button");
  const replaceButton = document.getElementById("replace-button");
  replaceButton.addEventListener('click', function() {
    const replaceInput1 = document.getElementById("replace-input-1").value;
    const replaceInput2 = document.getElementById("replace-input-2").value;
    const replaceInput3 = document.getElementById("replace-input-3").value;
    const replaceOutput = document.getElementById("replace-output");
    let myArr = replaceInput1.split(" ");
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] === replaceInput2) {
        if (myArr[i][0] === myArr[i][0].toUpperCase()) {
          let wordLower = replaceInput3;
          let wordUpper = wordLower[0].toUpperCase();
          for (let i = 1; i < wordLower.length; i++) {
            wordUpper += wordLower[i];
          }
          myArr.splice(myArr.indexOf(myArr[i]), 1, wordUpper);
        } else {
          myArr.splice(myArr.indexOf(myArr[i]), 1, replaceInput3);
        }
      }
    }
    result = myArr.join(" ");
    replaceOutput.innerHTML = result;
  });

  // Sum All Primes
  buttonEnter("primes-to", "primes-button");
  const primesButton = document.getElementById("primes-button");
  primesButton.addEventListener('click', function() {
    const primesTo = document.getElementById("primes-to").value;
    const primesOutput1 = document.getElementById("primes-output-1");
    const primesOutput2 = document.getElementById("primes-output-2");
    const primesOutput1Label = document.getElementById("primes-output-1-label");
    const primesOutput2Label = document.getElementById("primes-output-2-label");

    let allNums = [1, 2];
    let primes = [2];
    let current = 2;
    let isPrime = true;

    while (allNums[allNums.length - 1] < primesTo) {
      current += 1;
      allNums.push(current);
      // Try to divide current by each member of allNums
      for (var i = 0; i < allNums.length; i++) {
        // Skip 1 and current
        if (allNums[i] != 1 && allNums[i] != current) {
          // Check if divisible without remainder
          if (current % allNums[i] === 0) {
            isPrime = false;
            break;
          }
        }
      }
      if (isPrime === true) {
        primes.push(current);
      }
      isPrime = true;
    }

    primesOutput1Label.className = "label-display";
    primesOutput1.innerHTML = primes.join(", ");
    // Sum
    let result = (primes.reduce(function(a, b) {
      return a + b
    }));
    primesOutput2Label.className = "label-display";
    primesOutput2.innerHTML = result;
  });

  // Missing Letters
  buttonEnter("letters-input", "letters-button");
  const lettersButton = document.getElementById("letters-button");
  lettersButton.addEventListener('click', function() {
    const lettersInput = document.getElementById("letters-input").value;
    const lettersOutput = document.getElementById("letters-output");
    const lettersOutputLabel = document.getElementById("letters-output-label");

    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let arrAlphabet = alphabet.split("");
    let myArr = lettersInput.split("");
    let result;

    if (myArr === arrAlphabet) {
      return result;
    } else {
      // Remove from alphabet all letters leading up to myArr[0]
      while (arrAlphabet[0] != myArr[0]) {
        arrAlphabet.shift();
      }
      // Loop through the alphabet
      for (let i = 0; i < arrAlphabet.length; i++) {
        if (arrAlphabet[i] != myArr[i]) {
          result = arrAlphabet[i];
          break
        }
      }
    }
    lettersOutputLabel.className = "label-display";
    lettersOutput.innerHTML = result;
  });

});
