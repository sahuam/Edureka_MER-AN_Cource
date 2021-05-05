var delay = (seconds, callback) => {
  setTimeout(callback, seconds * 1000);
};

console.log("starts delaying");

//callback(err, returnedData1, returnedDate2, ...)

// Disadvantages
// 1. Callback hell --> Tree structure
// 2. not readable, maintainable, or debuggable
// 3. error handling happens at every callback
//

//Callback Hell + chaining
delay(2, (err) => {
  console.log("Two Seconds");
  if (!err) {
    delay(1, (err) => {
      console.log("Three Seconds");
      if (!err) {
        delay(1, (err) => {
          console.log("Four Seconds");
        });
      }
    });
  }
});


// SOLUTION 
// Bluebird -- Package
// Standard in  ES6