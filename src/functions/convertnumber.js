export const convertNumber = (number) => {
  const numberWithCommas = number.toLocaleString();
  var arr = numberWithCommas.split(",");
  if (arr.length === 5) {
    // Trillions
    return parseFloat(arr[0] + "." + arr[1].slice(0, 2)) + "T";
  } else if (arr.length === 4) {
    // Billions
    return parseFloat(arr[0] + "." + arr[1].slice(0, 2)) + "B";
  } else if (arr.length === 3) {
    // Millions
    return parseFloat(arr[0] + "." + arr[1].slice(0, 2)) + "M";
  } else if (arr.length === 2) {
    // Thousands
    return parseFloat(arr[0] + "." + arr[1].slice(0, 2)) + "K";
  } else {
    // Less than 1000
    return numberWithCommas;
  }
};
