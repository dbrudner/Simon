function theLoop (i) {
  setTimeout(function () {
    console.log("Cheese!");
    if (--i) {          // If i > 0, keep going
      theLoop(i);       // Call the loop again, and pass it the current value of i
    }
  }, 200);
};

theLoop(5)