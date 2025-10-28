// async/await example

fetchData = new Promise((resolve, reject) => {
  const ok = true;
  ok ? resolve("Success") : reject("Error");
});

async function load() {
  try {
    const data = await fetchData;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
load();
