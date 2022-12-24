const alphabet: string[] = "abcdefghijklmnoprstuwxyz".split("");

let countElements: number = 0;

// coaching habbit

const getRandomNumber = function () {
  let biggestLengthOfChunk: number = 8;

  let samllestLengthOfChunk = 4;
  return (
    Math.floor(Math.random() * (biggestLengthOfChunk - samllestLengthOfChunk)) +
    samllestLengthOfChunk
  );
};

const aggregateIntoChunks = function <T>(array: T[]) {
  if (array.length < 1) return;

  let result: T[][] = [];

  let chunk: T[] = [];

  let randomNumber: number = getRandomNumber();

  for (let i = 0; countElements <= array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === randomNumber) {
      countElements += randomNumber;
      result.push(chunk);
      randomNumber = getRandomNumber();
      chunk = [];
    }

    if (countElements > array.length) {
      result = result.slice(0, -2);
      countElements = result.flat().length;
      i = result.flat().length - 1;
    }

    if (countElements === array.length) return result;
  }

  return result;
};

console.log(aggregateIntoChunks(alphabet));
