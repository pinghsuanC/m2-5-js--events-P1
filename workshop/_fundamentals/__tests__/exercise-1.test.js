const letterCount = require("../exercise-1");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 1", () => {
  expect(letterCount(["crisp", "bacon"])).toBe(10);
  // add more tests here...
  expect(letterCount(["crisp", "bacon", 3])).toBe(10);
  expect(letterCount(["crisp", "bacon", {name:"JOHN"}])).toBe(10);
  expect(letterCount(["crisp", "bacon", ""])).toBe(10);
});
