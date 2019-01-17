const decimalCodesToSecretHandshake = {
  8: 'jump',
  4: 'close your eyes',
  2: 'double blink',
  1: 'wink',
};

export const secretHandshake = (decimalNumber) => {
  if (!Number.isInteger(decimalNumber)) {
    throw new Error('Handshake must be a number');
  }
  let localCopyOfNumber = decimalNumber;
  const result = [];
  let toReverseOrNotTo = true;

  while (localCopyOfNumber >= 16) {
    localCopyOfNumber -= 16;
    toReverseOrNotTo = !toReverseOrNotTo;
  }
  [8, 4, 2, 1].forEach((decimalCodes) => {
    if (localCopyOfNumber >= decimalCodes) {
      localCopyOfNumber -= decimalCodes;
      result.push(decimalCodesToSecretHandshake[decimalCodes]);
    }
  });
  return toReverseOrNotTo ? result.reverse() : result;
};


