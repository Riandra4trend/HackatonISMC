export const formatPrice = (number: number) => {
  // Convert the number to string
  const numberString = number.toString();

  const [integerPart, decimalPart = ""] = numberString.split(".");

  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  const formattedNumber = decimalPart
    ? `${formattedInteger}.${decimalPart}`
    : formattedInteger;

  return formattedNumber;
};
