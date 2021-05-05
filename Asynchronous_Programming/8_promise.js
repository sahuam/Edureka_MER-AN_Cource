var myPromise = new Promise((resolve, reject) => {
  let String1 = "Welcome to NodeJS";
  let String2 = "Welcome to NodeJS";
  if (String1 == String2) {
    resolve("both are same");
  } else {
    reject("Both are NOT same");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
