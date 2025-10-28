// promise example

const fetchData = new Promise((resolve, reject) => {
  const ok = true;
  ok ? resolve("Success") : reject("Error");
});

fetchData
  .then(data => console.log(data))
  .catch(err => console.error(err));
