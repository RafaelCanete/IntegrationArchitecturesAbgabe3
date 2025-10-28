import axios from "axios";

async function getBonus() {
  const res = await axios.get("http://localhost:3000/api/bonus/5000");
  console.log(res.data);
}
getBonus();
