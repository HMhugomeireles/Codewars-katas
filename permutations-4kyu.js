/**

In this kata you have to create all permutations of an input string and remove duplicates, 
if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']


 */

function permutations(string) {
  if (string.length <= 1) {
    return [string];
  }

  let finalPermutations = permutations(string.substring(1)).reduce((acc, p) => {
    let charList = p.split("");
    for (let i = 0; i <= charList.length; i++) {
      let newPermutation = charList
        .slice(0, i)
        .concat([string[0]])
        .concat(charList.slice(i))
        .join("");
      if (!acc.includes(newPermutation)) {
        acc.push(newPermutation);
      }
    }
    return acc;
  }, []);
  return finalPermutations;
}

console.log(permutations("a")); // ['a']
console.log(permutations("ab")); // ['ab', 'ba']
console.log(permutations("aabb")); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
