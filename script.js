let User1 = { name: "User1", age: 25 };
let User2 = { name: "User2", age: 30 };
let User3 = { name: "User3", age: 28 };
let arr = [ User1, User2, User3];
function sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
  }