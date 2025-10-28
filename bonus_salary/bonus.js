function calculateBonus(sales) {
  return sales < 5000 ? 0 : sales * 0.1;
}
export default { calculateBonus };
