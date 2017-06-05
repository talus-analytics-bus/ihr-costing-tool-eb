export const valueAsCurrency = (value, currency = {}) => {
  // Format currency as USD by default
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  /*If currency code is a 3-character upper case letter code, add a space after.
   Otherwise, do not add a space.*/
  const currencyCode_tmp = currency.key;
  const regexp = /[A-Z][A-Z][A-Z]/gi;
  const addSpace = regexp.test(currencyCode_tmp);
  let currencyCode;

  if (currencyCode_tmp === "USD") {
    currencyCode = "$";
  }
  else if (addSpace) {
    currencyCode = currencyCode_tmp + " ";
  } else {
    currencyCode = currencyCode_tmp;
  }

  const formattedValArr = formatter.format(value || 0).split("$");

  formattedValArr[0] = currencyCode;
  return formattedValArr.join("");
}
