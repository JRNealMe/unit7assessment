const addToZero = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        console.log(true);
        return true;
      }
    }
  }
  console.log(false);
  return false;
};
console.log("addToZero");

//This would be O(n^2)

addToZero([]);
// -> False

addToZero([1]);
// -> False

addToZero([1, 2, 3]);
// -> False

addToZero([1, 2, 3, -2]);
// -> True

addToZero([-9, -7, -5, -3, -1, 0, 2, 4, 6, 8]);

//Question #2

const hasUniqueChars = (str) => {
  str = str.toLowerCase();
  let s = new Set();
  for (let i = 0; i <= str.length - 1; i++) {
    s.add(str[i]);
  }
  console.log(s.size === str.length ? true : false);
  return s.size === str.length ? true : false;
};
console.log("hasUniqueChars");

//This would be O(n)

hasUniqueChars("Monday");
// -> True

hasUniqueChars("Moonday");
// -> False

hasUniqueChars("Tuesday");
// -> True

hasUniqueChars("Wednesday");
// -> False

hasUniqueChars("Momday");
// -> False

//Question 3

const isPangram = (str) => {
  let alphabet = new Array(26).fill(false);

  let index;

  for (let i = 0; i < str.length; i++) {
    if ("A" <= str[i] && str[i] <= "Z")
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    else if ("a" <= str[i] && str[i] <= "z")
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    else continue;

    alphabet[index] = true;
  }

  for (let i = 0; i <= 25; i++)
    if (alphabet[i] == false) {
      console.log(false);
      return false;
    }
  console.log(true);
  return true;
};
console.log("isPangram");
// This is O(n)

isPangram("The quick brown fox jumps over the lazy dog!");
// -> True

isPangram("I like cats, but not mice");
// -> False

isPangram(
  "The job requires extra pluck and zeal from every young wage earner."
);
// -> True

isPangram("Jared loves this kinda stuff");
// -> False

//Question #4

const findLongestWord = (arr) => {
  let longest = 0;
  for (let i of arr) {
    if (i.length > longest) longest = i.length;
  }
  console.log(longest);
  return longest;
};
console.log("findLongestWord");
//This would be O(n)

findLongestWord(["hi", "hello"]);
// -> 5

findLongestWord([
  "dog",
  "cats",
  "elephant",
  "spider",
  "Parastratiosphecomyia stratiosphecomyioides",
]);
//43 characters
