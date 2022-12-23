const alphabet: string[] = "abcdefghijklmnoprstuwxyz".split("");

let countElements: number = 0;

const getRandomNumber = function (array) {
  let biggestLengthOfChunk: number = 8;

  let samllestLengthOfChunk = 4;
  if (countElements >= array.length - samllestLengthOfChunk - 6)
    biggestLengthOfChunk = 7;
  if (countElements >= array.length - samllestLengthOfChunk - 5)
    biggestLengthOfChunk = 6;
  if (countElements >= array.length - samllestLengthOfChunk - 4)
    biggestLengthOfChunk = 5;
  return Math.floor(Math.random() * (biggestLengthOfChunk - 4)) + 4;
};

const aggregateIntoChunks = function <T>(array: T[]) {
  if (array.length < 1) return;

  const result: T[][] = [];

  let chunk: T[] = [];

  let randomNumber: number = getRandomNumber(array);

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);
    if (chunk.length === randomNumber) {
      countElements += randomNumber;
      result.push(chunk);
      randomNumber = getRandomNumber(array);
      chunk = [];
    }
    if (countElements >= array.length - 7)
      randomNumber = array.length - countElements;
  }

  return result;
};

console.log(aggregateIntoChunks(alphabet));
