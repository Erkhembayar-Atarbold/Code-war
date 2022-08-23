//Write program that finds a word in a string and multiplies it by a amount

const wordClone = (str, cloneInt, target) => {
  let arrE = [];
  //Turn the str to a array
  const arr = str.split(" ");

  console.log(arr);
  //loop array and find the word that meets the str argument function

  const loopArr = arr.filter((ele) => {
    return ele === target ? ele : 0;
  });
  //Multiple that word using a string and push to array
  for (let i = 0; i < cloneInt; i++) {
    arrE.push(loopArr);
  }
  //turn the array to a string and return

  return String(arrE);
};

// console.log(wordClone("drank pass faded", 10, "drank"));

//Write function that checks is n is square perfect

function squarePerfect(n) {
  //make sure is n is above 0
  if (n < 0) {
    return "fail test n";
  } else if (Number.isInteger(n)) {
    return "pass test square";
  } else {
    return NaN;
  }
  //if n is > 0 apply Number.isInterger(n)
}

//Make a int to opposite
const oppositeInt = (number) => {
  return -number;
};

//Code a program that will get a century from a year
// const findCentury = (year) => {
//   return Math.floor((year - 1) / 100 + 1);
// };

//Sum all odd numbers in array
const addOdd = (arr) => {
  return arr
    .filter((ele) => (ele % 2 !== 0 ? ele : 0))
    .reduce((sum, cur) => sum + cur, 0);
};
console.log(addOdd([1, 1, 19, 9, 5]));
