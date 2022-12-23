var alphabet = "abcdefghijklmnoprstuwxyz".split("");
var countElements = 0;
var getRandomNumber = function (array) {
    var biggestLengthOfChunk = 8;
    var samllestLengthOfChunk = 4;
    if (countElements >= array.length - samllestLengthOfChunk - 6)
        biggestLengthOfChunk = 7;
    if (countElements >= array.length - samllestLengthOfChunk - 5)
        biggestLengthOfChunk = 6;
    if (countElements >= array.length - samllestLengthOfChunk - 4)
        biggestLengthOfChunk = 5;
    return Math.floor(Math.random() * (biggestLengthOfChunk - 4)) + 4;
};
var aggregateIntoChunks = function (array) {
    if (array.length < 1)
        return;
    var result = [];
    var chunk = [];
    var randomNumber = getRandomNumber(array);
    for (var i = 0; i < array.length; i++) {
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
