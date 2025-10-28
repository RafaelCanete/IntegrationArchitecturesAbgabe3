import { get } from "axios";

async function getBonus() {
  const res = await get("http://localhost:3000/api/bonus/5000");
  console.log(res.data);
}
getBonus();
