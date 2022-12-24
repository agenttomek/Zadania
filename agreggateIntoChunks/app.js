var alphabet = "abcdefghijklmnoprstuwxyz".split("");
var countElements = 0;
// coaching habbit
var getRandomNumber = function () {
    var biggestLengthOfChunk = 8;
    var samllestLengthOfChunk = 4;
    return (Math.floor(Math.random() * (biggestLengthOfChunk - samllestLengthOfChunk)) +
        samllestLengthOfChunk);
};
var aggregateIntoChunks = function (array) {
    if (array.length < 1)
        return;
    var result = [];
    var chunk = [];
    var randomNumber = getRandomNumber();
    for (var i = 0; countElements <= array.length; i++) {
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
        if (countElements === array.length)
            return result;
    }
    return result;
};
console.log(aggregateIntoChunks(alphabet));
