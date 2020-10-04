// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  // Insert missing solution please
  let first = (month==="January"||month==="March"||month==="May"||month==="July"||month==="August"||month==="October"||month==="December");
  let second = (month==="April"||month==="June"||month==="September"||month==="November");
  let third = (month==="February");
  let index = 0;
  if(first){
    index = 1;
  }else if(second){
    index = 2;
  }else if(third){
    index = 3;
  }

  switch(index){
    case 1:
      return 31;
    case 2:
      return 30;
    case 3:
      return 28;
    default:
      return "error";
  }
};

// 2. Do a console.log to verify your function.
console.log(getDaysInMonth("February"));
// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
