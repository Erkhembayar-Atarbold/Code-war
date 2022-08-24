//Write a fried or foe func

const friendOrFoe = (frieds) => {
  //Loop through the array

  //condition to check if array element less than 4 length

  let friend = [];

  for (let i = 0; i < frieds.length; i++) {
    if (frieds[i].length === 4) {
      friend.push(frieds[i]);
    }
  }
  return friend;
};

// console.log(friendOrFoe(["Ryan", "Kieran", "Mark"]));
