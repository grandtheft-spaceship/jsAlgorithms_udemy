function maxStockProfit(array) {
  let buyPrice = 0;
  let sellPrice = 0;
  let maxProfit = -1;
  let changeBuyPrice = true; // This variable gets set to either `true` or `false` on the previous iteration of each loop

  for (let i = 0; i < array.length; i++) {
    if (changeBuyPrice) buyPrice = array[i];
    sellPrice = array[i + 1];

    if (sellPrice < buyPrice) { // We want to 'buy' at the lowest price
      changeBuyPrice = true; // This means that we are going to change the `buyPrice` on the next iteration because we know the current price on the NEXT iteration is lower than it is now
    }
    else {
      let tempProfit = sellPrice - buyPrice;
      if (tempProfit > maxProfit) maxProfit = tempProfit;
      changeBuyPrice = false;
    }
  }
  return maxProfit;
};

let prices = [32,46,26,38,40,48,42];
let prices2 = [10,18,4,5,9,6,16,12];
console.log(maxStockProfit(prices));
console.log(maxStockProfit(prices2));
