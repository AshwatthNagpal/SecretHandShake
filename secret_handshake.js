export const secretHandshake = (decimalNumber) => {
  if (!Number.isInteger(decimalNumber)) {
    throw new Error('Handshake must be a number');
  }
  let localCopyOfNumber = decimalNumber;
  let result = [];
  let toReverseOrNotTo = true;
  while (localCopyOfNumber >= 16) {
    localCopyOfNumber -= 16;
    toReverseOrNotTo = !toReverseOrNotTo;
  }
  while (localCopyOfNumber >= 8) {
    result.push('jump');
    localCopyOfNumber -= 8;
  }
  while (localCopyOfNumber >= 4) {
    result.push('close your eyes');
    localCopyOfNumber -= 4;
  }

  if (localCopyOfNumber >= 2) {
    result.push('double blink');
    localCopyOfNumber -= 2;
  }
  if (localCopyOfNumber === 1) {
    result.push('wink');
  }

  return toReverseOrNotTo ? result.reverse() : result;
};
