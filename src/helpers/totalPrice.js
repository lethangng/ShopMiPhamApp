// Hàm tính tổng tiền
export const totalPrice = (products) => {
  let total = 0;
  products.forEach((product) => {
    total += product.price * product.count;
  });
  return total;
};
