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

const data = [1, 2, 3, 4, 5, 6];

const mapFn = function <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => T
) {
  return array.reduce(
    (accumulator: T[], currentValue: T, index: number, array: T[]) => {
      accumulator.push(callback(currentValue, index, array));
      return accumulator;
    },
    []
  );
};

const mapFnResult = mapFn(data, (element: number) => element * 2);

console.log(mapFnResult);

const filterFn = function <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => boolean
) {
  return array.reduce(
    (accumulator: T[], currentValue: T, index: number, array: T[]) => {
      if (callback(currentValue, index, array)) accumulator.push(currentValue);
      return accumulator;
    },
    []
  );
};

const filterFnResult = filterFn(
  data,
  (element: number, index: number, array: number[]) => element * 2 > 5
);

console.log(filterFnResult);

const everyFn = function <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => boolean
) {
  return array
    .slice(0)
    .reduce((accumulator: T[], currentValue: T, index: number, array: T[]) => {
      // how to break reduce, forEach, map...

      if (!callback(currentValue, index, array)) {
        array.splice(1);
        return false;
      }
      return true;
    }, []);
};

const everyFnResult = everyFn(
  data,
  (element: number, index: number, array: number[]) => element > 1
);

console.log(everyFnResult);

const someFn = function <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => boolean
) {
  return array
    .slice(0)
    .reduce((accumulator: T[], currentValue: T, index: number, array: T[]) => {
      if (callback(currentValue, index, array)) {
        array.splice(1);
        return true;
      }
      return false;
    }, []);
};

const someFnResult = someFn(
  data,
  (element: number, index: number, array: number[]) => element > 5
);

console.log(someFnResult);
