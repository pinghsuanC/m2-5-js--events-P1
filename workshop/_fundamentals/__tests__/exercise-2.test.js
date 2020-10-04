const combineArrays = require("../exercise-2");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 2", () => {
  expect(
    combineArrays(["crisp", "bacon"], ["zuchini", "apple"])
  ).toStrictEqual(["apple", "bacon", "crisp", "zuchini"]);
  // add more tests here...
  expect(
    combineArrays(["crisp", "bacon", 123], ["zuchini", "apple"])
  ).toStrictEqual(undefined);
  expect(
    combineArrays(["crisp", "bacon", "Apple", "Baby"], ["zuchini", "apple"])
  ).toStrictEqual(["Apple", "Baby", "apple", "bacon", "crisp", "zuchini"]);
});
