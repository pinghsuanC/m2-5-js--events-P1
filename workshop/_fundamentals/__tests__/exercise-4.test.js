const getValues = require("../exercise-4");

// Write 3 more expect functions to test the function you just wrote.
test("Exercise 4", () => {
  expect(
    getValues(
      [
        { name: "chris", age: 23 },
        { name: "liv", age: 36 },
        { name: "dave", age: 43 },
      ],
      "name"
    )
  ).toStrictEqual(["chris", "liv", "dave"]);
  // add more tests here...
  expect(
    getValues(
      [
        { name: "chris", age: 23, country: "Canada"},
        { name: "liv", age: 36, country: "America"},
        { name: "dave", age: 43 },
      ],
      "country"
    )
  ).toStrictEqual(["Canada", "America"]);

  expect(
    getValues(
      "testing",
      "country"
    )
  ).toStrictEqual(undefined);

  expect(
    getValues(
      [
        { name: "chris", age: 23, country: "Canada"},
        { name: "liv", age: 36, country: "America"},
        { name: "dave", age: 43 },
      ],
      "region"
    )
  ).toStrictEqual([]);
});
