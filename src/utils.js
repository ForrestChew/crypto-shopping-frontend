export const capitalizeStr = (string) => {
  if (string) return string.charAt(0).toUpperCase() + string.slice(1);
};

export const numToPrice = (number) => {
  if (number) {
    const numWithDecimal = number.toFixed(2);
    const numToArr = numWithDecimal.toString().split("");
    let cntTillComma = 0;
    for (let i = numToArr.length - 1; i > 0; i--) {
      cntTillComma++;
      if (cntTillComma === 3 && numToArr[i] !== ".") {
        numToArr.splice(i, 0, ",");
        cntTillComma = 0;
      }
    }
    numToArr.unshift("$");
    const price = numToArr.join("");
    return price;
  }
};

export const priceToTopDealPrice = (price) => {
  if (price) return numToPrice(price * 0.8);
};

export const cartPriceIncludingTax = (number) => {
  if (number) return numToPrice(number * 1.08);
};
