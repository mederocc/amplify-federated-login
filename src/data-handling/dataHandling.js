export function capitalizeFirstLetter(inputString) {
  if (inputString.length === 0) {
    return inputString;
  }
  return inputString[0].toUpperCase() + inputString.slice(1);
}
