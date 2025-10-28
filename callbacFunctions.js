// callback function example

function getData(callback) {
  setTimeout(() => callback("Data loaded"), 1000);
}

getData(result => console.log(result));
