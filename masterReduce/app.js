// type TFilterFn = <T>(
//   array: T[],
//   callback: (element: T, index: number, array: T[]) => boolean
// ) => T[];
// type TMapFn = <T>(
//   array: T[],
//   callback: (element: T, index: number, array: T[]) => T
// ) => T[];
// type TEverySomeFns = <T>(
//   array: T[],
//   callback: (element: T, index: number, array: T[]) => boolean
// ) => boolean;
var data = [1, 2, 3, 4, 5, 6];
var mapFn = function (array, callback) {
    return array.reduce(function (accumulator, currentValue, index, array) {
        accumulator.push(callback(currentValue, index, array));
        return accumulator;
    }, []);
};
var mapFnResult = mapFn(data, function (element) { return element * 2; });
console.log(mapFnResult);
var filterFn = function (array, callback) {
    return array.reduce(function (accumulator, currentValue, index, array) {
        if (callback(currentValue, index, array))
            accumulator.push(currentValue);
        return accumulator;
    }, []);
};
var filterFnResult = filterFn(data, function (element, index, array) { return element * 2 > 5; });
console.log(filterFnResult);
var everyFn = function (array, callback) {
    return array
        .slice(0)
        .reduce(function (accumulator, currentValue, index, array) {
        // how to break reduce, forEach, map...
        if (!callback(currentValue, index, array)) {
            array.splice(1);
            return false;
        }
        return true;
    }, []);
};
var everyFnResult = everyFn(data, function (element, index, array) { return element > 1; });
console.log(everyFnResult);
var someFn = function (array, callback) {
    return array
        .slice(0)
        .reduce(function (accumulator, currentValue, index, array) {
        if (callback(currentValue, index, array)) {
            array.splice(1);
            return true;
        }
        return false;
    }, []);
};
var someFnResult = someFn(data, function (element, index, array) { return element > 5; });
console.log(someFnResult);
