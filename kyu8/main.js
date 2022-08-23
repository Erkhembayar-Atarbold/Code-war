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
