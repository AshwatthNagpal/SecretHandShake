export const secretHandshake = (decimalNumber) => {
  if (decimalNumber === 1) {
    return ['wink'];
  }
  if (decimalNumber === 2) {
    return ['double blink'];
  }
  if (decimalNumber === 4) {
    return ['close your eyes'];
  }
  return ['jump'];
};
