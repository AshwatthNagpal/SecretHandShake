export const secretHandshake = (decimalNumber) => {
  let localCopyOfNumber = decimalNumber;
  let result = [];
  if (localCopyOfNumber === 8) {
    return ['jump'];
  }
  if (localCopyOfNumber === 4) {
    return ['close your eyes'];
  }

  if (localCopyOfNumber >= 2) {
    result.push('double blink');
    localCopyOfNumber -= 2;
  }
  if (localCopyOfNumber === 1) {
    result.push('wink');
  }
  return result.reverse();
};
