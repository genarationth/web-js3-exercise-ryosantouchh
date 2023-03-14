const edFriends = (a, b, c) => {
  console.log(`Welcome ${a}, ${b}, ${c}.`);
};

const age = (x) => new Date().getFullYear() - x;

const edFriendsAge = (a, year1, b, year2, c, year3) => {
  console.log(
    `Welcome ${a}, you are ${age(year1)}. Welcome ${b}, you are ${age(
      year2
    )}. Welcome ${c}, you are ${age(year3)}.`
  );
};
